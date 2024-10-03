"use server";
import getBaseURL from "@/lib/base-url";
import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
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
