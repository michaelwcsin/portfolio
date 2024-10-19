import IconLogo from "@/components/icons/logo";
import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="m-10 h-full flex justify-between">
        <IconLogo />
        <div className="flex text-center items-center">something</div>
      </div>
    </div>
  );
};

export default Header;
