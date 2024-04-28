import { useSelector } from "react-redux";
import { HiOutlineMenu } from "react-icons/hi";
import MusicHeader from "../../components/MusicHeader";
import MusicMain from "../../components/MusicMain";
import Sidebar from "../../components/Sidebar";
// import SongBar from "../../components/SongBar";
import { MdExplore, MdLibraryMusic, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { UserObject } from "../../../model/user";
import React from "react";

const links = [
  { name: "Home", to: "/music-home", icon: FaHome },
  { name: "Explore", to: "/Explore", icon: MdExplore },
  { name: "My Library", to: "/Library", icon: MdLibraryMusic },
];
const Playlist = [
  { title: "Trailer Parks", value: "trailer_parks" },
  { title: "Cover me it’s a cold night", value: "cover_me_it’s_a_cold_night" },
  { title: "Oh to be different", value: "oh_to_be_different" },
  { title: "Hypebeasts", value: "hypebeasts" },
  { title: "Oh so quiet", value: "oh_so_quiet" },
  { title: "No sad vibes here", value: "no_sad_vibes_here" },
  { title: "NGN is 9ja", value: "ngn_is_9ja" },
];
const Playlists = ({ handlePlaylist }) => (
  <div className="mt-5 overflow-x-auto h-full">
    <div className="flex flex-row justify-between items-center">
      <h3 className="text-[#104b53] mb-5 text-2xl font-semibold mt-5 ">
        Playlist
      </h3>
      <Link to="#">
        <span className="text-[#104b53] text-sm">
          <FaPlus />
        </span>
      </Link>
    </div>
    <ul className="overflow-hidden">
      {Playlist.map((item, index) => (
        <li
          key={index}
          onClick={() => handlePlaylist(item.value)}
          className="text-[#104b53] font-semibold py-3 p-1"
        >
          {item.title}
          <hr />
        </li>
      ))}
    </ul>
  </div>
);



function MusicHome({ isLoggedIn, handleLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userData = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );

  const NavLinks = ({ handleClick }) => (
    <div className="">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center w-[8rem] my-8 p-1 text-sm font-medium  rounded-md text-[#104b53] hover:bg-[#104b53] hover:text-white"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <>
      <div className="relative z-10 mb-20">
        <MusicHeader onLogout={handleLogout} />
      </div>
      <div className="flex">
        <div className="sticky top-0 h-screen hidden xl:flex">
          <Sidebar userData={userData}/>
        </div>
        <div className="flex-grow overflow-y-auto">
          <MusicMain isLoggedIn={isLoggedIn} userData={userData} />
        </div>
        {/* <div className="z-50">
          <SongBar userData={userData}/>
        </div> */}
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden top-[2rem] right-3 z-40">
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
        className={`top-0 w-2/3 bg-gradient-to-tl from-white/20 to-[#FAD9B8] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition absolute ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="left-0 h-6 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <div className="bg-[#104b53] xl:h-full w-full rounded-md p-2">
          <p className="text-sm">
            Want to hear a cover of your favorite song? Recommend it to an
            artist you love.
          </p>
          <button className="mt-4 flex w-full justify-center items-center bg-[#fff] text-xs p-[0.5rem] rounded-md xl:w-40 xl:text-lg text-[#104b53] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
            <Link className="text-xs font-bold" to="/creator-recommendation">
              Recommend A Song
            </Link>
          </button>
        </div>
        <div>
          <Playlists handlePlaylist={undefined} />
        </div>
      </div>
    </>
  );
}
export default MusicHome;