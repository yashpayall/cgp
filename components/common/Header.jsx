"use client";
import React from "react";
import Link from "next/link";
import HeaderLinkWrapper from "./HeaderLinkWrapper";
import SocialMedia from "./SocialMedia";
import LaunchButton from "./LaunchButton";
import Sidebar from "./Sidebar";
import { Hamburger } from "../icons/Icons";

const Header = () => {
  const sidebarHandler = () => {
    document.body.classList.toggle("show-sidebar");
  };
  return (
    <div className="relative">
      <Sidebar />
      <div className=" w-full z-20 absolute">
        <nav className="flex justify-between items-center max-w-[1200px] px-4  py-3 mx-auto ">
          <div className="flex items-center w-full justify-between">
            <div className="lg:w-[30%]">
              <Link href="/">
                <img
                  src="/images/header-logo.png"
                  alt="logo-img"
                  className="w-[105px]"
                />
              </Link>
            </div>
            <div className="w-[40%] lg:flex justify-center items-center hidden ">
              <ul className="flex items-center space-x-12 relative text-white ">
                <HeaderLinkWrapper />
              </ul>
            </div>
            <div className="lg:w-[30%] sm:flex items-center space-x-6 hidden ">
              <LaunchButton />
              <div className="flex items-center space-x-6 ">
                <SocialMedia />
              </div>
            </div>
            <div
              onClick={sidebarHandler}
              className="hammbuger-menu block lg:hidden"
            >
              <span>
                <Hamburger />
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
