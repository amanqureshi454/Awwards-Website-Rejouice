"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";

const Hero = () => {
  const textAnimation = useRef([]);
  const heroSectionRef = useRef(null);
  const [mouseInsideHero, setMouseInsideHero] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      if (mouseInsideHero) {
        gsap.to(".cursor", {
          x: e.clientX - 75,
          y: e.clientY - 75,
          duration: 0.6,
          ease: "power.in",
        });
      } else {
        gsap.fromTo(
          ".cursor",
          {
            opacity: 1,
            scale: 1,
            ease: "ease",
          },
          {
            opacity: 0,
            scale: 0,
            duration: 1,
          }
        );
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseInsideHero]);

  const text = ["r", "e", "j", "o", "u", "i", "c", "e"];

  useEffect(() => {
    // Animation function
    const animateText = () => {
      gsap.fromTo(
        textAnimation.current,
        {
          y: 350,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power.in",
        }
      );
    };

    animateText();
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={heroSectionRef}
        className="hero relative cursor-none overflow-y-hidden"
      >
        <div className="cursor h-32 w-32 text-black text-lg flex justify-center items-center font-[rejoice-heading] rounded-full bg-orange-600 absolute top-0 left-0 cursor-none">
          View Reel
        </div>
        <video loop muted autoPlay className="w-full h-screen object-cover">
          <source src="/imgs/home-video.mp4" type="video/mp4" />
        </video>
        <div className="main-text flex justify-start items-start absolute bottom-1 left-1 z-[2]">
          <div
            id="main-text_inner"
            className="relative overflow-hidden h-[33vw]"
          >
            {text.map((word, i) => (
              <h6
                ref={(el) => (textAnimation.current[i] = el)}
                key={i}
                className="inline-block text-white text-[28vw] font-[rejoice-heading]"
              >
                {word}
              </h6>
            ))}
          </div>
        </div>
        <div className="mobile_scroll absolute right-5 bottom-5 text-xl text-white capitalize">
          ⬇ scroll
        </div>
      </div>
    </>
  );
};
export default Hero;
