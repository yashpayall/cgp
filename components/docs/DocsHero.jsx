import React from "react";

const DocsHero = () => {
  return (
    <section className="h-[594px] bg-[url('/images/docs-hero-bg-img-mobile.png')] sm:bg-[url('/images/docs-hero-bg-img-tablet.png')] md:bg-[url('/images/docs-hero-bg-img-desktop.png')] bg-cover bg-center bg-no-repeat xl:h-screen">
      <div className=" max-w-[1200px] h-full w-full mx-auto flex flex-col justify-center items-center text-center px-4 xl:px-0">
        <h1 className="font-bebas font-normal text-[45px]  md:text-[65px] leading-[1] xl:text-[80px] text-white uppercase  ">
          The <span className="text-[#36BEFF]">web3</span> developer hub
        </h1>

        <p className="font-tomorrow-neue text-[15px] md:text-[17px] xl:text-[20px] font-normal text-white mt-[27px]">
          View API References, guides, and tutorials for Ethereum, Polygon,
          Optimism, Arbitrum, Solana and Astar.
        </p>
        <button className="bg-[#36BEFF] hover:bg-black rounded-[45px] w-[186px] h-[46px] text-black hover:text-white font-tomorrow-neue text-sm font-semibold mt-8 sm:mt-[72px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden transition-all duration-500">
          View docs
        </button>
      </div>
    </section>
  );
};

export default DocsHero;
