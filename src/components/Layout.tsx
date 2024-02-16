import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PopupChat from "./PopupChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PopupChat />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
