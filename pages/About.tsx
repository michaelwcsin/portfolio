"use client";

import useMousePosition from "@/app/utils/useMousePosition";
import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  // Mask behavior for mouse cursor on expand
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <div className="h-[100vh] m-0">
      <motion.div
        className="text-[#F7F7F7] pl-[5vw] w-full h-full flex items-center text-[2.5vw] leading-[50px] absolute"
        style={
          {
            maskImage: "url('/maskCursor.svg')",
            maskRepeat: "no-repeat",
            background: "black", // Show mask-cursor.svg
            maskSize: "40px",
            WebkitMaskImage: "url('/maskCursor.svg')", // For better browser support
            WebkitMaskSize: "40px", // For better browser support
          } as React.CSSProperties
        }
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="w-[60vw] p-[40px] font-bold"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="font-black text-[#f72585] text-[8vw]">
            About me<span className="text-slate-500">.</span>
          </span>
          <br></br>Outside of researching and learning more about technology, I
          like to dive into numerous hobbies. Some of the few I&apos;ve thrown
          myself into over the last few years is{" "}
          <span className="text-[#ec4e39]">golfing, hiking, and fishing.</span>
        </p>
      </motion.div>

      <div className="text-black w-full h-full flex items-center pl-[5vw] text-[2.5vw] leading-[50px]">
        <p className="w-[60vw] p-[40px] font-bold">
          <span className="font-black text-slate-500 text-[8vw]">
            About me<span className="text-[#f72585]">.</span>
          </span>
          <br></br>I am a recent B.Sc graduate with a major in{" "}
          <span className="text-[#ec4e39]">Computer Science.</span> I view
          myself a lifelong learner, and believe the tech industry provides the
          best environment to continually hone my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
