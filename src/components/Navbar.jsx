import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "../assets/more/logo1.png";
// import { authContext } from "../../provider/AuthProvider";

const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/addCoffee"}
        >
          Add Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/auth/signUp"}
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="h-24">
      <div className="z-50 fixed w-full bg-navbar-bg bg-cover bg-center">
        <div className="container w-11/12 mx-auto py-4">
          <div className="mx-auto flex justify-between items-center">
            <div className="dropdown lg:hidden relative ml-2">
              <div
                tabindex="0"
                role="button"
                className="btn border-2 p-3 border-solid rounded-full lg:hidden"
              >
                <HiMenuAlt1 className="text-xl font-bold" />
              </div>

              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-cyan-500 rounded-box z-[1] mt-3 w-52 p-4 shadow absolute left-0"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-14 h-16" src={logo} alt="Coffee Store Logo" />
              <h2 className="text-4xl font-rancho font-medium text-white">
                Espresso Emporium
              </h2>
            </div>
            <div className="">
              <ul className="hidden lg:flex items-center justify-center gap-6">
                {navLinks}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="group flex h-14 w-36 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                >
                  <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                    Log out
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;