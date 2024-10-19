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
      className="h-screen flex flex-col justify-center min-w-0 ml-10"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <p className="text-[6vw] font-bold leading-none tracking-tighter">
        Hi. I&apos;m Michael Sin,
      </p>
      <FlipWords
        className="text-[4vw] font-semibold text-[#0077b6] leading-none tracking-widest text-left -ml-1"
        words={flipperWords}
      />
    </motion.div>
  );
};

export default Intro;
