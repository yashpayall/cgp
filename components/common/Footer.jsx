import React from "react";
import {
  LogoIcon,
  TelegramIcon,
  TwitterIcon,
  DiscordIcon2,
} from "../icons/Icons";
import Link from "next/link";
import NewsSubscribe from "./NewsSubscribe";
const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col justify-between  px-4 sm:pt-[60px] py-[40px]">
          <div className="flex flex-col w-full  ">
            <div className="w-full flex sm:flex-row flex-col sm:gap-4  justify-between ">
              <div className="flex flex-col w-fit sm:my-0 my-4 ">
                <span>
                  <LogoIcon />
                </span>
                <p className="text-white font-tomorrow-neue xl:text-sm   text-[9px] font-light leading-[15px] my-[21px]">
                  Powering the future of blockchain technology with <br />
                  enhanced RPC solutions. Join us on the journey.
                </p>
                <div className="flex items-center space-x-[18.57px]">
                  <Link
                    href="https://web.telegram.org/a/"
                    target="_blank"
                    className="hover:scale-150 transition-all ease-in-out duration-400"
                  >
                    <TelegramIcon />
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="hover:scale-150 transition-all ease-in-out duration-400"
                  >
                    {" "}
                    <TwitterIcon />
                  </Link>
                  <Link
                    href="https://discord.com/"
                    className="hover:scale-150 transition-all ease-in-out duration-400"
                  >
                    <DiscordIcon2 />
                  </Link>
                </div>{" "}
                <p className="mt-[15px] text-[#939393] font-tomorrow-neue text-[10px] leading-[20px] font-light block md:hidden">
                  Copyright © 2022 Transpose, Inc. All rights reserved.
                </p>
              </div>
              <div className="flex flex-col w-fit sm:my-0 my-4">
                <p className="text-[15px] font-semibold  leading-[25px] text-white font-tomorrow-neue">
                  Links
                </p>
                <div className="flex flex-col">
                  <Link
                    href=""
                    className="text-[15px] font-light underline  leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out w-fit"
                  >
                    About Us
                  </Link>
                  <Link
                    href=""
                    className="text-[15px] font-light underline  leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out w-fit"
                  >
                    FAQ
                  </Link>
                  <Link
                    href=""
                    className="text-[15px] font-light underline  leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out w-fit"
                  >
                    Pricing
                  </Link>

                  <Link
                    href=""
                    className="text-[15px] font-light underline  leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out w-fit"
                  >
                    Terms of Service{" "}
                  </Link>
                  <Link
                    href=""
                    className="text-[15px] font-light underline  leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out w-fit"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex flex-col w-fit sm:my-0 my-4">
                <p className="text-[15px] font-semibold  leading-[25px] text-white font-tomorrow-neue">
                  Stay Updated with Our Latest News!
                </p>
                <NewsSubscribe />
              </div>
              <div className="hidden md:flex flex-col w-fit sm:my-0 my-4">
                <p className="text-[15px] font-semibold leading-[25px] text-white font-tomorrow-neue">
                  Contact us:
                </p>
                <Link
                  href="mailto:cgpmanager@gmail.com"
                  className="text-[15px] font-light leading-[25px] text-white font-tomorrow-neue hover:text-[yellow] transition-all ease-in-out"
                >
                  cgpmanager@gmail.com
                </Link>
                <Link
                  href="tel:+1 204 123 12 12"
                  className="text-[15px] font-light leading-[25px] text-white font-tomorrow-neue hover:text-[yellow] transition-all ease-in-out"
                >
                  +1 204 123 12 12
                </Link>
              </div>
              <div className="flex flex-col sm:gap-4 w-fit md:hidden ">
                <div className="flex flex-col w-fit sm:my-0 my-4">
                  <p className="text-[15px] font-semibold  leading-[25px] text-white font-tomorrow-neue">
                    Stay Updated with Our Latest News!s
                  </p>
                  <form action="" className="flex flex-col">
                    <input
                      className="w-[219px] h-[36px] border mt-[11px] border-[#545454] rounded-[5px] text-sm font-tomorrow-neue font-light text-white px-[15px] py-[15px] bg-transparent outline-none cursor-pointer"
                      type="email"
                      name=""
                      id=""
                      placeholder="Your Email"
                      required
                    />
                    <button className="bg-white  ease-in-out hover:bg-none w-[137px] h-[36px] rounded-[45px] text-sm font-semibold font-tomorrow-neuetext-black mt-[26px] hover:bg-transparent hover:text-white border-white hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="flex flex-col w-fit sm:my-0 my-4">
                  <p className="text-[15px] font-semibold leading-[25px] text-white font-tomorrow-neue">
                    Contact us:
                  </p>
                  <Link
                    href="mailto:cgpmanager@gmail.com"
                    className="text-[15px] font-light leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out "
                  >
                    cgpmanager@gmail.com
                  </Link>
                  <Link
                    href="tel:+1 204 123 12 12"
                    className="text-[15px] font-light leading-[25px] text-white font-tomorrow-neue mb-1 hover:text-[yellow] transition-all ease-in-out"
                  >
                    +1 204 123 12 12
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          <p className="text-[#939393] text-center text-[10px] font-tomorrow-neue font-light  leading-[25px] mt-[15px] md:block hidden">
            Copyright © 2023 Transpose, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
