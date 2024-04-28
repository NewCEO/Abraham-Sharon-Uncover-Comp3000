import React from 'react';
import { useSelector } from "react-redux";
import logo from "../assets/LOGO.png";
import discoverImg from "../assets/discoverImg.jpg";
import heroImg from "../assets/HeroImg.jpg";
// import artistBio1 from "../assets/ArtistBio1.png";
import userImg from "../assets/UserImg.png";
// import pauseCard from "../assets/pauseCard.png";
// import { FaPause, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserObject } from '../../model/user';

type LandingProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Landing:React.FC<LandingProps> = ({ isLoggedIn }) => {
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );

  return (
    <>
      <section className="h-screen bg-black flex flex-col mb-5">
        <nav className="flex flex-row  h-32 justify-between items-center pt-3 pb-3">
          <div className="flex flex-row justify-start ml-4">
            <img src={logo} alt="logo" className="w-1/2 md:w-2/4 " />
          </div>
          <div className="flex flex-row justify-between mr-4">
            <button className="uppercase  w-28 text-xs  md:px-6 md:py-3 h-1/2 shadow-md font-corsicaBold rounded-full text-[#FAD9B8] hover:bg-[#FAD9B8] hover:text-[#104b53] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              {user ? (
                <Link to="/music-home">Listen</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </button>
          </div>
        </nav>
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${heroImg})` }}
          ></div>
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Spinning circles */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="xl:w-[400px] xl:h-[400px] border-[1px] border-[#104b53] rounded-full animate-spin absolute animation-duration-100 border-b-0"></div>
            <div className="xl:w-[300px] xl:h-[300px] border-[1px] border-[#104b53] rounded-full animate-spin absolute animation-duration-100 border-b-0"></div>
            <div className="xl:w-[200px] xl:h-[200px] border-[1px] border-[#104b53] rounded-full animate-spin absolute animation-duration-100 border-b-0"></div>
            <div className="xl:w-[100px] xl:h-[100px] border-[1px] border-[#104b53] rounded-full animate-spin absolute animation-duration-100 border-b-0"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl xl:text-[62px] md:text-6xl mb-4 text-center text-[#FAD9B8] uppercase">
                Where Covers
              </h1>
              <h1 className="text-3xl xl:text-[62px] md:text-6xl font-bold mb-4 text-center text-[#FAD9B8] uppercase">
                Become Discoveries
              </h1>
            </div>
            <button className="uppercase  text-xs md:px-6 md:py-3 shadow-md rounded-full text-[#FAD9B8] hover:bg-[#FAD9B8] hover:text-[#104b53] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Link to="/signUp">Create an Uncover account</Link>
            </button>
          </div>

          <div className="relative bottom-0 left-0 w-full  text-white py-4 px-4 z-10">
            <div className="container mx-auto flex justify-between items-center">
              {/* Left element */}
              <div>
                <a
                  href="/creator-landing"
                  className="text-[#FAD9B8] font-semibold hover:underline text-sm "
                >
                  Become an Uncover Creator
                </a>
              </div>
              {/* Right element (navigation menu) */}
              <div>
                <a
                  href="#"
                  className="text-[#FAD9B8] hover:underline font-semibold mr-4 text-sm"
                >
                  Tiktok
                </a>
                <a
                  href="#"
                  className="text-[#FAD9B8] hover:underline font-semibold mr-4 text-sm"
                >
                  X
                </a>
                <a
                  href="#"
                  className="text-[#FAD9B8] hover:underline font-semibold text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="relative h-screen mt-[110px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${discoverImg})` }}
        ></div>

        {/* lightoverlay */}
        <div className="absolute inset-0 bg-[#FAD9B8] opacity-60"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-[80px] font-bold mb-12 text-black">
              Discover Why
            </h1>
            <h1 className="text-4xl md:text-[80px] font-bold text-[#104b53]">
              We are different
            </h1>
          </div>
        </div>

        {/* Text groups at corners */}
        <div className="absolute inset-0 z-10">
          {/* Top left */}
          <div className="absolute top-0 left-0 p-4 text-[#104b53] xl:w-1/3 w-1/2">
            <h2 className="xl:text-2xl font-bold text-sm">
              Dedication to cover artiste
            </h2>
            <p className="xl:flex hidden">
              {" "}
              "Uncover" champions emerging cover artists, offering a dedicated
              platform to showcase their talent without the pressure of creating
              original music. Stand out and be heard in a space that values your
              passion.
            </p>
          </div>

          {/* Top right */}
          <div className="absolute top-0 right-0 p-4 text-[#104b53] xl:w-1/3 w-1/2">
            <h2 className="xl:text-2xl font-bold text-sm">
              {" "}
              Variety in Cover Content
            </h2>
            <p className="xl:flex hidden">
              "Uncover" redefines music listening with a diverse array of cover
              content. From acoustic renditions to DJ remixes, discover fresh
              and creative takes on your favorite songs, making every listening
              experience unique.
            </p>
          </div>

          {/* Bottom left */}
          <div className="absolute bottom-0 left-0 p-4 text-[#104b53] xl:w-1/3 w-1/2">
            <h2 className="xl:text-2xl font-bold text-sm">
              User-Centric Community
            </h2>
            <p className="xl:flex hidden">
              "Uncover" isn't just a music service; it's a thriving community.
              Engage with creators, recommend songs, and shape the future of
              covers through polls. Connect with like-minded music lovers and be
              part of something greater.
            </p>
          </div>

          {/* Bottom right */}
          <div className="absolute bottom-0 right-0 p-4 text-[#104b53] xl:w-1/3 w-1/2">
            <h2 className="xl:text-2xl font-bold text-sm">
              Innovative Ad-Driven Model
            </h2>
            <p className="xl:flex hidden">
              {" "}
              "Uncover" pioneers a unique ad-driven model, giving you extended
              listening time in exchange for watching ads. Enjoy free music
              while supporting emerging cover artists and keeping the platform
              inclusive and sustainable.
            </p>
          </div>
        </div>
      </section>
      <section className="relative ">
        <div className=" flex flex-col  bg-[#FAD9B8] w-full h-full justify-between items-center text-center xl:flex-row xl:px-10">
          <h1 className="text-[30px] mt-5 mb-5">
            <span className="text-black">New Artiste,</span> Old Classics
          </h1>
          <button className="text-[#FAD9B8] rounded-full font-semibold w-2/3 xl:w-1/3 xl:mt-5 mb-5">
            <Link to="/signUp">Create an Uncover Account</Link>
          </button>
        </div>
      </section>
      <section className="container mx-auto py-8 px-10 lg:py-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-[#104b53]">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial Box 1 */}
          <div className="bg-gray-200 rounded-lg relative overflow-hidden h-[520px]">
            <img
              src={userImg}
              alt="Testimonial 1"
              className="w-24 h-24 object-cover rounded-full absolute bottom-[120px] right-10 transform"
            />
            <div className="h-2/3 flex flex-col justify-center bg-[#D99B5E] p-10 text-center">
              <h3 className="text-md italic font-semibold mb-2 text-center text-[#104b53]">
                “Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.“
              </h3>
            </div>
            <div className="h-1/3 bg-[#FAD9B8] flex flex-col justify-end p-5 pb-10 pr-14">
              <p className="text-[#104b53] font-bold text-right">
                Itadori Yuji
              </p>
              <p className="text-[#104b53] text-right">
                Person Of Interest - Jujutsu Academy
              </p>
            </div>
          </div>

          {/* Testimonial Box 2 */}
          <div className="bg-gray-200 rounded-lg relative overflow-hidden h-[520px]">
            <img
              src={userImg}
              alt="Testimonial 1"
              className="w-24 h-24 object-cover rounded-full absolute bottom-[120px] right-10 transform"
            />
            <div className="h-2/3 flex flex-col justify-center bg-[#D99B5E] p-10 text-center">
              <h3 className="text-md italic font-semibold mb-2 text-center text-[#104b53]">
                “Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.“
              </h3>
            </div>
            <div className="h-1/3 bg-[#FAD9B8] flex flex-col justify-end p-5 pb-10 pr-14">
              <p className="text-[#104b53] font-bold text-right">
                Itadori Yuji
              </p>
              <p className="text-[#104b53] text-right">
                Person Of Interest - Jujutsu Academy
              </p>
            </div>
          </div>

          {/* Testimonial Box 3 */}
          <div className="bg-gray-200 rounded-lg relative overflow-hidden h-[520px]">
            <img
              src={userImg}
              alt="Testimonial 1"
              className="w-24 h-24 object-cover rounded-full absolute bottom-[120px] right-10 transform"
            />
            <div className="h-2/3 flex flex-col justify-center bg-[#D99B5E] p-10 text-center">
              <h3 className="text-md italic font-semibold mb-2 text-center text-[#104b53]">
                “Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.“
              </h3>
            </div>
            <div className="h-1/3 bg-[#FAD9B8] flex flex-col justify-end p-5 pb-10 pr-14">
              <p className="text-[#104b53] font-bold text-right">
                Itadori Yuji
              </p>
              <p className="text-[#104b53] text-right">
                Person Of Interest - Jujutsu Academy
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#104b53]">
        <div className="relative bottom-0 left-0 w-full  text-white py-4 px-4 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left element */}
            <div>
              <a
                href="/creator-landing"
                className="text-[#FAD9B8] font-semibold hover:underline text-sm "
              >
                Uncover 2024
              </a>
            </div>
            {/* Right element (navigation menu) */}
            <div>
              <a
                href="#"
                className="text-[#FAD9B8] hover:underline font-semibold mr-4 text-sm"
              >
                Allrights reserved
              </a>
              <a
                href="#"
                className="text-[#FAD9B8] hover:underline font-semibold mr-4 text-sm"
              >
                Created by Abraham Sharon
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;

// const song = {
//   id: 1,
//   title: "Glorious by Paravi - (Macklemore)",
//   artist: "Paravi",
//   artistImage: { artistBio1 },
//   audio: "https://example.com/audio.mp3",
// };
