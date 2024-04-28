import React from "react";
import CoverArt from "../assets/CoverImage.png";
import MusicHeader from "./MusicHeader";
import Sidebar from "./Sidebar";
// import SongBar from "./SongBar";
import UpNext from "./UpNext";

function CurrentlyPlaying() {
  return (
    <>
      {/* <div className="relative z-10 mb-20">
        <MusicHeader />
      </div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex-grow flex justify-center items-center">
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={CoverArt}
                alt=""
                className="max-w-full max-h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 p-3">
            <UpNext />
          </div>
        </div>
        <SongBar />
      </div> */}

      <div className="relative z-10 mb-20">
        <MusicHeader />
      </div>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-grow">
          <div className="flex-grow">
            <div className="overflow-auto">
              <img
                src={CoverArt}
                alt=""
                className="object-cover"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </div>
          <div className="mt-5 p-3">
            <div className="overflow-auto">
              <UpNext />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CurrentlyPlaying;
