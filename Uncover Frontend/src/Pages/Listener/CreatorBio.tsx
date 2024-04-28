import MusicHeader from "../../components/MusicHeader";
import Sidebar from "../../components/Sidebar";
import ArtisteBioMain from "../../components/ArtisteBioMain";
import React from "react";

function CreatorBio() {
  return (
    <>
      <section className="flex flex-col">
        <div className="w-full xl:mb-20">
          <MusicHeader
            onLogout={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="flex flex-row ">
          <Sidebar />
          <div className="mt-[89px] xl:mt-2 -z-10">
          <ArtisteBioMain/>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatorBio;
