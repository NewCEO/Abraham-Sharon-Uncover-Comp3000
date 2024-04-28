import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MusicHeader from '../../components/MusicHeader'
import Sidebar from '../../components/Sidebar'
// import SongBar from '../../components/SongBar'
// import SongCard from '../../components/SongCard'
import { UserObject } from "../../../model/user";
import { UserPlaylist } from "../../../model/playlist";
import { playlistService } from "../../../service/playlistService"
import { logout } from "../../../actions/accountActions";
import React from "react";

function Library() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );

  const [loading, setLoading] = useState(true); // State to manage loading indicator
  const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
  const fetchPlaylists = async () => {
    try {
      if (!user) {
        console.error("User is null or Undefined.");
        return;
      }
      // Make API call to fetch covers from the database
      const token = user?.access_token;
      const response = await playlistService.getAllPlaylists(token);
      const playlistData = await response.json();
      // Update state with fetched playlists
      setPlaylists(playlistData);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  // Fetch playlists when component mounts
  useEffect(() => {
    fetchPlaylists();
  }, [user]);

  const handleLogOut = () => {
    // Clear localStorage
    // localStorage.removeItem('username');
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
    <div className="relative z-10 mb-20">
      <MusicHeader onLogout={handleLogOut} />
      </div>
      <div className="flex "> 
        <div className=""> 
          <Sidebar />
        </div>
        <div>
        <div className="flex flex-col p-5">
            <h2 className="text-[#104b53] text-2xl font-semibold">My Library</h2>

            {loading ? (
            <div className="text-[#104b53] p-5">Loading...</div> // Render loading indicator
          ) : (
            <div className="flex flex-wrap justify-center pb-10">
              {playlists.map((playlist, index) => (
                <div
                  key={index}
                  className="w-32 h-32 md:w-52 md:h-52 p-2 cursor-pointer mb-20 text-[#104b53]"
                >
                  <div className="flex flex-col items-center gap-[2rem]">
                    <img src={playlist?.image} className="object-cover rounded-lg w-32 h-32 md:w-52 md:h-52" />
                    {playlist?.name}
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
            {/* <SongCard /> */}
          </div>
            {/* <SongBar /> */}
      </div>
      </>
  )
}

export default Library