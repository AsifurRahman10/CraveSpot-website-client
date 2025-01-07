import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { OurMenuPage } from "../Pages/OurMenuPage";
import { OrderFood } from "../Pages/OrderFood";

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
    ],
  },
]);
