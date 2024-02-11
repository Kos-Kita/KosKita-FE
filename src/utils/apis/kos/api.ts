import { Response } from "@/utils/types/type";
import axiosWithConfig from "../axiosWithConfig";
import { IKosDetail, IKosRecomend, IKosType } from "./types";
import { AxiosResponse } from "axios";

export const getKosRecomend = async () => {
  try {
    const response = await axiosWithConfig.get("/kos");
    return response.data as Response<IKosRecomend[]>;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getDetailKos = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/kos/${id}`);
    return response.data as Response<IKosDetail>;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const createKos = async (body: IKosType) => {
  const notFormData: Partial<IKosType> = new Object();
  const formData = new FormData();
  let key: keyof typeof body;
  for (key in body) {
    if (body[key][0] instanceof File) {
      formData.append(key, body[key][0]);
    } else {
      notFormData[key] = body[key];
    }
  }
  try {
    const responseData: AxiosResponse<Response> = await axiosWithConfig.post("/kos", notFormData);
    if (responseData.status === 200) {
      await axiosWithConfig.post(`/upload-image/${responseData.data.data.kos_id}`, formData);
      return responseData.data as Response;
    }
    return responseData.data as Response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const editKos = async (body: IKosType, id: string) => {
  const notFormData: Partial<IKosType> = new Object();
  const formData = new FormData();
  let key: keyof typeof body;
  for (key in body) {
    if (body[key][0] instanceof File) {
      formData.append(key, body[key][0]);
    } else {
      notFormData[key] = body[key];
    }
  }
  try {
    const responseData: AxiosResponse<Response> = await axiosWithConfig.put(
      `/kos/${id}`,
      notFormData
    );
    const resUploadFoto = await axiosWithConfig.put(`/upload-image/${id}`, formData);
    if (responseData.status === 200 && resUploadFoto.status === 200) {
      return responseData.data as Response;
    }
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteKos = async (id: number) => {
  try {
    const response = await axiosWithConfig.delete(`/kos/${id}`);
    return response.data as Response;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
