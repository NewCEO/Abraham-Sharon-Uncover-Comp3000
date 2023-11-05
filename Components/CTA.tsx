"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function CTA({}: Props) {
  return (
    <>
      <div className="bg-[#FAD9B8] h-[200px]  flex flex-col xl:flex-row items-center justify-evenly ">
        <div>
          <h1 className=" text-[20px]">
            <span className="text-[#000000]">New Artistes,</span> Old Favorites
          </h1>
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex w-[240]  justify-center items-center uppercase text-sm p-5 xl:p-5 xl:w-[300px]  xl:text-md text-[#FAD9B8]  bg-[#104B53] cursor-pointer "
          >
            Create an Uncover account
          </motion.button>
        </div>
      </div>
      <div className="bg-[#104b53]">
        <p>Here's some Music to get you started</p>
      </div>
    </>
  );
}

export default CTA;
