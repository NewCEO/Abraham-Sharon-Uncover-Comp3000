import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MusicHeader from "../../components/MusicHeader";
import Sidebar from "../../components/Sidebar";
import SongBar from "../../components/SongBar";
import SongCard from "../../components/SongCard";
import { UserObject } from "../../../model/user";
import { UserPlaylist } from "../../../model/playlist";
import { playlistService } from "../../../service/playlistService";
import { UploadCover } from "../../../model/coverUpload";
import { FaPlus } from "react-icons/fa";
import { IoPause, IoPlay } from "react-icons/io5";

function PlaylistView({ handleLogout }) {
  const location = useLocation();
  const playlist = location.state?.playlist;
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );

  const [loading, setLoading] = useState(true); // State to manage loading indicator
  const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
  const [covers, setCovers] = useState<UploadCover[]>([]);
  const [selectedCoverId, setSelectedCoverId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // State to manage play/pause functionality

  // Fetch covers when component mounts or when playlist/user changes

  const fetchCovers = async () => {
    try {
      if (!playlist || !user) {
        console.error("Playlist or user not found.");
        return;
      }
      const token = user.access_token;
      // Reset covers state to an empty array
      setCovers([]);
      const response = await playlistService.getCoversFromPlaylist(
        playlist.id,
        token
      );
      const coversData = await response.json();
      setCovers(coversData);
    } catch (error) {
      console.error("Error fetching covers:", error);
    }
  };

  useEffect(() => {
    fetchCovers();
  }, [user, playlist]);

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle audio play/pause
  const handleAudio = (
    coverId: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const audio = document.getElementById(
      `audio-${coverId}`
    ) as HTMLAudioElement;
    if (audio) {
      if (selectedCoverId !== coverId) {
        setSelectedCoverId(coverId); // Update selectedCoverId when clicking on a cover to play audio
      }
      if (isPlaying) {
        audio.pause(); // Pause audio if it's playing
      } else {
        audio.play(); // Play audio if it's paused
      }
      togglePlay(); // Toggle play/pause state
    }
  };

  return (
    <>
      <div className="relative z-10 mb-20">
        <MusicHeader onLogout={handleLogout} />
      </div>
      <div className="flex ">
        <div className="">
          <Sidebar />
        </div>
        <div>
          <div className="flex flex-col p-5 relative pb-10">
            <h2 className="text-[#104b53] text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {playlist?.name}
            </h2>
            <div className="flex items-center gap-[5rem]">
              <div className="relative w-full h-[50%] rounded-lg overflow-hidden">
                <img
                  className="inset-0 object-cover w-full h-60"
                  src={playlist?.image}
                  alt={playlist?.name}
                />
                <div className="absolute inset-0 bg-white opacity-50"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap pb-10">
            {covers?.map((cover) => (
              <div
                key={cover?.id}
                className="relative w-32 h-32 md:w-52 md:h-52 p-2 cursor-pointer mb-10"
              >
                <div className="relative w-full h-full rounded-lg">
                  <img
                    src={cover.cover.art}
                    alt={`Art by ${cover.artist_name}`}
                    className="object-cover w-full h-full rounded-lg"
                  />

                  <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:shadow-md transition-opacity duration-300">
                    <div className="bg-white rounded-full p-2 border border-[#104b53] z-50">
                      <audio id={`audio-${cover.id}`} src={cover.cover.audio} />
                      {/* Conditionally render play/pause button based on isPlaying state */}
                      {selectedCoverId === cover.id && isPlaying ? (
                        <IoPause
                          className="text-[#104b53] text-2xl z-50"
                          onClick={(e) => handleAudio(cover.id ?? 0, e)}
                        />
                      ) : (
                        <IoPlay
                          className="text-[#104b53] text-2xl z-50"
                          onClick={(e) => handleAudio(cover.id ?? 0, e)}
                        />
                      )}
                    </div>
                    {/* <div className="absolute top-0 right-0 ">
                      <FaPlus
                        className="text-[#104b53] text-3xl p-2 cursor-pointer z-50"
                        onClick={() => toggleModal(cover?.id ?? 0)}
                      />
                    </div> */}
                  </div>

                  {/* Render additional content as needed */}
                  <p className="text-[#104b53] mt-3 font-corsicaBook text-sm line-clamp-2">
                    {cover.cover.artist_name} - {cover.cover.song_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistView;
