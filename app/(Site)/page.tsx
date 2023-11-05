import React from "react";
import About from "@/Components/About";
import Hero from "@/Components/Hero";
import CTA from "@/Components/CTA";

export default function Home() {
  return (
    <div>
      <section className="snap-center h-screen flex flex-col items-center justify-center snap-y snap-mandatory overflow-scroll z-0">
        <Hero />
      </section>
      <section className="xl:overflow-hidden  flex flex-col ">
        <About />
      </section>
      <section className="h-screen overflow-hidden flex flex-col">
        <CTA />
      </section>
    </div>
  );
}
