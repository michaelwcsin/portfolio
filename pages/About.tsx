"use client";

import useMousePosition from "@/app/utils/useMousePosition";
import { motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  // Mask behavior for mouse cursor on expand
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 600 : 40;

  return (
    <div className="h-[100vh] m-0">
      <motion.div
        className="text-[#eae0d5] md:pl-[5vw] w-full h-full flex items-center text-[4vw] md:text-[2.5vw] leading-[25px] md:leading-[50px] absolute"
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
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
      >
        <p
          className="w-full md:w-[70vw] p-[40px] font-bold"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="font-black text-[#0096c7] text-[8vw]">About me</span>
          <br></br>I am a recent B.Sc graduate with a major in{" "}
          <span className="text-[#0096c7]">Computer Science</span>. I view
          myself as a lifelong learner, and believe that the tech industry
          provides the best environment to continually hone my skills.
        </p>
      </motion.div>

      <div className="text-[#264653] w-full h-full flex items-center md:pl-[5vw] text-[4vw] leading-[25px] md:text-[2.5vw] md:leading-[50px]">
        <p className="w-full md:w-[70vw] p-[40px] font-bold">
          <span className="font-black text-[#e56b6f] text-[8vw]">About me</span>
          <br></br>I am a recent B.Sc graduate with a major in{" "}
          <span className="text-[#e56b6f]">Computer Science</span>. I view
          myself as a lifelong learner, and believe that the tech industry
          provides the best environment to continually hone my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
