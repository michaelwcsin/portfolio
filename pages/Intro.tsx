"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { flipperWords } from "@/data/data-storage";
import { motion } from "framer-motion";
import React from "react";

const Intro = () => {
  // Define animation properties
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      className="h-screen flex flex-col justify-center min-w-0 ml-[7vw]"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[8vw] md:text-[6vw] font-extrabold leading-none tracking-tighter">
        Hi. I&apos;m Michael Sin,
      </p>
      <FlipWords
        className="text-[6vw] md:text-[4vw] font-bold text-[#0077b6] leading-none tracking-widest text-left -ml-2 md:-ml-1"
        words={flipperWords}
      />
    </motion.div>
  );
};

export default Intro;
