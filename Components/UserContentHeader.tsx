"use client";
import { MdPlayArrow, MdSearch } from "react-icons/md";
import heroImg from "../public/Assets/Images/vidar-nordli-mathisen-unsplash.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

interface UserContentHeaderProps {
 
}

const UserContentHeader: React.FC<UserContentHeaderProps> = ({}) => {
  const router = useRouter;
  const handleLogout = () => {};

//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarOpen(!isMobileSidebarOpen);
//   };

  return (
    <header>
      <div className="md:flex hidden flex-row justify-between   items-center h-fit">
        <div className="relative pl-2">
          <input
            className="outline outline-[#104b53] outline-1 w-[25rem] overflow-hidden p-2 h-10 rounded-lg"
            type="text"
            placeholder="Search favorite artiste,genre..."
          />
          <div className="absolute inset-y-4 right-0 flex items-center pr-3 bg-white">
            <MdSearch className="text-[#104b53] text-2xl " />
          </div>
        </div>

        <div className="mr-10 flex flex-row items-center gap-x-4">
          <div className="text-center items-center  p-2 gap-x-5 rounded-lg text-[#104b53] flex flex-row outline outline-1 outline-[#104b53] h-10">
            <p>Watch Time - 30 Min</p>
            <div className=" bg-[#104b53] p-1 rounded-full">
              <MdPlayArrow className="text-2xl text-white" />
            </div>
          </div>
          <Image
            alt="Uncover Hero Image"
            src={heroImg}
            placeholder="blur"
            className="rounded-full h-[60px] w-[60px]"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Mobile View Below */}

      <div className="flex flex-row justify-between items-center md:hidden">
        <div className="absolute top-0 left-[-200px]">
          <MobileSidebar />
          {/* <MobileSidebar isMobileSidebarOpen={isMobileSidebarOpen} toggleMobileSidebar={toggleMobileSidebar} /> */}
        </div>
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center gap-x-3 pl-10"
        >
          {/* <MdMenu className="text-2xl cursor-pointer" onClick={toggleMobileSidebar} /> */}
          <Link href="/">
            <h1 className="text-xl xl:text-[30px]">Uncover</h1>
          </Link>
        </motion.div>
        <div className="p-3 flex flex-row items-center gap-x-4">
          <MdSearch className="text-[#104b53] text-xl " />
          <div className=" flex flex-row items-center gap-1">
            <Image
              alt="Uncover Hero Image"
              src={heroImg}
              placeholder="blur"
              className="rounded-full h-[30px] w-[30px]"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserContentHeader;
