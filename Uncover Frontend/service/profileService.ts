import Config from "../config/config";
import { ProfileObject, UpdateProfileObject } from "../model/profile";

async function createCreatorProfile(
  data: ProfileObject,
  userId: number,
  token: string
) {
  let url = `${Config.API_URL}/creator-profiles`;

  const formData = new FormData();
  formData.append("artist_name", data.artist_name);
  formData.append("bio", data.bio);
  // Append cover_categories as individual values
  data.cover_categories.forEach((category) => {
    formData.append('cover_categories[]', category);
  });
  
  // Append genres as individual values
  data.genres.forEach((genre) => {
    formData.append('genres[]', genre);
  });

  formData.append("banner", data.banner);
  formData.append("userId", String(userId));

  const requestOptions = {
    method: "POST",
    body: formData,
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(url, requestOptions);
  return response;
}



async function getCreatorProfile(token:string) {
    const requestOptions = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }    
    };
  
    const url = `${Config.API_URL}/creator-profiles/me`;
  
    const response = await fetch(url, requestOptions);
    return response;
  }

  async function updateCreatorProfile(
    data: UpdateProfileObject,
    profileId: number,
    token: string
  ) {
    let url = `${Config.API_URL}/creator-profiles/${profileId}`;
  
    const requestOptions = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    };
  
    const response = await fetch(url, requestOptions);
    return response;
  }

export const profileService = {
  createCreatorProfile,
  getCreatorProfile,
  updateCreatorProfile
};
