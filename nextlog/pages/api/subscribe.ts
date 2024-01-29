import path from 'path';
import ejs from 'ejs';

import { default as ResendService } from "@/services/resend";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;
  const subscriber = await ResendService.subscribe(email);

  if (subscriber.error) {
    res.status(404).json({ response: subscriber.error.message });
  }

  const to = email;
  const from = "sample@gmail.com";
  const subject = "You are now subscribed";

  const emailTemplateParams = {
    email,
  }
  const emailTemplatePath = path.join(process.cwd(), 'emails', 'subscribe_verification.ejs');
  const body = await ejs.renderFile(emailTemplatePath, emailTemplateParams);

  const responseEmail = {
    to,
    from,
    subject,
    html: body,
  };

  const verificationEmail = ResendService.generateNewResendEmail(responseEmail);
  const ResendCreateEmailResponse = ResendService.send(verificationEmail);

  // It should be handled better
  ResendCreateEmailResponse
    .then((email) => res.status(200).json({ response: email.data?.id }))
    .catch((err) => res.status(500).json({ response: err }));
}
