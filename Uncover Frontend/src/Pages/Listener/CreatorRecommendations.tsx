import {useState } from "react";
import MusicHeader from "../../components/MusicHeader";
import Sidebar from "../../components/Sidebar";
import RecData from "../../constants/RecData";
import { FaSearch } from "react-icons/fa";
// import SongBar from "../../components/SongBar";
import React from "react";

function CreatorRecommendations() {
  const [artists] = useState(RecData);
  const [data, setData] = useState(RecData);
  const [votedIndexes, setVotedIndexes] = useState<number[]>([]);

  const handleVote = (index:number) => {
    // Check if the user has already voted for this item
    if (!votedIndexes.includes(index)) {
      const newData = [...data];
      newData[index].voteCount += 1; // Increment vote count
      setData(newData);
      
      // Add the index to the list of voted indexes
      setVotedIndexes([...votedIndexes, index]);
    } else {
      // User has already voted for this item
      alert("You've already voted for this item.");
    }
  };

  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const mockResults = ["Result 1", "Result 2", "Result 3"];

  const handleSearchClick = () => {
    setResults(mockResults);
    setShowResults(!showResults);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="relative z-10 mb-20">
        <MusicHeader />
      </div>
      <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
      <section className="xl:p-10 p-5 w-full">
        <div className="flex xl:flex-row flex-col   xl:justify-between w-full">
          <div>
            <h1 className="text-lg mb-5 md:text-[2rem] text-center">
              Recommend a Cover
            </h1>
          </div>
          {/* <div className="flex items-center relative justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search favorite artiste, song, genre...."
              className="border border-[#104b53] rounded-full py-2 px-4 pr-10 xl:ml-12 outline-none w-full xl:w-[25rem] bg-[#fff] text-black  xl:block"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-6">
              <FaSearch
                className="text-[#104b53]"
                onClick={handleSearchClick}
              />
            </div>
          </div> */}
        </div>
        <div className="flex justify-end p-5">
          {showResults && (
            <div className=" bg-white shadow-md mt-2 p-2 text-[#104b53] w-[23rem] flex flex-col rounded-sm">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <div
                    key={index}
                    className="hover:bg-[#104b53] hover:text-white rounded-sm p-2"
                  >
                    {result}
                  </div>
                ))
              ) : (
                <div>No results found</div>
              )}
            </div>
          )}
        </div>
      </section>
      <section className="w-auto flex">
        <div className="grid xl:grid-cols-4 grid-cols-2 flex-wrap justify-between gap-10 p-5">
          {artists.map((artiste, index) => (
            <div
              key={artiste.songTitle}
              className="flex flex-row  gap-6 items-center"
            >
              <div className="">
                <img
                  src={artiste.image}
                  alt=""
                  className="w-[auto] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col w-[10rem] gap-2">
                <h3 className=" font-semibold text-[#104b53]">
                  {artiste.songTitle}
                </h3>
                <p className="text-sm text-gray-500 font-semibold">
                  {artiste.originalArtisteName}
                </p>
                <p className="text-sm text-gray-500 font-semibold">{artiste.voteCount} Votes</p>
                <button onClick={() => handleVote(index)} className="font-bold p-1">Vote</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <SongBar /> */}
      </div>
      </div>
    </>
  );
}

export default CreatorRecommendations;
