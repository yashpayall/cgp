import React from "react";
import SocialMedia from "./SocialMedia";
import LaunchButton from "./LaunchButton";
import HeaderLinkWrapper from "./HeaderLinkWrapper";
import { CancelIcon } from "../icons/Icons";

const Sidebar = () => {
  const sidebarHandler = () => {
    document.body.classList.toggle("show-sidebar");
  };
  return (
    <div className="sidebar">
      <div className="w-full py-16 h-full relative">
        <div
          onClick={sidebarHandler}
          className="absolute cursor-pointer top-[16px] right-[16px]"
        >
          <CancelIcon />
        </div>

        <div className="flex sm:hidden items-center space-x-6 justify-center ">
          <SocialMedia />
        </div>

        <div className="mt-6 flex sm:hidden justify-center">
          <LaunchButton />
        </div>

        <div className="mt-6 ml-8 flex-col space-y-6 flex justify-center">
          <HeaderLinkWrapper />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
