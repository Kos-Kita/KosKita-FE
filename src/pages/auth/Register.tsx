import Tabs from "@/components/Tabs";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [showPassword, setPassword] = useState(true);
  const navigate = useNavigate();

  interface typeUser {
    name: string;
    user_name: string;
    email: string;
    password: string;
    role: string;
    gender: string;
  }

  const [user, setUser] = useState<typeUser>({
    name: "",
    user_name: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://l3n.my.id/users", {
        name: user.name,
        user_name: user.user_name,
        email: user.email,
        password: user.password,
        gender: user.gender,
        role: tabParam,
      });
      if (response) {
        alert("Berhasil");
        setUser({
          name: "",
          user_name: "",
          email: "",
          password: "",
          role: "",
          gender: "",
        });
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex md:items-center md:justify-center md:py-8 bg-white">
      <div className="bg-white shadow flex flex-col items-center gap-5 max-w-md w-full p-3">
        <Tabs />
        <h2 className="text-3xl font-semibold">
          Buat Akun
          <span className={`${tabParam === "renter" ? "text-[#4CA02E]" : "text-[#B6A563]"}`}>{tabParam === "renter" ? " Renter" : " Owner"}</span> Anda
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="p-3 space-y-5">
            <input type="text" onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))} className="px-4 py-2 rounded-md bg-slate-100 w-full" required placeholder="Nama" value={user.name} />
            <input type="text" onChange={(e) => setUser((prev) => ({ ...prev, user_name: e.target.value }))} className="px-4 py-2 rounded-md bg-slate-100 w-full" required placeholder="Username" value={user.user_name} />
            <input type="email" onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))} className="px-4 py-2 rounded-md bg-slate-100 w-full" required placeholder="Email" value={user.email} />
            <div className="flex  bg-slate-100 w-full gap-2">
              <input
                type={showPassword ? "password" : "text"}
                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                className=" bg-slate-100 px-4 py-2 rounded-md w-full"
                required
                placeholder="Password"
                value={user.password}
              />
              {showPassword ? (
                <img width="36px" onClick={() => setPassword(!showPassword)} height="16px" src="https://img.icons8.com/fluency-systems-regular/48/visible--v1.png" alt="visible--v1" className="p-2" />
              ) : (
                <img width="36px" onClick={() => setPassword(!showPassword)} height="16px" src="https://img.icons8.com/fluency-systems-filled/48/closed-eye.png" alt="closed-eye" className="p-2" />
              )}
            </div>
            <select onChange={(e) => setUser((prev) => ({ ...prev, gender: e.target.value }))} value={user.gender} className="p-3 w-full rounded-md bg-white border-[0.5px] border-slate-400">
              <option value="jenis-kelamin" className="ml-10">
                Gender
              </option>
              <option value="putra">Laki-laki</option>
              <option value="putri">Perempuan</option>
            </select>
          </div>

          <div className="flex justify-start items-start  text-base leading-5 text-neutral-900 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto gap-5 my-5 text-sm text-center items-start justify-start">
              <input type="checkbox" id="checkbox-register" required />
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
