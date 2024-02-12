import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@/utils/context/auth";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { token, user } = useAuth();
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/profilerenter",
    "/profileowner",
    "/buat-kos",
    "/edit-kos/:id",
    "/bookingpage",
    "/admin/inbox",
    "/admin",
  ];
  const adminProtected = ["/admin/inbox", "/admin"];
  const renterProtected = ["/profilerenter", "/bookingpage"];
  const ownerProtected = ["/profileowner", "/buat-kos", "/edit-kos/:id"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }
  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (adminProtected.includes(pathname)) {
      if (user.role === "renter" || user.role === "owner") return <Navigate to="/" />;
    }

    if (renterProtected.includes(pathname)) {
      if (user.role === "owner" || user.role === "admin") return <Navigate to={"/"} />;
    }

    if (ownerProtected.includes(pathname)) {
      if (user.role === "renter" || user.role === "admin") return <Navigate to={"/"} />;
    }

    if (renterProtected.includes(pathname) || ownerProtected.includes(pathname)) {
      if (user.role === "admin") return <Navigate to="/admin" />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
