import { useToast } from "@/components/ui/use-toast";
import { login } from "@/utils/apis/auth/api";
import { ILoginType, loginSchema } from "@/utils/apis/auth/types";
import { useAuth } from "@/utils/context/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { changeToken } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (body: ILoginType) => {
    try {
      const result = await login(body);
      changeToken(result?.data.token);
      if (result?.data.role === "admin") {
        navigate("/dashboard");
      } else if (result?.data) {
        navigate("/");
      }
      toast({
        description: result?.message,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: (error as Error).message,
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(handleLogin)} className="bg-white shadow flex flex-col items-center gap-5 max-w-md w-full py-10 px-3">
        <h2 className="text-3xl font-semibold">Masuk Akun</h2>
        <div className="p-3 space-y-5 w-full">
          <input type="text" className="px-4 py-2 rounded-md bg-slate-100 w-full" placeholder="Email" {...register("email")} />
          {errors.email ? <p className="text-red-500 text-sm">{errors.email.message}</p> : null}
          <input type="password" className="px-4 py-2 rounded-md bg-slate-100 w-full" placeholder="Password" {...register("password")} />
          {errors.password ? <p className="text-red-500 text-sm">{errors.password.message}</p> : null}
        </div>
        <button className="px-8 p-2 bg-[#4CA02E] text-white rounded-2xl">Login</button>
        <p className="font-medium">
          Belum Punya akun?
          <span className="text-[#4CA02E] ml-1 cursor-pointer hover:underline" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
