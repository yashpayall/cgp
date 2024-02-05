import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="Pricing-bg">
        {" "}
        <div className="h-screen max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4 xl:px-0">
          <h1 className="font-bebas font-normal text-[45px] md:text-[65px] leading-[1] text-white uppercase">
            Pricing that Works for Everyone
          </h1>

          <p className="font-tomorrow-neue text-[15px] md:text-[17px] xl:text-[20px] font-normal text-white mt-[27px] w-[288px] md:w-[629px] lg:w-[945px]">
            A reliable Web3 infrastructure is a must for DEXs, wallets, NFT
            marketplaces, DeFis, bots, etc. GetBlock provides flexible pricing
            options for blockchain projects of all sizes.
          </p>

          <button className="gradient-bg-btn rounded-[45px] w-[186px] h-[46px] text-black font-tomorrow-neue text-sm font-semibold mt-8 sm:mt-[72px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden transition-all duration-500">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Pricing;
