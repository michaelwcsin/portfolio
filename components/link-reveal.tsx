import { motion } from "framer-motion";
import React from "react";

export const RevealLinks = () => {
  return (
    <section className="flex flex-col gap-10 px-0 pt-[50vh] md:pt-96 text-white">
      <FlipLink
        href="mailto:michael.wc.sin@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        Mail
      </FlipLink>
      <FlipLink
        href="https://github.com/michaelwcsin"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </FlipLink>
      <FlipLink
        href="https://www.linkedin.com/in/mwsin/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Linkedin
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({
  children,
  href,
  rel,
  target,
}: {
  children: string;
  href: string;
  rel: string;
  target: string;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      rel={rel}
      target={target}
      className="relative max-w-[55vw] md:max-w-[40vw] lg:max-w-[35vw] overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
