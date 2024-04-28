import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux';
import CreatorNavigation from "../../components/CreatorNavigation";
import { UploadCover } from "../../../model/coverUpload";
import { coverService } from "../../../service/coverService";
import { UserObject } from "../../../model/user";
import React from "react";

function CoverUpload() {
  const user = useSelector((state: { auth: { user: UserObject } }) => state.auth.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UploadCover>({
    song_name: "",
    artist_name: "",
    description: "",
    art: {} as File,
    audio: {} as File
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'audio' || name === 'art') {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData({ ...formData, [name]: files[0] });
        toast.info(`File '${files[0].name}' selected for upload`);
      } else {
        setFormData({ ...formData, [name]: {} as File }); 
        toast.warn('No file selected');// Set to an empty object if no files selected
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.song_name || !formData.artist_name || !formData.description || !formData.art || !formData.audio) {
      toast.error('All fields are required');
      return;
    }
    try {
      const userId = user.user.id;
      const token = user.access_token
      const response = await coverService.createCover(formData, userId, token);
      if (response.ok) {
        // Handle success
        toast.success('Cover added successfully');
        // Reset form
        setFormData({
          song_name: "",
          artist_name: "",
          description: "",
          art: {} as File,
          audio:{} as File
        });
        // Redirect to /fav-artiste
        navigate('/creator-home');
      } 
      const responseData = await response.json();
        if (responseData.message) {
          toast.error(responseData.message);
        }
    } catch (error) {
      // Handle fetch error
      
      console.error('Error:', error);
      toast.error('Failed to add cover');
    }
  };
  

  return (
    <>
      <CreatorNavigation />

      <section>
        <div className="flex justify-center">
          <h1 className="text-xl mt-[1rem] md:text-3xl">Upload Cover</h1>
        </div>
        <form className="max-w-md mx-auto mt-8 mb-8 p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="song_name"
              className="block font-medium text-gray-700"
            >
              Original Song Name
            </label>
            <input
              type="text"
              id="song_name"
              name="song_name"
              value={formData.song_name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="artist_name"
              className="block font-medium text-gray-700"
            >
              Original Artiste Name
            </label>
            <input
              type="text"
              id="artist_name"
              name="artist_name"
              value={formData.artist_name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Cover description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={250}
              className="mt-1 p-5 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
            <p className="text-sm text-gray-500">
              {250 - formData.description.length} characters remaining
            </p>
          </div>

          {/* Profile Image */}
          <div className="mb-4">
            <label
              htmlFor="art"
              className="block font-medium text-gray-700"
            >
              Cover art
            </label>
            <input
              type="file"
              id="art"
              name="art"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
            {formData.art && (
            <p className="text-sm text-gray-500 mt-1">Selected File: {formData.art.name}</p>
          )}
          </div>
          {/* Audio Upload */}
          <div className="mb-4">
            <label
              htmlFor="audio"
              className="block font-medium text-gray-700"
            >
              Audio File
            </label>
            <input
              type="file"
              id="audio"
              name="audio"
              accept="audio/*"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
            {formData.audio && (
            <p className="text-sm text-gray-500 mt-1">Selected File: {formData.audio.name}</p>
          )}
          </div>
          
          <button
            type="submit"
            className="bg-[#104b53] text-[#Fa] font-semibold py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default CoverUpload;
