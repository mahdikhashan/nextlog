import { Resend } from "resend";
import { AUDIENCE_ID } from "@/const/audience-id";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

async function unsubscribe() {}
async function subscribe(email: string) {
  return await resend.contacts.create({
    email,
    audienceId: AUDIENCE_ID,
  });
}

async function send(email: Email) {
  const newResendMail = generateNewResendEmail(email);
  return await resend.emails.send(newResendMail);
}

export function generateNewResendEmail(email: Email) {
  return {
    from: email.from,
    to: email.to,
    subject: email.subject,
    html: email.html,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  unsubscribe,
  subscribe,
  send,
  generateNewResendEmail
}
