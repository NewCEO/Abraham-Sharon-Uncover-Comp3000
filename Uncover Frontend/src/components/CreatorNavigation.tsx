import logo from "../assets/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDashboard, MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu, HiUserCircle } from "react-icons/hi";
import { logout } from "../../actions/accountActions";
import { UserObject } from "../../model/user";
import { FaSignOutAlt, FaUserCheck } from "react-icons/fa";
import React from "react";

function CreatorNavigation({ user }: { user: UserObject }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    localStorage.removeItem('unCoverUser')
    navigate("/creator-landing");
  };
  return (
    <>
    <img src={logo} alt="logo" className="mt-6 left-0 h-6 object-contain p-1 ml-2 xl:hidden" />
    <section className="hidden xl:flex">
      <nav className="top-0 left-0 right-0 z-10 flex  justify-between items-center p-5 w-full">
        <Link to="/creator-landing">
          <img
            src={logo}
            alt="Uncover-Logo"
            className="h-[1.2rem] object-cover"
          />
        </Link>
        <ul className="flex space-x-4">
          <li className="relative">
            <Link to={{ pathname: "/creator-home", state: { user } }}
              className="hover:underline text-[#104b53] font-medium text-xs md:text-lg"
            >
              Dashboard
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform origin-left"></div>
          </li>
          <li className="relative">
            <Link to="/user-recommendations"
              
              className="hover:underline text-[#104b53] font-medium text-xs md:text-lg"
            >
              User Recommendation
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform origin-left"></div>
          </li>
          <li className="relative">
          <Link to={{ pathname: "/profile", state: { user } }}
            className="hover:underline text-[#104b53] font-medium text-xs md:text-lg"
            >
              Profile
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform origin-left"></div>
          </li>

            <li className="relative">
              <a
                href=""
                className="hover:underline text-[#104b53] font-medium text-xs md:text-lg"
                onClick={handleLogout}
              >
                Signout
              </a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform origin-left"></div>
            </li>
          </ul>

          <div className="flex flex-row items-center cursor-pointer justify-evenly xl:gap-x-6">
            <button className="flex w-24 justify-center items-center text-xs p-[0.5rem] rounded-full xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
              <Link to="/upload-cover">Upload Cover</Link>
            </button>
          </div>
        </nav>
      </section>

      {/* Mobile Navigation */}

      <div className="absolute md:hidden top-[1.3rem] right-3 z-50">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-[#104b53]"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <MdOutlineClose
            className="w-6 h-6 mr-2 text-[#104b53]"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 w-2/3 bg-gradient-to-tl from-white/20 to-[#FAD9B8] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition h-full ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <Link to="/creator-landing">
          <img
            src={logo}
            alt="Uncover-Logo"
            className="h-[1.2rem] object-cover"
          />
        </Link>

        <ul className="flex flex-col mt-10 text-[#104b53] gap-2">
          <a
            href="/creator-home"
            className="xl:hover:underline text-[#104b53] font-bold text-sm hover:text-white"
          >
            <li className="relative hover:bg-[#104b53] hover:text-white rounded-md flex flex-row items-center gap-2 p-2">
              <MdDashboard className="text-xl" />
              Dashboard
            </li>
          </a>

          <a
            href="/user-recommendations"
            className="xl:hover:underline text-[#104b53] font-bold text-sm hover:text-white"
          >
            <li className="relative flex flex-row items-center rounded-md hover:bg-[#104b53]  gap-2 p-2">
              <FaUserCheck className="text-xl" />
              User Recommendation
            </li>
          </a>

          <a
            href="/profile"
            className="xl:hover:underline text-[#104b53] font-bold text-sm hover:text-white"
          >
            <li className="relative flex flex-row items-center rounded-md hover:bg-[#104b53]  gap-2 p-2">
              <HiUserCircle className="text-xl" />
              Profile
            </li>
          </a>

          <a
            href=""
            className="xl:hover:underline text-[#104b53] font-bold text-sm hover:text-white"
            onClick={handleLogout}
          >
            <li className="relative flex flex-row items-center rounded-md hover:bg-[#104b53]  gap-2 p-2">
              <FaSignOutAlt className="text-xl" />
              Signout
            </li>
          </a>
        </ul>
        <div className="flex flex-row cursor-pointer mt-10">
          <button className="flex w-24 justify-center items-center text-xs p-[0.5rem] rounded-full xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
            <Link to="/upload-cover">Upload Cover</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreatorNavigation;
