import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Component/UseAuth";

const Navbar = () => {
  const { user, Logout } = UseAuth();
  const Links = (
    <>
      <li
        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
        aria-current="page"
        hover:bg-gray-700
        hover:text-white
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="rounded-md  px-3 py-2 text-sm font-medium"
        aria-current="page"
      >
        <NavLink to="/">Update Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gray-300 p-5 ">
      <div className=" container mx-auto">
        <div className=" flex justify-between">
          <div>
            <h1 className="text-4xl font-bold ">Deluxe</h1>
          </div>
          <div className="flex gap-3 mt-2 list-none ">{Links}</div>
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-gray-100 rounded-box mb-3 mt-3 w-32 shadow"
                >
                  <li className="mb-4">
                    <a onClick={() => Logout()}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <NavLink to="/login">
                  <button className="btn btn-primary">LogIn</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
