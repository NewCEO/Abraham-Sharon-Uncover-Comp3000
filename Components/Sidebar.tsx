"use client";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { MdExplore, MdHome, MdLibraryMusic, MdMenu } from "react-icons/md";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Playlist from "./Playlist";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
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

  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false);
  const setToggleCollapseHandler = () => {
    setToggleCollapse((prev) => !prev);
  };

  const sidebarStyles = {
    width: toggleCollapse ? "100px" : "200px",
    padding: toggleCollapse ? "" : "10px",
    backgroundColor: toggleCollapse ? "white" : "",
  };


  return (
    <aside className="flex h-screen border-r-2 border-[#104b5329]">

        <div
          className={`md:flex flex-col hidden h-full p-2 gap-y-4 transition-all duration-300 ease-linear`}
          style={sidebarStyles}
        >
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: toggleCollapse ? 0.6 : 1, // Reduce the size when toggled
            }}
            transition={{
              duration: 1,
            }}
            className={`flex flex-row items-center  gap-x-2 py-1 ${
              toggleCollapse ? "justify-center" : ""
            }`}
          >
            {!toggleCollapse ? (
              <>
                <MdMenu
                  className="cursor-pointer text-3xl text-[#104b53]"
                  onClick={setToggleCollapseHandler}
                />
                <Link href="/">
                  <h1 className="text-[30px]">Uncover</h1>
                </Link>
              </>
            ) : (
              <div className=" flex flex-row  items-center gap-x-2 py-3">
                <MdMenu
                  className="text-2xl cursor-pointer text-[#104b53]"
                  onClick={setToggleCollapseHandler}
                />
                <p className="text-2xl uppercase text-[#104b53] font-h1-weight">
                  Uncover
                </p>
              </div>
            )}
          </motion.div>

          {!toggleCollapse ? (
            <Box className="py-4 px-5 flex flex-col gap-y-5">
              {routes.map((item) => (
                <SidebarItem key={item.label} {...item} />
              ))}
            </Box>
          ) : (
            <Box className="py-2 px-5 flex flex-col gap-y-5">
              {routes.map((item) => (
                <SidebarItem
                  key={item.label}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </Box>
          )}

          {!toggleCollapse && (
            <div className="flex flex-col gap-y-4 p-5 bg-[#104b53] rounded-lg text-white">
              <p className=" text-left text-sm">
                Want to hear a cover of your favorite song? Recommend it to an
                artist you love.
              </p>
              <button className="uppercase bg-white p-2 text-[#104b53] text-xs rounded-full">
                Recommend a song
              </button>
            </div>
          )}
          {!toggleCollapse && (
            <Box className="overflow-y-auto h-full p-3">
              <Playlist />
            </Box>
          )}
        </div>
    </aside>
  );
};

export default Sidebar;
