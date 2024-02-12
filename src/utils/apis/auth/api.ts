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
    const isError = error.response.data.message;
    if (isError.includes("password tidak sesuai")) {
      throw Error("Password incorrect");
    } else if (isError.includes("record not found")) {
      throw Error("Email not registered");
    }
  }
};
