import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navList = (
    <>
      <li>Home</li>
      <li>CONTACT US</li>
      <li>DASHBOARD</li>
      <li>Our Menu</li>
      <li>Our Shop</li>
    </>
  );
  return (
    <div className="navbar bg-black/10 py-3 md:py-6 pr-4 md:px-10 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CiMenuBurger className="text-white text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <Link className="text-white">
          <h2 className="textTitle">
            <span className="font-extrabold text-xl md:text-2xl">
              CraveSpot
            </span>
            <br />
            <span className="font-bold text-lg md:text-xl tracking-widest">
              Restaurant
            </span>
          </h2>
        </Link>
      </div>
      <div className="navbar-end space-x-6">
        {/* Navigation menu for large screens */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-white font-bold">
            {navList}
          </ul>
        </div>
        {/* Button */}
        <a className="btn btn-primary text-white font-bold">Button</a>
      </div>
    </div>
  );
};
