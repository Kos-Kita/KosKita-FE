import axiosWithConfig from "../axiosWithConfig";

export const getProfileSync = async () => {
  try {
    const response = await axiosWithConfig.get(`/users`);
    return response.data.data;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const deleteProfileSync = async () => {
  try {
    const response = await axiosWithConfig.delete(`/users`);
    return response;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const updateProfileSync = async (data: any) => {
  try {
    const response = await axiosWithConfig.put(`/users`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const changePasswordSync = async (new_password: string, old_password: string) => {
  try {
    const response = await axiosWithConfig.put(`/change-password`, { new_password, old_password });
    return response;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const ratingSubmitSync = async (id: string, rating: any) => {
  try {
    const response = await axiosWithConfig.post(`kos/${id}/rating`, { score: rating });
    return response;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const cekKostSync = async () => {
  try {
    const response = await axiosWithConfig.get(`booking`);
    return response.data.data;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};

export const cancelBookingSync = async (booking_id: string) => {
  try {
    const response = await axiosWithConfig.put(`booking/${booking_id}`);
    return response;
  } catch (error) {
    throw Error("Cek Koneksi");
  }
};
