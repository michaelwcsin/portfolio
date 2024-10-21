import Projects from "@/pages/Projects";
import Image from "next/image";
import React from "react";

const MacFinder = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex h-[70vh] w-[70vw] rounded-2xl overflow-hidden border-[1px] border-gray-300 shadow-2xl">
        <div className="border-r-[1px] border-gray-300">
          <div className="flex w-[60%] md:w-full h-[6vh] items-center pl-[20px]">
            <Image
              src="finderControls.svg"
              width={50}
              height={50}
              alt="controls"
            />
          </div>
          <div className="pl-[20px] w-[15vw] h-full">
            <Projects />
          </div>
        </div>
        <div className="w-full">
          <div className="font-semibold flex w-full h-[6vh] items-center pl-[12px] bg-white border-b-[1px] border-gray-300">
            Projects Drive
          </div>
          <div className="h-full bg-white pl-[12px]">Info</div>
        </div>
      </div>
    </div>
  );
};

export default MacFinder;
