import { FaToggleOn } from "react-icons/fa";
import artistImg from "../assets/artisteImg.jpg";
import React from "react";

function UpNext() {
  return (
    <div className="flex justify-end">
      <div className="w-[25rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-[#104b53] text-xl font-semibold">Up Next</h2>
          <div className="flex items-center">
            <p className="text-[#104b53] text-xl font-semibold mr-2">
              Autoplay
            </p>
            <span className="text-[#104b53] text-2xl">
              <FaToggleOn />
            </span>
          </div>
        </div>
        <hr className="text-[#104b53] my-3" />
        <div className="justify-between flex flex-row items-center  bg-gray-100 p-3 rounded-md shadow-md  w-full static overflow-x-auto">
          <div className="flex flex-row gap-5">
            <img
              src={artistImg}
              className="h-[3rem] w-[3rem] rounded-md object-cover"
            />
            <div className="text-[#104b53]">
              <span className="font-bold">Glorious - Paravi</span>
              <p className="font-light">Macklemore Cover</p>
            </div>
          </div>
          <span className="text-[#104b53] font-medium">3:33</span>
        </div>
      </div>
    </div>
  );
}

export default UpNext;
