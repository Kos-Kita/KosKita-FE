import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { IKosRecomend, IKosType } from "./types";

export const getKosRecomend = async () => {
  try {
    const response = await axiosWithConfig.get("/kos");
    return response.data as Response<IKosRecomend[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createKos = async (body: IKosType) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (body[key][0] instanceof File) {
        formData.append(key, body[key][0]);
      } else {
        formData.append(key, body[key]);
      }
    }
    // formData.append("kos_name", body.kos_name);
    // formData.append("description", body.description);
    // formData.append("latitude", body.latitude);
    // formData.append("longitude", body.longitude);
    // formData.append("category", body.category);
    // formData.append("price", `${body.price}`);
    // formData.append("rooms", `${body.rooms}`);
    // formData.append("address", body.address);
    // formData.append("kos_facilities", body.kos_facilities);
    // formData.append("kos_rules", body.kos_rules);
    // formData.append("main_kos_photo", body.main_kos_photo[0]);
    // formData.append("front_kos_photo", body.front_kos_photo[0]);
    // formData.append("back_kos_photo", body.back_kos_photo[0]);
    // formData.append("front_room_photo", body.front_room_photo[0]);
    // formData.append("inside_room_photo", body.inside_room_photo[0]);
    const response = await axiosWithConfig.post("/kos", formData);
    if (response.status === 200) {
      return response.data as Response;
    }
    console.log(...formData);
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
