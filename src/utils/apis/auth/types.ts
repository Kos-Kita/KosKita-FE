import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  name: z.string().min(3, { message: "name is required" }),
  user_name: z.string().min(3, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.string().default("renter"),
  gender: z.string().min(1, { message: "email is required" }),
});

export type ILoginType = z.infer<typeof loginSchema>;
export type IRegisterType = z.infer<typeof registerSchema>;
