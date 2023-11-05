"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import aboutImg from "../app/Assets/eric-nopanen-unsplash.jpg";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";


  

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative">
        <HorizontalScrollCarousel />
    </div>
  );
}

export default About;
