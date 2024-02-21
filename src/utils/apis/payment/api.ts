import axiosWithConfig from "../axiosWithConfig";

export const getDataBooking = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/kos/${id}`);
    return response.data.data;
  } catch (error) {
    throw Error("Cek Koneksi Anda");
  }
};

export const postDataBooking = async (payment: any) => {
  try {
    const response = await axiosWithConfig.post(`/booking`, payment);
    return response.data.data;
  } catch (error) {
    throw Error("Cek Koneksi Anda");
  }
};
