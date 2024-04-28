


// function Components() {
//   return (
//     <>
//      <section className="relative h-screen">
//         <img
//           src={heroImg}
//           alt="Uncover Hero Image"
//           className="absolute h-full object-cover w-full "
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <nav className="absolute w-full flex py-6 justify-between items-center p-5">
//           <img src={logo} alt="Uncover-Logo" className="h-[1.2rem] " />
//           <div className="flex flex-row items-center cursor-pointer justify-evenly xl:gap-x-6">
//             <button className="flex w-24 justify-center items-center text-xs p-[0.5rem] rounded-full xl:w-40 xl:text-lg text-[#FAD9B8] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
//               <Link to="SignUp">Sign Up</Link>
//             </button>
//             <button className="flex w-24 justify-center items-center  text-xs p-[0.5rem] rounded-full  xl:w-40 xl:text-lg  bg-[#104B53] text-[#FAD9B8]">
//               {isLoggedIn ? (
//                 <Link to="/music-home">Listen</Link>
//               ) : (
//                 <Link to="/login">Login</Link>
//               )}
//             </button>
//           </div>
//         </nav>

//         <div className="flex justify-center items-center pt-[24rem] z-0">
//           <div
//             className="absolute rounded-full h-[100px] w-[100px]  mt-35 animate-spin"
//             style={{
//               border: "2px solid #104b53",
//               borderBottom: "none",
//               animationDuration: "7s",
//             }}
//           />

//           <div
//             className="absolute rounded-full h-[400px] w-[400px] xl:h-[300px] xl:w-[300px] mt-35 animate-spin"
//             style={{
//               border: "1px solid #104b53",
//               borderBottom: "none",
//               animationDuration: "10s",
//             }}
//           />

//           <div
//             className="absolute rounded-full h-[200px] w-[200px] xl:h-[400px] xl:w-[400px] mt-35 animate-spin"
//             style={{
//               border: "1px solid #104b53",
//               borderBottom: "none",
//               animationDuration: "10s",
//             }}
//           />

//           <div
//             className="absolute rounded-full h-[300px] w-[300px] xl:h-[500px] xl:w-[500px] mt-35 animate-spin"
//             style={{
//               border: "1px solid #104b53",
//               borderBottom: "none",
//               animationDuration: "10s",
//             }}
//           />
//         </div>
//         <div className="absolute flex flex-col text-center items-center justify-between top-[12rem] ml-[7rem] h-[400px] w-[200px]  xl:ml-[33rem] xl:h-[500px] xl:w-[440px] uppercase  xl:top-[50%] xl:transform xl:-translate-y-1/2">
//           <span className="ramblerSemibold text-[#FAD9B8] text-[30px] xl:text-[62px] flex items-center">
//             Where Covers
//           </span>
//           <span className="ramblerSemibold text-[#FAD9B8] text-[30px] xl:text-[62px] flex items-center">
//             Become Discoveries
//           </span>
//         </div>
//         <div className="uppercase text-xs xl:text-sm text-[#FAD9B8] absolute xl:p-5 bottom-0 left-0 m-2 cursor-pointer">
//           <a href="/creator-landing">
//             <p>Become an Uncover Artiste</p>
//           </a>
//         </div>
//         <div className="uppercase text-xs xl:text-sm text-[#FAD9B8] absolute flex flex-row bottom-0 right-0 xl:mr-5 cursor-pointer">
//           <p className="m-2  xl:p-5">Tiktok</p>
//           <p className="m-2  xl:p-5">Twitter(x)</p>
//           <p className="m-2  xl:p-5">Instagram</p>
//         </div>
//       </section>

