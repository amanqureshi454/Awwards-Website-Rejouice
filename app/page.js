
"use client"
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
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
