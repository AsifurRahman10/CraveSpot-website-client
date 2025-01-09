import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaRegCalendarCheck,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { ImSpoonKnife } from "react-icons/im";
import { IoBag, IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-full lg:w-1/6 bg-[#D1A054] md:min-h-screen pr-2 md:pr-0">
        {/* logo */}
        <h2 className="textTitle pt-10 ml-8 md:ml-16">
          <span className="font-extrabold text-xl md:text-2xl">CraveSpot</span>
          <br />
          <span className="font-bold text-lg md:text-xl tracking-widest">
            Restaurant
          </span>
        </h2>
        {isAdmin ? (
          <>
            {/* user list */}
            <ul className="mt-14 textTitle ml-4 md:ml-12 space-y-8 pb-6">
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaHome className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">Admin Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <ImSpoonKnife className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">add items</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaList className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">
                    manage items
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center gap-3"
                >
                  <span>
                    <FaBook className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">
                    Manage bookings
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUser"
                  className="flex items-center gap-3"
                >
                  <span>
                    <FaUsers className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">all users</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaRegCalendarCheck className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">my booking</p>
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            {/* user list */}
            <ul className="mt-14 textTitle ml-4 md:ml-12 space-y-8 pb-6">
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaHome className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">User Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaCalendarAlt className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">
                    reservation
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaWallet className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">
                    payment history
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center gap-3"
                >
                  <span>
                    <FaShoppingCart className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">my cart</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <GoCodeReview className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">add review</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-3">
                  <span>
                    <FaRegCalendarCheck className="text-lg" />
                  </span>
                  <p className="font-medium text-lg leading-none">my booking</p>
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <div className="divider bg-white h-[0.5px] w-9/12 mx-auto mt-6"></div>

        {/* more nav list */}
        <ul className="mt-14 textTitle ml-4 md:ml-12 space-y-8 pb-6">
          <li>
            <NavLink to="/" className="flex items-center gap-3">
              <span>
                <FaHome className="text-lg" />
              </span>
              <p className="font-medium text-lg leading-none">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourMenu" className="flex items-center gap-3">
              <span>
                <IoMenu className="text-lg" />
              </span>
              <p className="font-medium text-lg leading-none">Menu</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/salad" className="flex items-center gap-3">
              <span>
                <MdEmail className="text-lg" />
              </span>
              <p className="font-medium text-lg leading-none">Shop</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center gap-3">
              <span>
                <IoMenu className="text-lg" />
              </span>
              <p className="font-medium text-lg leading-none">Contract</p>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* outlet div */}
      <div className="flex-1 pt-10 bg-[#f6f6f6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
