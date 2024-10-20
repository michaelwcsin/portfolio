import React from "react";
import Content from "./Content";

const Footer = () => {
  return (
    <div
      className="relative h-[90vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Has to be fixed instead of sticky to work on both Chrome and FF */}
      <div className="fixed bottom-0 h-[90vh] w-full">
        <Content />
      </div>
    </div>
  );
};

export default Footer;
