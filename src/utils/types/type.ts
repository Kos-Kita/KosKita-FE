export interface Response<T = any> {
  message: string;
  data: T;
}

export interface detail {
  price: string;
}

export interface detailPayment {
  booking_code: string;
  virtual_number: string;
  total: string;
}

export interface pembayaranType {
  payment_type: string;
  kos_id: number;
  bank: string;
}

export interface profile {
  name: string;
  user_name: string;
  email: string;
  photo_profile: string;
  gender: string;
}

export interface changePassword {
  old_password: string;
  new_password: string;
  konfirmasi_password: string;
}
