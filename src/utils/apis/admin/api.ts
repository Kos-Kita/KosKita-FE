import axiosWithConfig from "../axiosWithConfig";

export const dataBookTotal = async () => {
  try {
    const response = await axiosWithConfig.get("/admin");
    return response.data.data;
  } catch (error) {
    throw Error("Tidak dapat mengambil data");
  }
};
