import React from "react";
import HomeHeader from "@/Components/HomeHeader";
import Image from "next/image";
import heroImg from "../public/Assets/Images/vidar-nordli-mathisen-unsplash.jpg"
import BackgroundCircles from "./BackgroundCircles";


type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">  
        <Image
      alt="Uncover Hero Image"
      src={heroImg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover'
      }}
      />
      {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
     <HomeHeader/>
     <BackgroundCircles/>
     <div className="flex flex-col absolute text-center justify-between h-[400px] w-[200px]  xl:h-[700px] xl:w-[440px] uppercase">
     <span className="ramblerSemibold text-[#FAD9B8] xl text-[30px] xl:text-[62px] flex items-center ">Where Covers</span>
     <span className="ramblerSemibold text-[#FAD9B8]  text-[30px] xl:text-[62px] flex items-center ">Become Discoveries</span>
     </div>

     <div className="uppercase text-xs xl:text-sm text-[#FAD9B8] absolute xl:p-5 bottom-0 left-0 m-2 cursor-pointer"><p>Become an Uncover Artiste</p></div>
     <div className="uppercase text-xs xl:text-sm text-[#FAD9B8] absolute flex flex-row bottom-0 right-0 xl:mr-5 cursor-pointer">
        <p className="m-2  xl:p-5">Tiktok</p>
        <p className="m-2  xl:p-5">Twitter(x)</p>
        <p className="m-2  xl:p-5">Instagram</p>
        </div>
    </div> 
  );
}
