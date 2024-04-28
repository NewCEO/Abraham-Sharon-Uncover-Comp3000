import Config from '../config/config';
import { UserPlaylist } from '../model/playlist';

async function createPlaylist(data: UserPlaylist, token:string) {
    let url = `${Config.API_URL}/playlists`;

  const formData = new FormData();
  formData.append('name', data.name); 
  formData.append('image', data.image); 
 

    const requestOptions = {
        method: 'POST',
        body: formData,
        headers: { 
            Authorization: `Bearer ${token}`
         }
        
    };

    const response = await fetch(url, requestOptions);
    return response;
}

async function getAllPlaylists(token:string) {
    const requestOptions = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }    
    };
  
    const url = `${Config.API_URL}/playlists`;
  
    const response = await fetch(url, requestOptions);
    return response;
  }

  async function addCoverToPlaylist(coverId: number, token: string, playlistId: number) {
    let url = `${Config.API_URL}/playlists/${playlistId}/covers`;
    
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ cover: coverId }), // Adjust payload to match backend
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
  
    const response = await fetch(url, requestOptions);
    return response;
  }

  async function getCoversFromPlaylist(playlistId:number, token:string){
    let url = `${Config.API_URL}/playlists/${playlistId}/covers`;
    const requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }
    const response = await fetch(url, requestOptions);
    return response;
  }

  

export const playlistService = {
    createPlaylist,
    getAllPlaylists,
    addCoverToPlaylist,
    getCoversFromPlaylist
}
