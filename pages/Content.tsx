import { RevealLinks } from "@/components/link-reveal";
import React from "react";

export default function Content() {
  return (
    <div className="bg-[#6050DC] py-8 px-12 h-full w-full flex flex-col justify-between">
      <RevealLinks />
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[8vw] leading-[.9] mt-10 font-black tracking-tight">
        Connect with me.
      </h1>
      <p className="text-sm md:mb-2 text-white">Copyright © Michael Sin</p>
    </div>
  );
};
