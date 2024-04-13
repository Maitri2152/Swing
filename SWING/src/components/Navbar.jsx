import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import useAuth from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Use the custom hook to get user state and logout function

  const handleLogout = async () => {
    try {
      await logout();
      navigate({ signOut });
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="w-full cursor-pointer object-cover overflow-hidden">
      <>
        <div className="flex flex-row justify-between pl-7 pt-9 pr-5shadow-[0_3px_10px_rgba(0,0,0,0.2)] ">
          <div className="flex flex-row cursor-pointer">
            <span>
              <IoLogoGooglePlaystore
                size={30}
                color="white"
                className="mr-1"
                onClick={() => navigate("/Main")}
                onDoubleClick={() => navigate("/Home")}
              />
            </span>
            <h1
              className="text-2xl font-semibold text-white font-sans "
              onClick={() => navigate("/Main")}
              onDoubleClick={() => navigate("/Home")}
            >
              OnlyWatch
            </h1>
          </div>

          {user?.email ? (
            <div>
              <Link to="/Account">
                <button className="text-white pr-4">Account</button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <Link to="/Login">
                <button className="text-white pr-4">Sign In</button>
              </Link>
              <Link to="/SignIn">
                <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Navbar;
