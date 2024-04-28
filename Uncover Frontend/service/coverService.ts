import Config from '../config/config';
import { UploadCover } from '../model/coverUpload';

async function createCover(data: UploadCover, userId: number, token:string) {
  let url = `${Config.API_URL}/covers`;

  const formData = new FormData();
  formData.append('song_name', data.song_name);
  formData.append('artist_name', data.artist_name);
  formData.append('description', data.description);
  formData.append('art', data.art); 
  formData.append('audio', data.audio); 
  formData.append('userId', String(userId));

  const requestOptions = {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${token}` },    
  };

  const response = await fetch(url, requestOptions);
    return response;
}


async function getAllCovers(token:string) {
  const requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }    
  };

  const url = `${Config.API_URL}/covers`;

  const response = await fetch(url, requestOptions);
  return response;
}

async function getCoverById(userId:number, token:string) {
  const requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }    
  };

  const url = `${Config.API_URL}/covers/${userId}`;

  const response = await fetch(url, requestOptions);
  return response;
}

async function getCreatorCover(token:string) {
  const requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }    
  };

  const url = `${Config.API_URL}/covers/me`;

  const response = await fetch(url, requestOptions);
  return response;
}



export const coverService = {
  createCover,
  getAllCovers,
  getCoverById,
  getCreatorCover
};
