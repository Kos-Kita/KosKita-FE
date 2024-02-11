import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const userSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  user_name: z.string().min(1, { message: "Enter your username" }),
  email: z.string().email("Enter a valid email").min(1, { message: "Enter email" }),
  gender: z.string().min(1, { message: "Enter your gender" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional()
    .or(z.literal("")),
  photo_profile: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
  role: z.string().optional(),
});
export type IUserType = z.infer<typeof userSchema>;

export interface IMyKosType {
  id: number;
  kos_name: string;
  rating: number;
  price: number;
  address: string;
  kos_facilities: {
    id: number;
    facility: string;
  }[];
  photo_kos: {
    main_kos_photo: string;
  };
}
