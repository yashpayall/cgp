import React from "react";
import BuildWebCard from "./BuildWebCard";
import { buildWebCardData } from "../common/Helper";

const BuildWeb = () => {
  return (
    <section
      className="lg:h-[340px] bg-cover bg-[url('/images/build-web-bg-mobile-img.png')] bg-no-repeat bg-center sm:bg-[url('/images/build-web-bg-tablet-img.png')]
      md:bg-[url('/images/build-web-bg-desktop-img.png')]"
    >
      <div className="max-w-[1200px] pt-[42px] sm:pb-[45px] lg:pb-0 pb-[48px] h-full w-full mx-auto px-4 xl:px-0">
        <h2 className="text-[40px] px-2 text-center leading-10 sm:leading-normal text-white font-normal font-bebas">
          Learn how to <span className="text-[#36BEFF]">build in web3</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[26px] sm:mt-[43px] gap-6 sm:gap-9">
          {buildWebCardData.map((item, index) => (
            <BuildWebCard key={index} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildWeb;
