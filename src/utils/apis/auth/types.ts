import * as z from "zod";
const validGenders = ["laki-laki", "perempuan"];
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  name: z.string().min(3, { message: "name is required" }),
  user_name: z.string().min(3, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }).email("Not a valid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .refine((password) => passwordRegex.test(password), {
      message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long",
    }),
  role: z.string().default("renter"),
  gender: z
    .string()
    .min(1)
    .refine((value) => validGenders.includes(value), {
      message: "gender is required and should be either 'laki-laki' or 'perempuan'",
    }),
});

export type ILoginType = z.infer<typeof loginSchema>;
export type IRegisterType = z.infer<typeof registerSchema>;
