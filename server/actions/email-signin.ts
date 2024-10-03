"use server";
import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db, users } from "@/server/schema";
import { eq } from "drizzle-orm";

const action = createSafeActionClient();

export const EmailSignin = action
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser?.email !== email) {
      return { error: "email not found" };
    }
   
  });
