import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CreatorNavigation from "../../components/CreatorNavigation";
// import userImg from "../../assets/UserImg.png";
// import artistBio2 from "../../assets/artistBio2.jpg";
import { UserObject } from "../../../model/user";
import { profileService } from "../../../service/profileService";
import { ProfileObject } from "../../../model/profile";
import React from "react";

const CreatorProfile = () => {
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );
  const [profile, setProfile] = useState<ProfileObject>();
  const fetchCreatorProfile = useCallback(async () => {
    try {
      const token = user?.access_token;
      const response = await profileService.getCreatorProfile(token);
      const profileData = await response.json();
      setProfile(profileData);
    } catch (error) {
      toast.error("Error fetching creator profile:", error);
    }
  }, [user]);

  useEffect(() => {
    fetchCreatorProfile();
  }, [fetchCreatorProfile]);
  console.log(profile, "creatorProfile");

  return (
    <>
      <CreatorNavigation />
      <section className="w-full">
        <section>
          <div className="flex justify-center">
            <h1 className="text-xl mt-[1rem] md:text-3xl">
              Your Creator Profile
            </h1>
          </div>
          <form className="max-w-md mx-auto mt-8 mb-8 p-6 bg-white shadow-md rounded-md">
            <div className="mb-4">
              <label
                htmlFor="artisteName"
                className="block font-bold text-black"
              >
                Artiste Name
              </label>
              <h1 className="text-xl">{profile?.artist_name || "N/A"}</h1>
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block font-bold  text-black">
                Bio
              </label>
              <p className="text-[#104b53]">{profile?.bio || "N/A"}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="coverCategory"
                className="block font-bold  text-black"
              >
                Cover Category
              </label>
              <div className="flex flex-row space-x-5">
                {profile?.cover_categories?.map((category: string) => (
                  <p key={category} className="text-[#104b53]">
                    {category}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="GenreSelector"
                className="block font-bold text-black"
              >
                Genre
              </label>
              <div className="flex flex-row space-x-5">
                {profile?.genres?.map((genre: string) => (
                  <p key={genre} className="text-[#104b53]">
                    {genre}
                  </p>
                ))}
              </div>
            </div>

            {/* Banner Image */}
            <div className="mb-4">
              <label
                htmlFor="bannerImage"
                className="block font-bold text-black"
              >
                Banner Image
              </label>
              <img src={profile?.banner} alt="Banner" className="w-full mb-2" />
            </div>

            <div className="flex flex-row">
              <button
                type="submit"
                className="bg-white text-[#104b53] font-semibold py-2 px-4 rounded-md border border-[#104b53] hover:shadow-md hover:border-[#104b53] w-full mr-4"
              >
                <Link to={{ pathname: "/edit-profile", state: { profile } }}>
                  Edit Profile
                </Link>
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default CreatorProfile;
