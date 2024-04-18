
"use client"
import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Reviews from "@/Components/Reviews";
import Services from "@/Components/Services";
import Slider from "@/Components/Slider";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <>

      <Hero />
      <About />
      <Services />
      <Reviews />
      <Slider />
      <Footer />

    </>
  );
}
