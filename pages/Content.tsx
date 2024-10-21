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
      <h1 className="text-[7vw] font-black tracking-tight leading-none">
        Connect with me.
      </h1>
      <p className="text-sm text-white leading-none">Copyright © Michael Sin</p>
    </div>
  );
};
