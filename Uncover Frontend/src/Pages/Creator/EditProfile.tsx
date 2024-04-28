import { ChangeEvent, useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatorNavigation from "../../components/CreatorNavigation";
import { ProfileObject, UpdateProfileObject } from "../../../model/profile";
import { UserObject } from "../../../model/user";
import { profileService } from "../../../service/profileService";
import React from "react";

const EditProfile = () => {
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

  useEffect(() => {
    if (profile) {
      setFormData({
        artist_name: profile.artist_name || "",
        cover_categories: profile.cover_categories || [],
        genres: profile.genres || [],
      });
    }
  }, [profile]);

  const CoverCategories = [
    { title: "Singer", value: "Singer" },
    { title: "Guitarist", value: "Guitarist" },
    { title: "Violinist", value: "Violinist" },
    { title: "Band", value: "Band" },
  ];

  const Genre = [
    { title: "RnB", value: "RnB" },
    { title: "Pop", value: "Pop" },
    { title: "Punk Rock", value: "Punk Rock" },
    { title: "Rap", value: "Rap" },
  ];

  const navigate = useNavigate();
  const [formData, setFormData] = useState<UpdateProfileObject>({
    artist_name: "",
    cover_categories: [] as string[],
    genres: [] as string[],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      genres: checked
        ? [...prevData.genres, value]
        : prevData.genres.filter((genre) => genre !== value),
    }));
  };

  const handleCoverCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedCategories = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData({ ...formData, cover_categories: selectedCategories });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !formData.artist_name ||
      !formData.cover_categories ||
      !formData.genres
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const profileId = profile?.id ?? 0;
      const token = user.access_token;
      const response = await profileService.updateCreatorProfile(
        formData,
        profileId,
        token
      );
      if (response.ok) {
        // Handle success
        toast.success("Creator profile updated successfully");
        await fetchCreatorProfile();
        // Reset form
        setFormData({
          artist_name: "",
          cover_categories: [],
          genres: []
        });
        // Redirect to /profile
        navigate("/profile");
      }
    
    } catch (error) {
      // Handle fetch error
      console.error("Error:", error);
      toast.error("Failed to create profile");
    }
  }
  
  return (
    <>
      <CreatorNavigation user={user} />

      <section>
        <div className="flex justify-center">
          <h1 className="text-xl mt-[1rem] md:text-3xl">Creator Profile</h1>
        </div>
        <form
          className="max-w-md mx-auto mt-8 mb-8 p-6 bg-white shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="artist_name"
              className="block font-medium text-gray-700"
            >
              Artiste Name
            </label>
            <input
              type="text"
              id="artist_name"
              name="artist_name"
              value={formData.artist_name}
              onChange={handleChange}
              className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
            />
          </div>
        
          <div className="mb-4">
            <label
              htmlFor="cover_categories"
              className="block font-medium text-gray-700"
            >
              Cover Category
            </label>
            <select
              id="cover_categories"
              name="cover_categories"
              value={formData.cover_categories}
              multiple
              onChange={handleCoverCategoryChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option>Select covery category</option>
              {CoverCategories.map((category, index) => (
                <option key={index} value={category.value} className="py-5">
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor="GenreSelector"
            className="block font-medium text-gray-700 mb-4"
          >
            Genre
          </label>
          <div className="mb-4 flex flex-wrap">
            {Genre.map((genre) => (
              <div key={genre.value} className="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id={genre.value}
                  name={genre.value}
                  value={genre.value}
                  checked={formData.genres.includes(genre.value)}
                  onChange={handleGenreChange}
                  className="mr-2"
                />
                <label htmlFor={genre.value} className="text-black">
                  {genre.title}
                </label>
              </div>
            ))}
          </div>
         
          <div className="flex flex-row">
            <button
              type="submit"
              className="bg-[#104b53] text-[#Fa] font-semibold py-2 px-4 rounded-md hover:border-[#104b53] hover:bg-white hover:text-[#104b53] w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProfile;
