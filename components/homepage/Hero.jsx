import React from "react";

const Hero = () => {
  return (
    <>
      <section className="infrastructure-bg">
        <div className="h-[594px] sm:h-screen max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4 xl:px-0">
          <h1 className="font-bebas font-normal text-[45px]  md:text-[65px] leading-[1] xl:text-[80px] text-white uppercase  ">
            Next Level DeFi Infrastructure
          </h1>

          <p className="font-tomorrow-neue text-[15px] md:text-[17px] xl:text-[20px] font-normal text-white mt-[27px]">
            The only one enhanced RPC Provider for L2s, including Ethereum and
            BSC.
          </p>
          <button className="gradient-bg-btn rounded-[45px] w-[186px] h-[46px] text-black font-tomorrow-neue text-sm font-semibold mt-8 sm:mt-[72px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden transition-all duration-500">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
