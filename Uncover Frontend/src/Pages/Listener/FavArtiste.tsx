import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserObject } from '../../../model/user';
import artists from "../../constants/Artiste";
import React from "react";

function ArtistItem({ name, image, selected, toggleSelected }) {
  return (
  
      <div className="p-5 justify-center flex ">
        <div className="text-center justify-center items-center">
        <img
          src={image}
          alt={name}
          className={`rounded-full w-[8rem] h-[8rem] object-cover cursor-pointer  ${
            selected ? "border-[#53c7d6] border-4" : ""
          }`}
          onClick={toggleSelected}
        />
      <p className="text-[#104b53] font-bold mt-5">{name}</p>
        </div>
      </div>
  );
}
 


  
function FavArtiste({ user }: { user: UserObject }) {
  const [selectedArtists, setSelectedArtists] = useState([]);

  const toggleSelected = (name: string) => {
    if (selectedArtists.includes(name)) {
      setSelectedArtists(selectedArtists.filter((artist) => artist !== name));
    } else {
      setSelectedArtists([...selectedArtists, name]);
    }
  };

  const selectedCount = selectedArtists.length;
  const isButtonDisabled = selectedCount < 3;
  return (
    <>
      <div className="relative">
        <nav className="w-full flex flex-row py-6 justify-between items-center p-5 sticky">
          <img src={logo} alt="Uncover-Logo" className="h-[1.2rem] " />
          <div className="flex flex-row items-center cursor-pointer justify-evenly xl:gap-x-6">
            {isButtonDisabled ? (
              <button
                className="flex w-24 justify-center items-center bg-[#104B53] text-xs p-[0.5rem] rounded-full xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2"
                disabled={isButtonDisabled}
              >
                Continue
              </button>
            ) : (
              <Link
              to={{ pathname: "/login", state: { user } }}
                className="flex w-24 justify-center items-center bg-[#104B53] text-xs p-[0.5rem] rounded-full xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2"
              >
                Continue
              </Link>
            )}
          </div>
        </nav>
      </div>
      <section className="flex text-center">
        <div className="p-5 w-full space-y-5">
          <h2 className="text-[#104b53] font-semibold text-lg xl:text-2xl">
            Choose your Favorite Artiste
          </h2>
          <p className="text-[#104b53]">Selected: {selectedCount}</p>
          <p className="text-[#104b53] text-sm">
            Choose your favorite original artist, and we'll recommend covers
            related to your selection. <br />
            <span className="font-semibold text-xs">
              Click the continue button when you’re done with your selection.
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-evenly">
          {artists.map((artist, index) => (
            <div key={index} className="w-[12rem] mb-4">
              <ArtistItem
                name={artist.name}
                image={artist.image}
                selected={selectedArtists.includes(artist.name)}
                toggleSelected={() => toggleSelected(artist.name)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FavArtiste;
