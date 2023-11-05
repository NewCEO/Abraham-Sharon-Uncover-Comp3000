"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import heroImg from "../app/Assets/vidar-nordli-mathisen-unsplash.jpg"

type Props = {};

function HorizontalScrollCarousel({}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isLargeScreen = window.innerWidth > 768;
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);
  return (
    <section ref={targetRef} className="relative  bg-[#104b53] h-[fit] xl:h-[130vh] xl:p-10">
            {/* <Image
      alt="Uncover Hero Image"
      src={heroImg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover'
      }}
      /> */}
      <div className="flex flex-row  justify-center uppercase p-5 ">
        <span className="text-[#FAD9B8] font-h1-weight   text-[30px] text-center xl:text-[60px] ">
          Discover why we are different
        </span>
      </div>
      <div className={`sticky top-0 flex  ${isLargeScreen ? '' : 'no-scroll-animation'} mt-20`}>
        <motion.div style={{ x  }} className="flex gap-4 flex-col xl:flex-row p-5">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] xl:h-[450px] xl:w-[500px] overflow-hidden bg-[#Ffffff]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
      <div className="absolute inset-0 bg-[#000000] opacity-60 backdrop-blur-3xl"></div>
      <div className="absolute inset-0 z-10 grid justify-center xl:p-5 text-center p-5 ">
        <span className="font-h1-weight text-[26px] xl:text-[30px] text-[#FFFFFF] ">
          {card.title}
        </span>
        <p className="text-[16px] ramblerSemibold text-[#FFFFFF] top-0">
          {card.content}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: string;
  title: string;
  content: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1931",
    title: "Dedication To Cover Artiste",
    content:
      "Uncover champions emerging cover artists, offering a dedicated platform to showcase their talent without the pressure of creating\
    original music. Stand out and be heard in a space that values your passion.",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1563357989-f6cdbbae76cb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974",
    title: "Variety in Cover Content",
    content:
      "Uncover redefines music listening with a diverse array of cover content. \
      From acoustic renditions to DJ remixes, discover fresh and creative takes on your favorite songs, making every listening\
      experience unique.",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1536173257297-533e34457207?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2091",
    title: " Innovative Ad-Driven Model",
    content: " Uncover champions emerging cover artists, offering a dedicated\
    platform to showcase their talent without the pressure of creating\
    original music. Stand out and be heard in a space that values your\
    passion.",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
    title: " User-Centric Community",
    content: " Uncover redefines music listening with a diverse array of cover\
    content. From acoustic renditions to DJ remixes, discover fresh and\
    creative takes on your favorite songs, making every listening\
    experience unique.",
    id: 4,
  },
];
