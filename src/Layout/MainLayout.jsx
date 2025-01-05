import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};
