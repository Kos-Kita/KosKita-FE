import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow flex flex-col items-center gap-5 max-w-md w-full py-10 px-3">
        <h2 className="text-3xl font-semibold">
          Masuk Akun
          <span className={`${tabParam === "renter" ? "text-[#4CA02E]" : "text-[#B6A563]"}`}>
            {tabParam === "renter" ? " Renter" : " Owner"}
          </span>
        </h2>
        <div className="p-3 space-y-5">
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-slate-100 w-full"
            placeholder="Email"
          />
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-slate-100 w-full"
            placeholder="Password"
          />
        </div>
        <button className="px-8 p-2 bg-[#4CA02E] text-white rounded-2xl">Login</button>
        <span className="text-sm text-[#4CA02E]">Lupa Password</span>
        <p className="font-medium">
          Belum Punya akun?
          <span
            className="text-[#4CA02E] ml-1 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
