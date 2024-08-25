import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Component/UseAuth";

const Navbar = () => {
  const { user, Logout } = UseAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = (
    <>
      <li className="rounded-md px-3 py-2 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 p-2 rounded-xl text-white"
              : "text-gray-700"
          }
          aria-current="page"
        >
          Home
        </NavLink>
      </li>
      <li className="rounded-md px-3 py-2 text-sm font-medium">
        <NavLink
          to="/userupdate"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 p-2 rounded-xl text-white"
              : "text-gray-700"
          }
          aria-current="page"
        >
          Update Profile
        </NavLink>
      </li>
      <li className="rounded-md px-3 py-2 text-sm font-medium">
        <NavLink
          to="/userprofile"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900  p-2 rounded-xl text-white"
              : "text-gray-700"
          }
          aria-current="page"
        >
          User Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-300 p-5 mt-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Deluxe</h1>
          <div className="hidden md:flex gap-3 mt-2 list-none">
            {Links}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            {user ? (
              <div className="flex items-center">
                <div
                  className="btn btn-ghost btn-circle avatar relative"
                  onClick={toggleDropdown}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="w-8 sm:w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={user.photoURL}
                    />
                  </div>
                  {isHovered && (
                    <div className="absolute left-12 p-2 bg-gray-700 text-white rounded-lg shadow-lg">
                      {user.displayName}
                    </div>
                  )}
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-12 mt-2 w-48 bg-white rounded-lg shadow-lg ">
                    <NavLink
                      to="/userupdate"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Update Profile
                    </NavLink>
                    <NavLink
                      to="/userprofile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      User Profile
                    </NavLink>
                    <button
                      onClick={() => {
                        Logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <button className="btn btn-primary">Log In</button>
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="list-none flex flex-col gap-2">
              {Links}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
