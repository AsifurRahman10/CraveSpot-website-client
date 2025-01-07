import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/login" || pathname === "/register" ? null : <Navbar />}
      <Outlet></Outlet>
      {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </div>
  );
};
