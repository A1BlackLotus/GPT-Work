import type { APIRoute } from 'astro';
import { auth } from '@wix/essentials';
import { submissions } from '@wix/forms';

const FORM_ID = 'b692e647-b20c-45b0-ae1d-2530df030907';
const OWNER_EMAIL = 'Ryan_Carvalho@BehavioralBridge.org';

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const normalizePhone = (value: unknown) => {
  const raw = clean(value, 40);
  if (!raw) return '';
  if (raw.startsWith('+')) {
    const digits = raw.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15 ? `+${digits}` : '';
  }
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return '';
};

const validEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return json({ ok: false, error: 'INVALID_CONTENT_TYPE', email: OWNER_EMAIL }, 415);
    }

    const body = await request.json();

    // Honeypot. The real consultation UI must leave this blank.
    if (clean(body?.website, 200)) {
      return json({ ok: false, error: 'REJECTED', email: OWNER_EMAIL }, 400);
    }

    const firstName = clean(body?.firstName, 100);
    const lastName = clean(body?.lastName, 100);
    const email = clean(body?.email, 254).toLowerCase();
    const phone = normalizePhone(body?.phone);
    const studentName = clean(body?.studentName, 150);
    const studentGrade = clean(body?.studentGrade, 80);
    const service = clean(body?.service, 160);
    const goals = clean(body?.goals, 5000);
    const availability = clean(body?.availability, 2000);

    if (!firstName || !lastName || !validEmail(email) || !studentName || !studentGrade || !service || !goals) {
      return json({
        ok: false,
        error: 'VALIDATION',
        message: 'Please complete the required fields and use a valid email address.',
        email: OWNER_EMAIL,
      }, 400);
    }

    const values: Record<string, string> = {
      first_name_bb: firstName,
      last_name_bb: lastName,
      email_bb: email,
      student_name_bb: studentName,
      student_grade_bb: studentGrade,
      service_bb: service,
      goals_bb: goals,
    };

    if (phone) values.phone_bb = phone;
    if (availability) values.availability_bb = availability;

    // Wix Forms has an explicit PENDING -> CONFIRMED lifecycle. Create first,
    // then confirm server-side. Never let the browser impersonate an admin.
    const elevatedCreateSubmission = auth.elevate(submissions.createSubmission);
    const createdResult = await elevatedCreateSubmission({
      formId: FORM_ID,
      status: 'PENDING',
      submissions: values,
    });

    const created = (createdResult as any)?.submission ?? createdResult;
    const createdId = (created as any)?._id ?? (created as any)?.id;
    const createdStatus = (created as any)?.status;

    if (!createdId) {
      console.error('Behavioral Bridge consultation creation returned no submission ID.', {
        status: createdStatus || 'UNKNOWN',
      });
      return json({
        ok: false,
        error: 'NO_SUBMISSION_ID',
        message: 'Your request did not send. Please email Ryan directly instead.',
        email: OWNER_EMAIL,
      }, 502);
    }

    let confirmed = created;
    if (createdStatus !== 'CONFIRMED') {
      if (createdStatus !== 'PENDING') {
        console.error('Behavioral Bridge consultation entered an unexpected Wix Forms state.', {
          status: createdStatus || 'UNKNOWN',
          hasSubmissionId: true,
        });
        return json({
          ok: false,
          error: 'UNEXPECTED_STATUS',
          message: 'Your request could not be confirmed. Please email Ryan directly instead.',
          email: OWNER_EMAIL,
        }, 502);
      }

      const elevatedConfirmSubmission = auth.elevate(submissions.confirmSubmission);
      const confirmResult = await elevatedConfirmSubmission(createdId);
      confirmed = (confirmResult as any)?.submission ?? confirmResult;
    }

    const finalStatus = (confirmed as any)?.status;
    const finalId = (confirmed as any)?._id ?? (confirmed as any)?.id ?? createdId;

    // Never tell the visitor the request was received unless Wix says it is in the Forms collection.
    if (finalStatus !== 'CONFIRMED' || !finalId) {
      console.error('Behavioral Bridge consultation was not confirmed by Wix Forms.', {
        status: finalStatus || 'UNKNOWN',
        hasSubmissionId: Boolean(finalId),
      });
      return json({
        ok: false,
        error: 'NOT_CONFIRMED',
        message: 'Your request could not be confirmed. Please email Ryan directly instead.',
        email: OWNER_EMAIL,
      }, 502);
    }

    return json({
      ok: true,
      status: 'CONFIRMED',
      submissionId: finalId,
    });
  } catch (error) {
    console.error('Behavioral Bridge consultation endpoint error.', {
      name: error instanceof Error ? error.name : 'UnknownError',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
    return json({
      ok: false,
      error: 'SUBMISSION_FAILED',
      message: 'Your request did not send. Please email Ryan directly instead.',
      email: OWNER_EMAIL,
    }, 500);
  }
};
