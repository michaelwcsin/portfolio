import IconLogo from "@/components/icons/logo";
import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full">
      <div className="bg-red-400 m-10 flex justify-between">
        <IconLogo />
        <div className="flex text-center items-center p-10">something</div>
      </div>
    </div>
  );
};

export default Header;
