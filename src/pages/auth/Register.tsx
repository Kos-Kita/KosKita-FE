import Tabs from "@/components/Tabs";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/utils/apis/auth/types";

const Register = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [showPassword, setPassword] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const baseurl = import.meta.env.VITE_BASE_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    if (tabParam !== null) {
      try {
        const response = await axios.post(`${baseurl}/users`, {
          name: data.name,
          user_name: data.user_name,
          email: data.email,
          password: data.password,
          gender: data.gender,
          role: tabParam,
        });

        if (response) {
          toast({
            description: "Anda Berhasil Registrasi",
          });
          navigate("/login");
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          description: "username atau email sudah ada",
        });
      }
    } else {
      toast({
        variant: "destructive",
        description: "Anda Harus memilih renter atau owner",
      });
    }
  };

  return (
    <div className="min-h-screen flex md:items-center md:justify-center md:py-8 bg-white">
      <div className="bg-white shadow flex flex-col items-center gap-5 max-w-md w-full p-3">
        <Tabs />
        <h2 className="text-3xl font-semibold">
          Buat Akun
          <span
            className={`${
              tabParam === ""
                ? toast({
                    variant: "destructive",
                    description: "anda harus pilih, renter atau owner dulu",
                  })
                : tabParam === "renter"
                ? "text-[#4CA02E]"
                : "text-[#B6A563]"
            }`}
          >
            {tabParam === "renter" ? " Renter" : " Owner"}
          </span>{" "}
          Anda
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-3 space-y-5">
            <input type="text" {...register("name")} className={`px-4 py-2 rounded-md bg-slate-100 w-full ${errors.name ? "border-red-500" : ""}`} placeholder="Nama" />
            {errors.name && <p className="text-red-500 text-sm">Nama harus memiliki setidaknya 3 karakter</p>}

            <input type="text" {...register("user_name")} className={`px-4 py-2 rounded-md bg-slate-100 w-full ${errors.user_name ? "border-red-500" : ""}`} placeholder="Username" />
            {errors.user_name && <p className="text-red-500 text-sm">Username harus memiliki setidaknya 3 karakter</p>}

            <input type="email" {...register("email")} className={`px-4 py-2 rounded-md bg-slate-100 w-full ${errors.email ? "border-red-500" : ""}`} placeholder="Email" />
            {errors.email && <p className="text-red-500 text-sm">Email tidak valid</p>}

            <div className="flex bg-slate-100 w-full gap-2">
              <input type={showPassword ? "password" : "text"} {...register("password")} className={`bg-slate-100 px-4 py-2 rounded-md w-full ${errors.password ? "border-red-500" : ""}`} placeholder="Password" />
              {showPassword ? (
                <img width="36px" onClick={() => setPassword(!showPassword)} height="16px" src="https://img.icons8.com/fluency-systems-regular/48/visible--v1.png" alt="visible--v1" className="p-2" />
              ) : (
                <img width="36px" onClick={() => setPassword(!showPassword)} height="16px" src="https://img.icons8.com/fluency-systems-filled/48/closed-eye.png" alt="closed-eye" className="p-2" />
              )}
            </div>
            {errors.password && <p className="text-red-500 text-sm">Password harus memiliki setidaknya 6 karakter</p>}

            <select {...register("gender")} className={`p-3 w-full rounded-md bg-white border-[0.5px] border-slate-400 ${errors.gender ? "border-red-500" : ""}`}>
              <option value="jenis-kelamin" className="ml-10">
                Gender
              </option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">Harap pilih jenis kelamin</p>}
          </div>

          <div className="flex justify-start items-start text-base leading-5 text-neutral-900 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto gap-5 my-5 text-sm text-center items-start justify-start">
              <input type="checkbox" id="checkbox-register" {...register("terms")} />
              <label htmlFor="checkbox-register"> Saya menyetujui Syarat dan Ketentuan, Kebijakan Privasi, dan menerima pembaruan melalui email.</label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="justify-center self-center px-10 py-3 mt-2 font-bold text-white whitespace-nowrap bg-lime-600 leading-[133%] rounded-[40px] max-md:px-5">
              Buat Akun
            </button>
          </div>
        </form>

        <div className="flex gap-4 self-center text-2xl font-bold leading-8 whitespace-nowrap">
          <div className="grow text-neutral-900 text-lg">Sudah punya akun ?</div>
          <div onClick={() => navigate("/login")} className="cursor-pointer text-lime-600 text-lg">
            Log in
          </div>
        </div>
        <div className="self-center  leading-5 text-center underline text-lime-950 text-sm">
          By creating an account you agree to our
          <br />
          <span className="underline text-lime-950">Terms of Service</span> and <span className="underline text-lime-950">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
