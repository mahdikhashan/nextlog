import { generateNewResendEmail } from "@/services/resend";

jest.mock("resend");

test("resend service can generate valid email objects", function () {
  const to = "to@example.com";
  const from = "from@example.com";
  const subject = "verification email";
  const html = "<p>Verification email</p>";

  const email = {
    to,
    from,
    subject,
    html,
  };

  const resendEmail = generateNewResendEmail(email);
  expect(resendEmail).toStrictEqual({
    from: "from@example.com",
    html: "<p>Verification email</p>",
    subject: "verification email",
    to: "to@example.com",
  });
});
