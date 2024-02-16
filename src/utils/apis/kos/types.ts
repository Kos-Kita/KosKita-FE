import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const baseKosSchema = z.object({
  kos_name: z.string().min(1, { message: "Enter your kos name" }),
  description: z.string().min(1, { message: "Enter your description" }),
  latitude: z.string().min(1, { message: "Enter your latitude" }),
  longitude: z.string().min(1, { message: "Enter your longitude" }),
  category: z.string().min(1, { message: "Enter category kos" }),
  price: z.number({ required_error: "Price is required" }),
  rooms: z.number({ required_error: "Rooms is required" }),
  address: z.string({ required_error: "Enter your address" }),
  kos_facilities: z
    .string({ required_error: "Enter facilities" })
    .array()
    .min(3, { message: "must contain 3 or more fasilitas" }),
  kos_rules: z
    .string({ required_error: "Enter rules" })
    .array()
    .min(5, { message: "must contain 5 or more rules" }),
});

export const createKosSchema = z
  .object({
    mode: z.literal("create"),
    main_kos_photo: z
      .any()
      .refine((files) => files?.length > 0, "image is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported"
      ),
    front_kos_photo: z
      .any()
      .refine((files) => files?.length > 0, "image is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported"
      ),
    back_kos_photo: z
      .any()
      .refine((files) => files?.length > 0, "image is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported"
      ),
    front_room_photo: z
      .any()
      .refine((files) => files?.length > 0, "image is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported"
      ),
    inside_room_photo: z
      .any()
      .refine((files) => files?.length > 0, "image is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported"
      ),
  })
  .merge(baseKosSchema);

export const editKosSchema = z
  .object({
    mode: z.literal("edit"),
    main_kos_photo: z
      .any()
      .optional()
      .refine((file) => !file[0] || file[0].size <= MAX_FILE_SIZE, `Max image size is 5MB`)
      .refine(
        (file) => !file[0] || file[0].type === "" || ACCEPTED_IMAGE_TYPES.includes(file[0].type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
    front_kos_photo: z
      .any()
      .optional()
      .refine((file) => !file[0] || file[0].size <= MAX_FILE_SIZE, `Max image size is 5MB`)
      .refine(
        (file) => !file[0] || file[0].type === "" || ACCEPTED_IMAGE_TYPES.includes(file[0].type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
    back_kos_photo: z
      .any()
      .optional()
      .refine((file) => !file[0] || file[0].size <= MAX_FILE_SIZE, `Max image size is 5MB`)
      .refine(
        (file) => !file[0] || file[0].type === "" || ACCEPTED_IMAGE_TYPES.includes(file[0].type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
    front_room_photo: z
      .any()
      .optional()
      .refine((file) => !file[0] || file[0].size <= MAX_FILE_SIZE, `Max image size is 5MB`)
      .refine(
        (file) => !file[0] || file[0].type === "" || ACCEPTED_IMAGE_TYPES.includes(file[0].type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
    inside_room_photo: z
      .any()
      .optional()
      .refine((file) => !file[0] || file[0].size <= MAX_FILE_SIZE, `Max image size is 5MB`)
      .refine(
        (file) => !file[0] || file[0].type === "" || ACCEPTED_IMAGE_TYPES.includes(file[0].type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  })
  .merge(baseKosSchema);

export const kosSchema = z.discriminatedUnion("mode", [createKosSchema, editKosSchema]);
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
    front_kos_photo: string;
    back_kos_photo: string;
    front_room_photo: string;
    inside_room_photo: string;
  };
}
export interface IKosDetail extends IKosRecomend {
  description: string;
  rooms: number;
  longitude: string;
  latitude: string;
  kos_rules: {
    id: string;
    rule: string;
  }[];
  user: {
    id: number;
    name: string;
    user_name: string;
    photo_profile: string;
  };
}

export const peraturanKos = [
  "24 JAM",
  "TIDAK BOLEH MEROKOK",
  "TIDAK BOLEH PETS",
  "TIDAK BOLEH PESTA/EVENTS",
  "TIDAK BOLEH PASUTRI",
  "HANYA BISA MAKS. 1 ORANG/ KAMAR",
  "TIDAK BOLEH BAWA ANAK",
  "ADA JAM MALAM UNTUK TAMU",
  "KHUSUS MAHASISWA",
  "KHUSUS KARYAWAN",
  "TAMU BEBAS BERKUNJUNG",
  "TAMU BOLEH MENGINAP",
  "TAMU DILARANG MENGINAP",
  "DENDA KERUSAKAN BARANG KOS",
  "TAMU MENGINAP DIKENAKAN BIAYA",
  "TERMASUK LISTRIK",
];
export const fasilitasKos = [
  "WIFI",
  "AC",
  "MEJA DAN KURSI",
  "KASUR",
  "LEMARI",
  "K.MANDI DALAM",
  "KULKAS",
];
