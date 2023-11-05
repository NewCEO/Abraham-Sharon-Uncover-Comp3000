"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {};

export default function HomeHeader({}: Props) {
  return (
    <div className="absolute top-0 left-0 w-full">
<header className="flex  justify-between items-start mx-auto max-w-[75rem] z-50 xl:items-center p-5 ">
      <motion.div
        initial={{
          x: -100,
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
        className="flex flex-row items-center"
      >
        <h1 className="text-3xl xl:text-[48px]">Uncover</h1>
      </motion.div>
      <div className="flex flex-row items-center cursor-pointer ">
      <Link href="/Signup">
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="flex w-24 justify-center items-center uppercase text-sm p-[0.5rem] xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-5"
    >
      Sign Up
    </motion.button>
</Link>

<Link href="/Login">
<motion.button
        whileTap={{ scale: 0.9 }}
        className="flex w-24 justify-center items-center uppercase text-sm p-[0.5rem]  xl:w-40 xl:text-lg  bg-[#104B53] text-[#FAD9B8]">
          Log in
        </motion.button>
</Link>
       
      </div>
    </header>
    </div>
    
  );
}
