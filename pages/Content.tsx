import React from "react";

export default function Content() {
  return (
    <div className="bg-[#6050DC] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[.9] mt-10 font-bold tracking-tighter">
        Connect with me.
      </h1>
      <p className="mb-2 text-white">Copyright © Michael Sin</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex text-[1.5vw] font-semibold flex-col gap-4 text-white">
        <a
          href="https://github.com/michaelwcsin"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2"
        >
          <img width="32px" height="32px" src="iconGithub.svg" />
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/mwsin/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2"
        >
          <img width="32px" height="32px" src="iconLinkedin.svg" />
          <p>LinkedIn</p>
        </a>
        <a href="mailto:michael.wc.sin@gmail.com" className="flex gap-2">
          <img width="32px" height="32px" src="iconMail.svg" />
          <p>Mail</p>
        </a>
      </div>
    </div>
  );
};
