import { useEffect, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { IoPlay, IoPause } from "react-icons/io5";
import { coverService } from "../../service/coverService";
import { UploadCover } from "../../model/coverUpload";
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import React from "react";
import { UserPlaylist } from "../../model/playlist";
import { UserCover } from "../../model/playlistCover";
import { playlistService } from "../../service/playlistService";

function SongCard({ userData }) {
  const [covers, setCovers] = useState<UploadCover[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
  const [selectedCoverId, setSelectedCoverId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // State to manage play/pause functionality

  const toggleModal = (coverId: number) => {
    setSelectedCoverId(coverId === selectedCoverId ? null : coverId);
    setIsModalOpen(!isModalOpen);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  }

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle audio play/pause
  const handleAudio = (coverId: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  const audio = document.getElementById(`audio-${coverId}`) as HTMLAudioElement;
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

  const addToEachPlaylist = async (
    playlistId: number,
    selectedCoverId: number
  ) => {
    try {
      const token = userData?.access_token;
      const response = await playlistService.addCoverToPlaylist(
        selectedCoverId,
        token,
        playlistId
      );
      if (response.ok) {
        toast.success("Cover added to playlist successfully");
        closeModal();
      } else {
        const responseData = await response.json();
        if (responseData.message) {
          toast.error(responseData.message);
        } else {
          toast.error("Failed to add cover to playlist");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add cover to playlist");
    }
  };

  const fetchUserCovers = useCallback(async () => {
    try {
      if (!userData) return;
      const token = userData.access_token;
      const response = await coverService.getAllCovers(token);
      const coverData = await response.json();
      setCovers(coverData);
    } catch (error) {
      toast.error("Error fetching user covers:", error);
    }
  }, [userData]);

  const fetchPlaylists = async () => {
    try {
      if (!userData) {
        console.error("User is null or Undefined.");
        return;
      }
      // Make API call to fetch covers from the database
      const token = userData?.access_token;
      const response = await playlistService.getAllPlaylists(token);
      const playlistData = await response.json();
      // Update state with fetched playlists
      setPlaylists(playlistData);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    fetchUserCovers();
  }, [fetchUserCovers]);

  // Fetch playlists when component mounts
  useEffect(() => {
    fetchPlaylists();
  }, [userData]);

  const artistsToDisplay = [
    "Noah Kahan",
    "Sam Smith",
    "Raye",
    "Little Simz",
    "An endless ocean",
    "Joyner Lucas",
    "Paravi Das",
    "Devil Clefs",
    "Adele"
  ];

  // Filter covers by artist names
  const filteredCovers = Array.isArray(covers)
    ? covers.filter((cover) => artistsToDisplay.includes(cover.artist_name))
    : [];

  return (
    <>
      <div className="flex flex-wrap pb-10">
        {filteredCovers?.map((cover) => (
          <div
            key={cover?.id}
            className="relative w-32 h-32 md:w-52 md:h-52 p-2 cursor-pointer mb-20"
          >
            <div className="relative w-full h-full rounded-lg">
              <img
                src={cover.art}
                alt={`Art by ${cover.artist_name}`}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:shadow-md transition-opacity duration-300">
                <div className="bg-white rounded-full p-2 border border-[#104b53] z-50">
                  <audio id={`audio-${cover.id}`} src={cover.audio} />
                  {/* Conditionally render play/pause button based on isPlaying state */}
                  {(selectedCoverId === cover.id && isPlaying) ? (
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
              <div className="absolute top-0 right-0 ">
                <FaPlus
                  className="text-[#104b53] text-3xl p-2 cursor-pointer z-50"
                  onClick={() => toggleModal(cover?.id ?? 0)}
                />
              </div>
              </div>
            </div>
            <p className="text-[#104b53] mt-3 font-corsicaBook text-sm line-clamp-2">
              {cover.song_name} - {cover.artist_name}
            </p>

            {selectedCoverId === cover.id && isModalOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg w-1/3">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[#104b53] text-lg font-semibold">
                      Add Playlist
                    </h2>
                    <IoIosClose
                      className="text-[#104b53] text-4xl cursor-pointer"
                      onClick={()=>toggleModal(cover?.id ?? 0)}
                    />
                  </div>
                  <div>
                    <p className="text-[#104b53] font-corsicaBook text-sm">
                      {playlists?.map((item) => (
                        <p
                          key={item.id}
                          className="text-[#104b53] font-semibold py-3 p-1 flex items-center justify-between"
                        >
                          {item.name}{" "}
                          <FaPlus
                            className="text-[#104b53] text-xl mr-2 cursor-pointer"
                            onClick={() =>
                              addToEachPlaylist(item?.id ?? 0, cover.id ?? 0)
                            }
                          />
                        </p>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default SongCard;
