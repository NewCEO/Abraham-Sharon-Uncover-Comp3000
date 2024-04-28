import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/LOGO.png";
import creator1 from "../../assets/creator-1.jpg";
import React from "react";
import { UserObject } from "../../../model/user";

type CreatorLandingProps = {
  isLoggedIn: boolean;
};

const CreatorLanding: React.FC<CreatorLandingProps> = ({ isLoggedIn }) => {
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );

  return (
    <>
      <section className="relative h-screen bg-[#F4F4F4]">
        <nav className="absolute w-full flex py-6 justify-between items-center p-5">
          <a href="/"><img
                src={logo}
                alt="Uncover-Logo"
                className="h-[1.2rem] object-contain"
              /></a>
          <div className="flex flex-row items-center cursor-pointer justify-evenly xl:gap-x-6">
            <button className="font-corsica flex w-24 justify-center items-center  text-xs p-[0.5rem] rounded-full  xl:w-40 xl:text-lg  bg-[#104B53] text-[#FAD9B8]">
            
              {user ? (
          <Link to="/creator-home">Go to Dashboard</Link>
        ) : (
          <Link to="/creator-login">Login here</Link>
        )}
            </button>
          </div>
        </nav>

        <div className="flex justify-between">
          <div className="flex justify-start items-center h-screen p-[5rem]">
            <div className="rounded-full h-[20rem] w-[20rem] bg-gradient-to-tr from-white/20 to-[#5fbbc734] absolute"></div>
            <div className="flex flex-col gap-4 z-10 w-max">
              <span className="text-red-200 italic">
                Unleash your potential
              </span>
              <h1 className="text-[#104b53] xl:text-[3rem]">
                Uncover Your <br className="" /> Musical Potential
              </h1>
              <span className="text-[#104b53] font-semibold">
                Show your heart, Build a community
              </span>
              <button className="font-corsica flex justify-center items-center  text-xs p-[0.5rem] rounded-full  w-auto xl:text-lg  bg-[#104B53] text-[#FAD9B8]">
                <Link to="/creator-signUp">Become an Uncover Creator</Link>
              </button>
            </div>
          </div>
          <div className=" xl:flex items-center p-[5rem] hidden">
            
              <img
                src={creator1}
                alt=""
                className="w-[20rem] h-[20rem] rounded-full bg-[#104b53] object-cover"
              />
            </div>
          </div>

        <div className="flex justify-center items-center m-0">
          <div className="uppercase text-xs xl:text-sm  absolute flex flex-row bottom-0 xl:mr-5 cursor-pointer text-[#104b53]">
            <p className="m-2  xl:p-5">Tiktok</p>
            <p className="m-2  xl:p-5">Twitter(x)</p>
            <p className="m-2  xl:p-5">Instagram</p>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center p-5 flex flex-col gap-6">
          <h1 className="mb-5">What We offer</h1>
          <div className="flex justify-center">
            <div className="xl:w-5/6 bg-[#104b53] rounded-md ">
              <div className="h-auto grid grid-cols-1 xl:grid-cols-4 p-5 gap-x-3 ">
                <div className="flex flex-col text gap-3 py-8 w-[auto]">
                  <h2 className="text-xl text-left">Dedicated Platform </h2>
                  <p className="text text-left text-sm">
                    "Uncover" provides a dedicated platform for cover artists,
                    offering them a space to share their musical talent, grow
                    their audience, and connect with their fans.
                  </p>
                </div>
                <div className="flex flex-col text gap-3 py-8 w-[auto]">
                  <h2 className="text-xl text-left">Community Building </h2>
                  <p className="text text-left text-sm">
                    "Creators can build their own community and fan base by
                    engaging with like-minded music enthusiasts and receiving
                    support from their audience.
                  </p>
                </div>
                <div className="flex flex-col text gap-3 py-8 w-[auto]">
                  <h2 className="text-xl text-left">Curated Expression</h2>
                  <p className="text text-left text-sm">
                    "Uncover" encourages creators to express their unique style
                    and interpretations of songs, including acoustic renditions,
                    instrumental versions, DJ remixes, and more..
                  </p>
                </div>
                <div className="flex flex-col text gap-3  py-8 w-[auto]">
                  <h2 className="text-xl text-left">Recommendations</h2>
                  <p className="text text-left text-sm">
                    Creators can receive song recommendations from their fans,
                    allowing them to cater to their audience's preferences and
                    create content that resonates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative p-10 hidden xl:grid">
        <div className="text-center mt-10">
          <h1 className="mb-5">How it works</h1>
          <p className="text-center text-[#104b53] px-10">
            Welcome to "Uncover," where your musical journey begins. We've made
            it easy for you to share your passion for music and become a
            creator. Here's a step-by-step guide on how to get started:
          </p>
        </div>

        <div className="relative grid md:grid-cols-3  gap-8 mt-6 h-auto">
          <div className="flex outline outline-1 outline-[#104b53] xl:h-full rounded-lg">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              1
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Sign Up
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                Start by creating your creator profile. It's as simple as
                filling out a few details, including your name, stage name (if
                you have one), email, and a secure password.
              </span>
            </div>
          </div>
          <div className="flex outline  outline-1 outline-[#104b53] xl:h-full rounded-lg">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              2
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Set Up your Profile
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                Your creator profile is your canvas. Customize it with a profile
                picture, a captivating bio, and details about your musical
                style, influences, and preferences.
              </span>
            </div>
          </div>
          <div className="flex outline  outline-1 outline-[#104b53] xl:h-full rounded-lg">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              3
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Recommendations
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                Delve into cover song recommendations provided by your fans and
                the "Uncover" community. Get ready to infuse your unique style
                into these songs.
              </span>
            </div>
          </div>
          <div className="flex outline  outline-1 outline-[#104b53] xl:h-full rounded-lg">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              4
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Create and Upload
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                Record your covers with passion and creativity. Once you're
                satisfied with your performance, upload your content to your
                profile. Be sure to provide song details and any additional
                information that makes your cover special.
              </span>
            </div>
          </div>
          <div className="flex outline  outline-1 outline-[#104b53] xl:h-full rounded-lg col-start-2">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              5
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Engage with your fans
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                Connect with your audience through likes, comments, and
                interactions. Build a community around your music and receive
                feedback that fuels your creativity.
              </span>
            </div>
          </div>
          <div className="flex outline  outline-1 outline-[#104b53] xl:h-full rounded-lg col-start-3">
            <span className="absolute bg-[#104b53] text-[#fad9b8] rounded-tl-lg rounded-br-lg p-2 text-2xl">
              6
            </span>
            <div className="p-3 gap-6 flex flex-col">
              <h3 className="text-[#104b53] flex justify-center font-bold ">
                Get Discovered
              </h3>
              <span className="text-[#104b53] font-corsicaBook">
                As you share your covers and engage with fans, watch your
                audience grow. Your journey as a cover artist on "Uncover" opens
                doors to new opportunities and connections in the music world.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#FAD9B8] px-5  h-[12rem] w-full flex flex-row justify-between items-center mb-20 mt-20 xl:px-36">
          <h2 className="font-CorsicaRamblerLX font-bold xl:text-3xl uppercase text-black text-sm">
            Rising Stars,
            <span className="text-[#104b53]">Iconic Covers</span>
          </h2>
          <button className="font-bold font-corsicaBold flex justify-center items-center w-72 xl:w-[18rem] text-sm xl:text-lg p-[0.3rem] rounded-full bg-[#104B53] text-[#FAD9B8]">
            Become an Uncover Creator
          </button>
        </div>
      </section>
      <footer className="bg-[#104b53] flex flex-row justify-between p-3">
        <p className="text-[#FAD9B8]">All rights reserved</p>
        <p className="text-[#FAD9B8]">Uncover 2023</p>
        <p className="text-[#FAD9B8]">Abraham Sharon</p>
      </footer>
    </>
  );
}

export default CreatorLanding;
