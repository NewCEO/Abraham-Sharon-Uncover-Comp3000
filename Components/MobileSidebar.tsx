"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { MdExplore, MdHome, MdLibraryMusic, MdMenu } from "react-icons/md";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Playlist from "./Playlist";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileSidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <MdHome />,
        label: "Home",
        active: pathname === "/musicHome",
        href: "/musicHome",
      },
      {
        icon: <MdExplore />,
        label: "Explore",
        active: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <MdLibraryMusic />,
        label: "Library",
        active: pathname === "/userLibrary",
        href: "/userLibrary",
      },
    ],
    [pathname]
  );

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(true);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <motion.aside
    initial={{
      x: isMobileSidebarOpen ? 0 : -200, // Slide in from the left when open, stay outside the viewport when closed
    }}
    animate={{
      x: isMobileSidebarOpen ? 0 : 200, // Slide in when open, remain at 0 when closed
    }}
    transition={{
      duration: 0.7,
    }}
    className={`flex h-screen bg-white relative w-[200px]`}
  >
    <div className="md:hidden flex-col flex h-full p-2 gap-y-4 transition-all duration-300 ease-linear">
      <div className="flex flex-row items-center  gap-x-3 p-3">
        <Link href="">
          <h1 className="text-2xl">Uncover</h1>
        </Link>
      </div>
      <MdMenu
        className="text-3xl text-[#104b53] cursor-pointer absolute right-[-35px] mt-[10.5px]"
        onClick={toggleMobileSidebar}
      />
        <Box className="py-4 px-5 flex flex-col gap-y-5">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </Box>
        <div className="flex flex-col gap-y-4 p-2 bg-[#104b53] rounded-lg text-white">
          <p className="px-2 text-left text-sm">
            Want to hear a cover of your favorite song? Recommend it to an
            artist you love.
          </p>
          <button className="uppercase bg-white p-2 text-[#104b53] text-xs rounded-full">
            Recommend a song
          </button>
        </div>
        <Box className="overflow-y-auto h-full p-3">
          <Playlist />
        </Box>
      </div>
    </motion.aside>
  );
};

export default MobileSidebar;
