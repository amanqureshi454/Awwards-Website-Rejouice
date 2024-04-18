"use client";
import React from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";

const Slider = () => {
  const imageUrls = [
    "/imgs/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.avif",
    "/imgs/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+(39).avif",
    "/imgs/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.avif",
    "/imgs/reel-poster-new.webp",
    "/imgs/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+(38).avif",
  ];
  return (
    <div className="slider relative lg:pt-16 pt-4 pb-16 bg-[#FAF8F3] w-full h-auto">
      <h1 className="block lg:px-16 px-2 text-black text-[7vw] font-[rejoice-heading]">
        Get in touch
      </h1>

      <div className="marquee-container">
        <Marquee className="cursor-pointer">
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              width={250}
              height={250}
              src={imageUrl}
              alt={`Image ${index}`}
              className="marquee-image w-full h-full"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
