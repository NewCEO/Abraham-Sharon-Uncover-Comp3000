"use client";
import { PiPlaylistFill, PiPlusBold } from "react-icons/pi";

const Playlist = () => {
    const onClick = () =>{
        //Do Something later
    }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between pt-4">
        <div className="inline-flex items-center gap-x-2">
          <PiPlaylistFill className="text-2xl text-[#104b53]" />
          <p className="text-[20px] font-h1-weight text-[#104b53] mr-8">Playlist</p>
          <PiPlusBold className="text-[#104b53] cursor-pointer" onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
