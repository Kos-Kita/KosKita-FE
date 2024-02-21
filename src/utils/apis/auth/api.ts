import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { ILoginType, IRegisterType } from "./types";

interface ILoginPayload {
  name: string;
  role: string;
  token: string;
}

export interface IRegisterPayload {
  name: string;
  user_name: string;
  email: string;
  password: string;
  gender: string;
  role: string;
  terms: string;
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
    } else {
      throw Error("Account is not registered");
    }
  }
};

export const registerSubmit = async (body: IRegisterType) => {
  try {
    const response = await axiosWithConfig.post(`/users`, body);
    return response.data;
  } catch (error: any) {
    throw Error("Gagal Registrasi");
  }
};
