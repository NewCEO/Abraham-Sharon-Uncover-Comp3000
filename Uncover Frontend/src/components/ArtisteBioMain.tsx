import { HiUserAdd, HiUserRemove } from "react-icons/hi";
import artisteBio2 from "../assets/artistBio2.jpg";
// import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

function ArtisteBioMain() {
  const [followed, setFollowed] = useState(false);

  const toggleFollow = () => {
    setFollowed(!followed);
  };
  return (
    <>
      <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img src={artisteBio2} alt="" className=" object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 pb-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#FAD9B8]">Paravi</h1>
            <p className="text-white hidden xl:flex">
              Tiktok Creator from God knows where, I have music out but will
              <br />
              like to share my covers with you
            </p>
            <div className="flex flex-row gap-2 items-center">
              <span className="flex w-24 h-12 justify-center items-center text-xs  bg-[#104b53] rounded-full text-[#FAD9B8]">
                RnB
              </span>
              <span className="flex w-24 h-12 justify-center items-center text-xs p-3 bg-[#104b53] rounded-full text-[#FAD9B8]">
                Pop
              </span>
            <div className="rounded-full h-[4rem] w-[4rem] bg-black text-white text-3xl flex justify-center items-center ">
                {followed ? (
                  <HiUserRemove onClick={toggleFollow} />
                ) : (
                  <HiUserAdd onClick={toggleFollow} className="text-[#FAD9B8]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-[#104b53] p-5 font-semibold mt-5">Covers</h2>
      </section>
    </>
  );
}

export default ArtisteBioMain;
