import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { ILoginType } from "./types";

interface ILoginPayload {
  name: string;
  role: string;
  token: string;
}

export const login = async (body: ILoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);
    return response.data as Response<ILoginPayload>;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
