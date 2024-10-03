import getBaseURL from "@/lib/base-url";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = getBaseURL();

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`;
//   const { data, error } = await resend.emails.send({
//     from: "<onboarding@resend.dev>",
//     to: email,
//     subject: "Hello world",
//     html: `<div>HELLO click here <a href="${confirmLink}"></a> </div>`,
//   });
//   if (error) {
//     return error;
//   }

//   if (data) {
//     return data;
//   }
// };
