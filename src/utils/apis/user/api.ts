import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { IMyKosType, IUserType } from "./types";

export const getUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users");
    return response.data as Response<IUserType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getMyKos = async () => {
  try {
    const response = await axiosWithConfig.get("/users/kos");
    return response.data as Response<IMyKosType[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
