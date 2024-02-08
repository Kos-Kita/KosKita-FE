import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { IUserType } from "./types";

export const getUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users");
    return response.data as Response<IUserType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
