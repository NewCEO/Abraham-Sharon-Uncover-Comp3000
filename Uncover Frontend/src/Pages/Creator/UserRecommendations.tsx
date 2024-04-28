import CreatorNavigation from "../../components/CreatorNavigation";
import RecData from "../../constants/RecData";
import artistofthemonth from "../../assets/artistofthmonth.png";
import React from "react";

// type LoggedPersistProps = {
//   isLoggedIn: boolean;
// };


const UserRecommendations=()=>{
  return (
    <>
      <CreatorNavigation />
      <section>
        <div className="flex justify-center">
          <h1 className="text-xl mt-[3rem] md:text-3xl">User Recommendations</h1>
        </div> 
        <div className="mt-5 flex w-full">
          <img src={artistofthemonth} alt="uncover-artist-of-the-month" />
        </div>
      </section>

      <section className="xl:mt-[8rem] mt-[3rem]">
        <div className="flex justify-between p-5">
          <h2 className="text-[#104b53] text-lg xl:text-2xl">Top Recommendations</h2>
          <span className="outline outline-1 text-[#104b53] rounded-[1.5rem] p-1 w-[5rem] text-center">
            More
          </span>
        </div>
        <div>
        <div className="grid xl:grid-cols-4 grid-cols-2 flex-wrap justify-between gap-10  p-5">
            {RecData.map((item) => (
              <div key={item.songTitle} className="flex flex-row  gap-6 items-center">
                <div className="">    
                <img src={item.image} alt="" className="w-[auto] rounded-full object-cover" />
                </div> 
                <div className="flex flex-col w-[10rem] gap-1">
                  <h3 className=" font-semibold text-[#104b53]">{item.songTitle}</h3>
                  <p className="text-sm text-gray-500 font-semibold">{item.originalArtisteName}</p>
                  <p className="text-sm text-gray-500">{item.voteCount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserRecommendations;
