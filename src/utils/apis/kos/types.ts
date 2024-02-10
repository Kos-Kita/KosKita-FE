import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const kosSchema = z.object({
  kos_name: z.string().min(1, { message: "Enter your kos name" }),
  description: z.string().min(1, { message: "Enter your description" }),
  latitude: z.string().min(1, { message: "Enter your latitude" }),
  longitude: z.string().min(1, { message: "Enter your longitude" }),
  category: z.string().min(1, { message: "Enter category kos" }),
  price: z.string().min(1, "Price is required"),
  rooms: z.string().min(1, "Rooms is required"),
  address: z.string().min(1, { message: "Enter your address" }),
  kos_facilities: z.string().array().min(3, { message: "must contain 3 or more fasilitas" }),
  kos_rules: z.string().array().min(5, { message: "must contain 5 or more rules" }),

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

export interface IKosRecomend {
  id: string;
  kos_name: string;
  rating: number;
  category: string;
  price: number;
  address: string;
  kos_facilities: {
    id: number;
    facility: string;
  }[];
  photo_kos: {
    main_kos_photo: string;
  }[];
}
