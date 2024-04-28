import { FaArrowLeft, FaPlay, FaSearch } from "react-icons/fa";
import logo from "../assets/LOGO.png";
import UserImg from "../assets/UserImg.png";
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";
import { logout } from "../../actions/accountActions";
import { useDispatch } from "react-redux";
import React from "react";


type MusicHeaderProps = {
  onLogout: () => void;
};


const MusicHeader: React.FC<MusicHeaderProps> = ({ onLogout}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }; 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    // Clear localStorage
  // localStorage.removeItem('username');
    dispatch(logout());
    onLogout();
    navigate("/")
  };
  
  return (
    <>
      <section className="flex">
        <nav className="w-full flex items-center justify-between bg-white p-5 fixed shadow-md">
          <div className="flex items-center gap-x-20">
            <Link to="/">
              <img
                src={logo}
                alt="Uncover-Logo"
                className="h-[1.2rem] object-contain"
              />
            </Link>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search favorite artiste, song, genre...."
                className="border border-[#104b53] rounded-full py-2 px-4 pr-10 ml-12 outline-none w-[25rem] bg-[#fff] text-black hidden xl:block"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                <FaSearch className="text-[#104b53]" onClick={toggleModal} />
              </div>
            </div>
          </div>

          <div className="flex flex-row  gap-14  ">
            <div className="xl:flex items-center mr-9 hidden">
              <span className="w-[10rem] font-semibold text-xs p-[0.3rem] xl:p-[0.5rem] rounded-md  text-[#104b53] xl:w-[10rem] outline outline-1 outline-[#104B53]">
                Watch Time - 30:00
                <span className="absolute ml-6 text-center justify-center my-1 cursor-pointer">
                  <Link to="">
                    <FaPlay />
                  </Link>
                </span>
              </span>
            </div>
            <div className="items-center flex mr-10">
              <img
                src={UserImg}
                alt="profile photo"
                className="rounded-full w-[3rem] h-[3rem] object-cover right-6 xl:right-0 cursor-pointer"
                onClick={handleDropdownToggle}
              />
            </div>

            {isDropdownOpen && (
        <div className="absolute top-[3rem] right-0 bg-white border rounded shadow-md mt-5 mr-2">
          <ul>
            <li className="py-2 px-4 cursor-pointer hover:bg-[#104b53] hover:text-white text-[#104b53] rounded-sm " onClick={handleLogOut}>
              Sign Out
            </li>
          </ul>
        </div>
      )}


          </div>
        </nav>
      </section>
       {/* Modal */}
       {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 xl:hidden">
          <div className="p-8 w-full flex top-10 absolute flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 w-full">
              {/* Back Icon */}
              <button onClick={toggleModal}>
                <FaArrowLeft/>
              </button>
              {/* Search Input */}
              <input type="text" placeholder="Search favorite artiste song and genre" className="border border-gray-300 rounded-md px-4 py-2 w-[18rem]  focus:outline-none text-sm" />
            </div>

            {/* Search Results Section */}
            <div>
              {/* You can map over your search results here */}
              {/* For example: */}
              <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <p>Search Result 1</p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <p>Search Result 2</p>
              </div>
              {/* Add more search results as needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicHeader;
