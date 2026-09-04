import { httpClient } from '@wix/essentials';

export type ConsultationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  studentName: string;
  studentGrade: string;
  service: string;
  goals: string;
  availability?: string;
  website?: string; // honeypot; legitimate visitors leave blank
};

export type ConsultationResult =
  | { ok: true; status: 'CONFIRMED'; submissionId: string }
  | { ok: false; error?: string; message?: string; email?: string };

/**
 * Native Wix Vibe/Astro frontend helper.
 *
 * Official Wix-managed Astro guidance uses httpClient.fetchWithAuth() for calls
 * from frontend code to auto-discovered src/pages/api/* endpoints. Keep Wix Forms
 * credentials and privileged submission logic on the server endpoint only.
 */
export async function submitConsultation(
  payload: ConsultationPayload,
): Promise<ConsultationResult> {
  const baseApiUrl = new URL(import.meta.url).origin;
  const response = await httpClient.fetchWithAuth(`${baseApiUrl}/api/consultation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data: any;
  try {
    data = await response.json();
  } catch {
    return {
      ok: false,
      error: 'INVALID_RESPONSE',
      message: 'Your request did not send. Please email Ryan directly instead.',
      email: 'Ryan_Carvalho@BehavioralBridge.org',
    };
  }

  if (
    response.ok &&
    data?.ok === true &&
    data?.status === 'CONFIRMED' &&
    typeof data?.submissionId === 'string' &&
    data.submissionId.length > 0
  ) {
    return {
      ok: true,
      status: 'CONFIRMED',
      submissionId: data.submissionId,
    };
  }

  return {
    ok: false,
    error: data?.error || `HTTP_${response.status}`,
    message:
      data?.message ||
      'Your request did not send. Please email Ryan directly instead.',
    email: data?.email || 'Ryan_Carvalho@BehavioralBridge.org',
  };
}

export const DIRECT_EMAIL_HREF =
  'mailto:Ryan_Carvalho@BehavioralBridge.org?subject=Behavioral%20Bridge%20Consultation%20Request';

/*
Integration rules for the existing form component:

1. Preserve the existing design and fields.
2. Add a hidden honeypot named `website`; real users never fill it.
3. On submit, set an in-flight flag so a second click cannot submit again.
4. Call submitConsultation() with the visible field values.
5. Only if the returned object is { ok:true, status:'CONFIRMED', submissionId:<nonempty> }:
   - show: "Thank you. Your consultation request has been received. Ryan will follow up by email."
   - clear/reset the form.
6. For every other result or thrown network error:
   - retain all entered values;
   - show "Your request did not send";
   - display a large EMAIL RYAN DIRECTLY → button using DIRECT_EMAIL_HREF.
7. Remove any old browser-side Wix OAuth token creation, direct Wix Forms REST POST,
   fake-success state, or competing submit interception.
*/
