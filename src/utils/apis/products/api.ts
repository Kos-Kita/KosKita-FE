import axiosWithConfig from "../axiosWithConfig";

export const getSearchMenu = async (data: string) => {
  try {
    const response = await axiosWithConfig.get(`/kos/search/${data}`);
    return response.data.data;
  } catch (error) {
    throw Error("Tidak Ada Data");
  }
};
