import IconLogo from "@/components/icons/logo";
import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="m-10 h-full flex justify-end">
        <IconLogo />
      </div>
    </div>
  );
};

export default Header;
