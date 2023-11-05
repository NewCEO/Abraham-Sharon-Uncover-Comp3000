"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineWest } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import heroImg from "../../../public/Assets/Images/eric-nopanen-unsplash.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function signup({}: Props) {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 hidden xl:flex">
          {/* Left Div with Image */}
          <Image
            alt="Login Image"
            src={heroImg}
            className="w-full h-screen"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="xl:w-1/2 w-screen p-4">
          <Link href="/">
            <div className="flex flex-row w-20 justify-evenly items-center text-[#104b53] mb-5">
              <MdOutlineWest className="text-[#104b53]" />
              <p className="font-h1-weight">Back</p>
            </div>
          </Link>

          {/* Right Div with Form */}
          <form className=" xl:pl-20 xl:pr-20 pl-10 pr-10 pt-10 ">
            <div className="flex flex-col">
              <p className="font-h1-weight text-[40px]">Welcome </p>
              <span className="font-h1-weight primaryColor text-[20px] mb-10">
                Sign In to your account
              </span>
            </div>
            <div className="flex flex-col">
              <label className="primaryColor font-h1-weight" htmlFor="Email">
                email
              </label>
              <input
                type="text"
                className="w-full p-2 mb-10 rounded mt-3 border border-[#104b53]"
              />

              <label className="primaryColor font-h1-weight " htmlFor="Email">
                password
              </label>
              <input
                type="text"
                className="w-full p-2 mb-2 border rounded mt-3 border-[#104b53]"
              />
            </div>

            <div className="justify-center flex flex-col items-center gap-y-3">
              <Link href="/musicHome">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#104b53] secondaryColor uppercase xl:w-[28rem] w-[20rem] p-2 rounded mt-10 text-sm"
                >
                  <div></div>
                  Sign In
                </motion.button>
              </Link>

              <p className="text-sm">
                Don't have an account?
                <Link href="/Signup">
                  <span className="text-[#104b53] ramblerSemibold ml-1">
                    Sign up here
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col  items-center mt-10 gap-y-2">
              <p className="ramblerSemibold text-[#104b53]">Sign In options</p>
              <button className="border border-[#104b53] xl:w-[20.75rem] w-[20rem] p-3 cursor-pointer">
                <FcGoogle className="text-3xl ml-32" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signup;
