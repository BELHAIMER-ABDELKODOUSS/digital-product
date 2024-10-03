import * as z from "zod";

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be at least 3 charchters" }),
  email: z.string().email({ message: "Invalid email adress" }),
  password: z.string().min(1, { message: "password is required" }),
});
