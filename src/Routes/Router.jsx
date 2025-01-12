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
import { AdminRoute } from "./AdminRoute";
import { ManageItems } from "../Pages/Dashboard/ManageItems";
import { AddItems } from "../Pages/Dashboard/AddItems";
import { UpdateItem } from "../Pages/Dashboard/UpdateItem";
import { Payment } from "../Pages/Dashboard/Payment";
import { PaymentHistory } from "../Pages/Dashboard/PaymentHistory";

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
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/addItem",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
