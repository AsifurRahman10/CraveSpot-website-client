import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { OurMenuPage } from "../Pages/OurMenuPage";
import { OrderFood } from "../Pages/OrderFood";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import { Cart } from "../Pages/Dashboard/Cart";
import { PrivateRouter } from "./PrivateRouter";
import { AllUser } from "../Pages/Dashboard/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenuPage></OurMenuPage>,
      },
      {
        path: "/orderFood/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/allUser",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