//       <section className="relative h-screen flex justify-center items-center">
//         <img
//           src={discoverImg}
//           alt="Uncover Hero Image"
//           className="absolute h-full object-cover w-full "
//         />
//         <div className="hidden xl:flex">
//           <div className="absolute inset-0 xl:bg-[#FAD9B8] opacity-40"></div>
//           <div className="absolute xl:p-5 top-0 left-0 m-2">
//             <h1 className="xl:text-lg text-sm font-CorsicaRamblerLX font-bold text-[#104b53] uppercase">
//               Dedication to cover artiste
//             </h1>
//             <p className="xl:w-[26rem]  text-xs xl:text-sm text-black">
//               "Uncover" champions emerging cover artists, offering a dedicated
//               platform to showcase their talent without the pressure of creating
//               original music. Stand out and be heard in a space that values your
//               passion.
//             </p>
//           </div>
//           <div className=" text-xs xl:text-sm text-[#FAD9B8] absolute xl:p-5 bottom-0 left-0 m-2 cursor-pointer">
//             <h1 className="uppercase text-lg font-CorsicaRamblerLX font-bold text-[#104b53]">
//               Variety in Cover Content
//             </h1>
//             <p className="w-[26rem] xl:text-sm text-xs text-black">
//               "Uncover" redefines music listening with a diverse array of cover
//               content. From acoustic renditions to DJ remixes, discover fresh
//               and creative takes on your favorite songs, making every listening
//               experience unique.
//             </p>
//           </div>
//           <div className=" absolute xl:p-5 top-0 right-0 m-2 cursor-pointer">
//             <h1 className="uppercase xl:text-lg text-xs  font-CorsicaRamblerLX font-bold text-[#104b53]">
//               Innovative Ad-Driven Model
//             </h1>
//             <p className="xl:w-[26rem] w-[10rem] xl:text-sm text-xs text-black">
//               "Uncover" pioneers a unique ad-driven model, giving you extended
//               listening time in exchange for watching ads. Enjoy free music
//               while supporting emerging cover artists and keeping the platform
//               inclusive and sustainable.
//             </p>
//           </div>
//           <div className="text-xs xl:text-sm text-[#FAD9B8] absolute xl:p-5 bottom-0 right-0 m-2 cursor-pointer">
//             <h1 className="uppercase text-lg font-CorsicaRamblerLX font-bold text-[#104b53]">
//               User-Centric Community
//             </h1>
//             <p className="w-[26rem] text-sm text-black">
//               "Uncover" isn't just a music service; it's a thriving community.
//               Engage with creators, recommend songs, and shape the future of
//               covers through polls. Connect with like-minded music lovers and be
//               part of something greater.
//             </p>
//           </div>
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//             <span className="font-CorsicaRamblerLX font-bold text-[#FAD9B8] text-[30px] xl:text-[5rem]">
//               <span className="text-black">Discover Why</span> <br />{" "}
//               <span className="text-[#104b53]">We are different.</span>
//             </span>
//           </div>
//         </div>
       

//         <section className="flex justify-center items-center h-screen xl:hidden">
//           <div className="absolute inset-0 flex flex-col text-center p-3">
//             <span className="font-CorsicaRamblerLX font-bold text-[#FAD9B8] text-[1.5rem] xl:text-[5rem]">
//               <span className="text-black">Discover Why</span>{" "}
//               <br className="hidden" />
//               <span className="text-[#104b53]">We are different.</span>
//             </span>
//           </div>
//           <div className="flex  flex-col text-center absolute p-10 top-10 justify-center">
//             <h1 className="text-sm font-CorsicaRamblerLX font-bold text-[#104b53] uppercase">
//               Variety in Cover Content
//             </h1>
//             <p className="text-xs xl:text-sm text-black mt-3 font-CorsicaRamblerLX font-bold">
//               "Uncover" redefines music listening with a diverse array of cover
//               content. From acoustic renditions to DJ remixes, discover fresh
//               and creative takes on your favorite songs, making every listening
//               experience unique.
//             </p>
//           </div>

