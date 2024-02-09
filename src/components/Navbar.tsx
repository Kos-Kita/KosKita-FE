import brandLogo from "@/assets/koskitaa.png";
import { useAuth } from "@/utils/context/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "./ui/use-toast";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, user, changeToken } = useAuth();
  const handleLogout = () => {
    changeToken();
    toast({
      description: "logout succesfuly",
    });
  };
  return (
    <div className="p-3 shadow">
      <div className="container flex items-center justify-between ">
        <img
          src={brandLogo}
          alt="Brand-logo"
          width={100}
          height={58}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="flex items-center gap-x-10">
          <li
            className={`cursor-pointer ${location.pathname === "/" && "font-medium"}`}
            onClick={() => navigate("/")}
          >
            Beranda
          </li>
          <li className="cursor-pointer">Kontak</li>
          <li className="cursor-pointer">Tentang</li>
          {token ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src="https://source.unsplash.com/80x80?person"
                  className="rounded-full size-10 cursor-pointer "
                  alt="person"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-[200px] ">
                <DropdownMenuLabel className="p-3">Hi {user.user_name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="p-2 hover:bg-slate-100 cursor-pointer"
                  onClick={() =>
                    navigate(`${user.role === "owner" ? "/profileowner" : "/profilerenter"}`)
                  }
                >
                  Profile
                </DropdownMenuItem>
                {user.role === "owner" ? (
                  <DropdownMenuItem
                    className="p-2 hover:bg-slate-100 cursor-pointer"
                    onClick={() => navigate("/buat-kos")}
                  >
                    Buat Kos
                  </DropdownMenuItem>
                ) : null}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="p-2 hover:bg-slate-100 cursor-pointer"
                  onClick={() => handleLogout()}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <li className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
