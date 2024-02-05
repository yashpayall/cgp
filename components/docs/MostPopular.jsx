import React from "react";
import MostPopularCard from "./MostPopularCard";
import { mostPopularCardData } from "../common/Helper";

const MostPopular = () => {
  return (
    <section className="sm:bg-[url('/images/most-popular-tablet-img.png')] bg-[url('/images/most-popular-mobile-img.png')] md:bg-[url('/images/most-popular-desktop-img.png')] pb-[47px] sm:pb-[56px] lg:pb-0 lg:h-[584px]  bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1200px] pt-[42px] sm:pt-[55px] h-full w-full mx-auto px-4 xl:px-0">
        <h2 className="text-[40px] text-center font-normal font-bebas leading-normal text-white">
          Most popular
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-9 lg:mt-[67px] lg:grid-cols-3 gap-6">
          {mostPopularCardData.map((item, index) => (
            <MostPopularCard items={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
