import brandLogo from "@/assets/koskitaa.png";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="p-3 shadow">
      <div className="container flex items-center justify-between ">
        <img src={brandLogo} alt="Brand-logo" width={100} height={58} />
        <ul className="flex items-center gap-x-10">
          <li
            className={`cursor-pointer ${
              location.pathname === "/" && "font-medium"
            }`}
          >
            Beranda
          </li>
          <li className="cursor-pointer">Kontak</li>
          <li className="cursor-pointer">Tentang</li>
          <li className="cursor-pointer">Login</li>
          <img
            src="https://source.unsplash.com/80x80?person"
            className="rounded-full size-10"
            alt="person"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
