"use server";
import getBaseURL from "@/lib/base-url";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/auth/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = getBaseURL();

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "abdelkodoussbelhaimerbusiness@gmail.com",
    subject: "Hello world",
    react: EmailTemplate({ confirmLink: confirmLink }),
  });

  if (error) {
    return error;
  }

  if (data) {
    return data;
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`;
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "abdelkodoussbelhaimerbusiness@gmail.com",
    subject: "Sproud and Scribble - Confirmation Email",
    html: `<p>Click here <a href='${confirmLink}'>reset your password</a></p>`,
  });
  if (error) return console.log(error);
  if (data) return data;
};
