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
