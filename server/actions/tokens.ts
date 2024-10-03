"use server";

import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { emailTokens, users } from "@/server/schema";
import { eq } from "drizzle-orm";

const action = createSafeActionClient();
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.query.emailTokens.findFirst({
      where: eq(users.email, email),
    });
    return verificationToken;
  } catch (error) {
    return error;
  }
};

export const generateEmailVerificationToken = async (email: string) => {
  const token = crypto.randomUUID();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.delete(emailTokens).where(eq(emailTokens.id, existingToken.id));
  }
  const verificationToken = await db
    .insert(emailTokens)
    .values({ email, token, expires })
    .returning();
  return verificationToken;
};