//           <div className="flex  flex-col text-center absolute p-10 top-40 justify-center mt-10">
//             <h1 className="text-sm font-CorsicaRamblerLX font-bold text-[#104b53] uppercase">
//               Dedication to cover artiste
//             </h1>
//             <p className="text-xs xl:text-sm text-black mt-3 font-CorsicaRamblerLX font-bold text-center">
//               "Uncover" champions emerging cover artists, offering a dedicated
//               platform to showcase their talent without the pressure of creating
//               original music. Stand out and be heard in a space that values your
//               passion.
//             </p>
//           </div>

//           <div className="flex  flex-col absolute p-10 top-2000 justify-center mt-10">
//             <h1 className="text-sm font-CorsicaRamblerLX text-center font-bold text-[#104b53] uppercase">
//               User-Centric Community
//             </h1>
//             <p className="text-xs xl:text-sm text-black mt-3 font-CorsicaRamblerLX font-bold text-center">
//               "Uncover" isn't just a music service; it's a thriving community.
//               Engage with creators, recommend songs, and shape the future of
//               covers through polls. Connect with like-minded music lovers and be
//               part of something greater.
//             </p>
//           </div>
//         </section>
//       </section>

//       <section className="relative h-screen bg-[#E5E5E5]">
//         <div className="bg-[#FAD9B8] px-5 absolute h-[12rem] w-full flex flex-row justify-between items-center xl:px-36">
//           <h2 className="font-CorsicaRamblerLX font-bold xl:text-3xl uppercase text-black">
//             New Artists,
//             <span className="text-[#104b53]">Old Favorites</span>
//           </h2>
//           <button className="font-CorsicaRamblerLX font-bold flex justify-center items-center w-72 xl:w-[18rem] text-sm xl:text-lg p-[0.3rem] rounded-full bg-[#104B53] text-[#FAD9B8]">
//             Create an Uncover account
//           </button>
//         </div>

//         <div className="absolute inset-0 flex flex-col top-60 items-center text-center">
//           <h2 className="text-[#104b53] font-CorsicaRamblerLX font-bold text-[1.5rem] mb-10">
//             Meet Our Top Artistes
//           </h2>
//           <div className="bg-[#104b53] w-full xl:w-[65rem] h-2/3 xl:rounded-[3rem] relative">
//             <div className="xl:top-[-5rem] pl-10  absolute ">
//               <img
//                 src={artistBio1}
//                 alt="Paravi - Uncover Image"
//                 className="h-[20rem] xl:h-full m-auto mt-[30px] "
//               />
//             </div>
//             <h2 className="hidden justify-center items-center text-center inset-0 xl:flex absolute font-CorsicaRamblerLX font-bold">
//               Playing -
//             </h2>
//             <div className="right-0 top-10 absolute  pr-5 flex flex-col items-center ">
//               <div className="relative mb-4 lg:mb-0">
//                 <img
//                   src={pauseCard}
//                   className="text-sm xl:h-[6rem] p-2 h-[5rem]"
//                   alt="Pause Card"
//                 />
//                 <span className="absolute inset-0 flex items-center justify-center">
//                   <FaPause className="text-2xl" />
//                 </span>
//               </div>
//               <div className="relative mb-4 lg:mb-0">
//                 <img
//                   src={pauseCard}
//                   className="text-sm xl:h-[6rem] p-2 h-[5rem]"
//                   alt="Pause Card"
//                 />
//                 <span className="absolute inset-0 flex items-center justify-center">
//                   <FaPlay className="" />
//                 </span>
//               </div>
//               <div className="relative">
//                 <img
//                   src={pauseCard}
//                   className="text-sm xl:h-[6rem] h-[5rem] p-2"
//                   alt="Pause Card"
//                 />
//                 <span className="absolute inset-0 flex items-center justify-center">
//                   <FaPlay className="cursor-pointer" />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-[#fad9b8] flex flex-row justify-between p-3">
//         <p className="text-[#104b53]">All rights reserved</p>
//         <p className="text-[#104b53]">Uncover 2023</p>
//         <p className="text-[#104b53]">Abraham Sharon</p>
//       </footer>
    
//     </>
//   )
// }

// export default Components