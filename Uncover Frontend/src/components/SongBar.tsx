import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import artistImg from "../assets/artisteImg.jpg";
import { IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { ImLoop } from "react-icons/im";
import { Link } from "react-router-dom";
import { coverService } from "../../service/coverService";
import { UserObject } from "../../model/user";
import React from "react";

function SongBar() {
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );
  const getCovers = useCallback(async () => {
    try {
      const token = user.access_token;
      const prodRes = await coverService.getAllCovers(token);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getCovers();
  }, [getCovers]);
  return (
    <div className="fixed bottom-0 left-0 w-full z-10">
      <div className="w-full flex flex-row items-center bg-[#104b53] h-[4rem] justify-between ">
        <div className="flex flex-row p-5 gap-x-4">
          <img
            src={artistImg}
            className="h-[3rem] w-[3rem] rounded-md object-cover"
          />
          <div>
            <span className="font-bold text-[#fad9b8]">
              <Link to="/currently-playing">
              Glorious - 
              </Link>
              <Link to="/creator-bio">
                <span className="hover:underline"> Paravi</span>
              </Link>
            </span>
            <p className="font-light text-[#fad9b8]">Macklemore Cover</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-12 items-center">
          <span className="text-sm hidden xl:flex ">
            <IoMdHeartEmpty />
          </span>
          <span className="text-md hidden xl:flex text-[#fad9b8]">
            <MdSkipPrevious />
          </span>
          <span className="p-3 xl:p-0 text-[#fad9b8]">
            <FaPlay />
          </span>
          <span className="text-md hidden xl:flex text-[#fad9b8]">
            <MdSkipNext />
          </span>
          <span className="text-xs hidden xl:flex text-[#fad9b8]">3:53</span>
          <span className="text-sm hidden xl:flex text-[#fad9b8]">
            <SlOptionsVertical />
          </span>
        </div>
        <div className="xl:flex flex-row gap-x-12 items-center p-5 hidden">
          <span className="text-[#fad9b8]">
            {" "}
            <HiMiniSpeakerWave />
          </span>
          <span className="text-[#fad9b8]">
            <ImLoop />
          </span>
          <Link to="/currently-playing">
            <span className="text-[#fad9b8] flex">
              <IoIosArrowUp />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SongBar;
