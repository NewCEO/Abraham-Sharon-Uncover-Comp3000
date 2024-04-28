import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import CreatorNavigation from "../../components/CreatorNavigation";
import coverart from "../../assets/CoverImage.png";
import { coverService } from "../../../service/coverService";
import { UserObject } from "../../../model/user";
import { UploadCover } from "../../../model/coverUpload";
import React from "react";

type CreatorLandingProps = {
  isLoggedIn: boolean;
};



const CreatorHome: React.FC<CreatorLandingProps> = ({ isLoggedIn }) => {
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );
  const [uploadedCover, setUploadedCover] = useState<UploadCover[]>();
  const fetchCreatorCover = useCallback(async () => {
  
    try {
      const token = user.access_token;
      const response = await coverService.getCreatorCover(token);
      const coverData = await response.json();
      setUploadedCover(coverData);
    } catch (error) {}
  }, [user]);
  useEffect(() => {
    fetchCreatorCover();
  }, [fetchCreatorCover]);


  return (
    <>
      <CreatorNavigation user={user} />
      <section>
        <div className="text-center p-5 flex flex-col gap-6">
          <div className="text-center">
            {isLoggedIn ? (
              <h1 className="mb-5 mt-14 xl:mt-5">Welcome to your dashboard!</h1>
            ) : (
              <p className="text-[#104b53]">
                Please log in to access this page.
              </p>
            )}
            {/* <h1 className="mb-5 mt-14">Welcome to your Creator Dashboard</h1> */}
            <p className="text-center text-[#104b53] px-10">
              Upload,Track your covers, and see user recommendations
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-6 gap-y-10">
            <div className="flex outline outline-1 outline-[#104b53] h-full rounded-lg relative justify-center">
              <div className="p-3 gap-6 flex flex-col justify-center items-center">
                <h2 className="text-[#104b53] font-bold text-sm mt-5">
                  Subscribers
                </h2>
                <span className="text-[#104b53] xl:text-2xl font-semibold font-corsicaBook">
                  123k
                </span>
                <span className="absolute top-0 right-0 text-xs text-[#104b53] p-2 font-bold">
                  2000+
                </span>
              </div>
            </div>
            <div className="flex outline outline-1 outline-[#104b53] h-full rounded-lg relative justify-center">
              <div className="p-3 gap-6 flex flex-col justify-center items-center">
                <h2 className="text-[#104b53] font-bold text-sm mt-5 ">
                  Like Count
                </h2>
                <span className="text-[#104b53] xl:text-2xl font-semibold font-corsicaBook">
                  123k
                </span>
                <span className="absolute top-0 right-0 text-xs text-[#104b53] p-2 font-bold">
                  400+
                </span>
              </div>
            </div>
            <div className="flex outline outline-1 outline-[#104b53] h-full rounded-lg relative justify-center">
              <div className="p-3 gap-6 flex flex-col justify-center items-center">
                <h2 className="text-[#104b53] font-bold text-sm mt-5">Tips</h2>
                <span className="text-[#104b53] xl:text-2xl font-semibold font-corsicaBook">
                  123k
                </span>
                <span className="absolute top-0 right-0 text-sm text-[#104b53] p-2 font-bold">
                  23+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="flex flex-row justify-center">
          <h1>Your Covers</h1>
        </div>
        {/* {uploadedCover?.map((cover) => {
          console.log(cover);
          return (
            <div className="grid grid-cols-3 gap-8 mt-6 gap-y-10">
              <div
                key={cover?.id}
                className="w-32 h-32 md:w-52 md:h-52 p-2 cursor-pointer mb-20 flex flex-wrap justify-center "
              >
                <div className="relative w-full h-full rounded-lg">
                  <img
                    src={cover.art}
                    alt=""
                    className="object-cover w-full h-full rounded-sm"
                  />
                  <p className="text-[#104b53] mt-3 font-corsicaBook text-sm line-clamp-2 ">
                    {cover.song_name} - {cover.artist_name} cover
                  </p>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap">
              {/* Mapping through your data to render each item */}
              {uploadedCover?.map((cover) => (
                <div
                key={cover?.id}
                  className=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4"
                >
                  {/* Image */}
                  <img
                    src={cover.art}
                    alt={cover.song_name}
                    className="w-32 h-32 md:w-52 md:h-52 mb-2 object-cover"
                  />
                  {/* Text */}
                  <p className="text-center text-sm text-[#104b53]">{cover.song_name} - {cover.artist_name}</p>
                </div>
              ))}
            </div>
      </section>
    </>
  );
};
export default CreatorHome;
