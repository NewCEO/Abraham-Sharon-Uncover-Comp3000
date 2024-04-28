import React from "react";
import SongCard from "./SongCard";





function MusicMain({isLoggedIn, userData}) {

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col p-5">
        {isLoggedIn ? (
      <h2 className="text-[#104b53] text-2xl font-semibold">Welcome {userData?.user?.username}</h2>
      ) : (
        <p className="text-[#104b53]">Please log in to access this page.</p>
      )}
          <p className="text-[#104b53] mt-2">
            Here are some recommendations to get you started
          </p>
        </div>
        <div>
          <SongCard userData={userData}/>
        </div>
      </div>
    </>
  );
}

export default MusicMain;
