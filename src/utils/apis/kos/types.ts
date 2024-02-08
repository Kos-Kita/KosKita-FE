import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const kosSchema = z.object({
  kos_name: z.string().min(1, { message: "Enter your kos name" }),
  description: z.string().min(1, { message: "Enter your description" }),
  category: z.string().email("Enter a valid email").min(1, { message: "Enter category kos" }),
  price: z.number().min(1, "Price required"),
  rooms: z.number().min(1, "Rooms required"),
  address: z.string().min(1, { message: "Enter your address" }),
  kos_facilities: z.string().min(1, { message: "Enter your kos fasilitas" }),
  kos_rules: z.string().min(1, { message: "Enter your kos fasilitas" }),

  main_kos_photo: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
  front_kos_photo: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
  back_kos_photo: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
  front_room_photo: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
  inside_room_photo: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    ),
});

export type IKosType = z.infer<typeof kosSchema>;
