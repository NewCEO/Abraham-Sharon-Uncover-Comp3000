import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="flex flex-col p-5 w-[27rem] ">
        <div className="flex flex-row items-center">
          <span className="text-[#104b53]"><FaArrowLeft /></span>
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search favorite artiste, song, genre...."
              className="border border-[#104b53] rounded-full py-2 px-4 pr-10 ml-12 outline-none w-[20rem] bg-[#fff] text-black  xl:block"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-6">
              <FaSearch className="text-[#104b53]" />
            </div>
          </div>
        </div>
        <span className="mt-5"><hr/></span>
        <span className="text-left text-[#104b53] mt-5 font-medium"> Search Results</span>
      </div>
    </>
  );
}

export default SearchBar;
