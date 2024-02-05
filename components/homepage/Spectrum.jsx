import React from "react";
import {
  EthereumLogo,
  BinessLogo,
  ArbitrumLogo,
  PaiLogo,
  OptimismLogo,
  CeloLogo,
} from "../icons/Icons";
const Spectrum = () => {
  return (
    <section className="infrastructure-bg">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4">
        <h2 className=" mt-[29px] sm:mt-[53px] md:mt-[45px] text-[40px] font-normal text-white font-bebas mb-[33px] sm:mb-[15px] md:mb-[21px] ">
          Broad Spectrum Support
        </h2>{" "}
        <p className="text-white font-tomorrow-neue font-light leading-[25px] sm:leading-normal  sm:font-normal text-xs sm:text-[15px] md:text-[15px] mb-[46px]">
          We're committed to supporting a wide range of chains, ensuring your
          operations stay flexible and powerful no matter where you're
          transacting.
        </p>
        <div className="flex flex-wrap justify-between w-full">
          <div className=" sm:w-[48%] w-full ">
            <p className="text-white text-xl  font-bold font-tomorrow-neue mb-9">
              Supported chains
            </p>
            <div className="flex items-center justify-center space-x-[25px] sm:my-0 my-[44px]">
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] bg-[#647EEB] hover:shadow-[0_0_10px#647eeb,0_0_40px_#2196f3,0_0_20px#647eeb] overflow-hidden relative transition-all duration-500 neonbtn">
                <span className="absolute block"></span>
                <EthereumLogo />
              </button>
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] bg-[#F0B90B] hover:shadow-[0_0_10px#F0B90B,0_0_40px_#F0B90B,0_0_20px#647eeb] overflow-hidden relative transition-all duration-500">
                <span className="absolute block"></span>
                <BinessLogo />
              </button>
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] bg-white hover:shadow-[0_0_10px#FFF,0_0_40px_#FFF,0_0_20px#FFF] overflow-hidden relative transition-all duration-500">
                <span className="absolute block"></span>
                <ArbitrumLogo />
              </button>
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] hover:shadow-[0_0_10px#0051FF,0_0_40px_#FFF,0_0_20px#0051FF] overflow-hidden relative transition-all duration-500">
                <span className="absolute block"></span>
                <PaiLogo />{" "}
              </button>
            </div>
          </div>
          <div className=" sm:w-[48%] w-full flex- flex-col items-center">
            <p className="md:text-white text-[#EBE066] text-xl  font-bold font-tomorrow-neue mb-9">
              Upcoming chains
            </p>
            <div className="flex items-center justify-center space-x-[25px] sm:my-0 my-[44px]">
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] hover:shadow-[0_0_10px#939393,0_0_40px_#FFF,0_0_20px#939393] overflow-hidden relative transition-all duration-500">
                <span className="absolute block"></span>
                <OptimismLogo />
              </button>
              <button className="w-[48.396px] h-[48.396px] flex items-center justify-center rounded-[45px] hover:shadow-[0_0_10px#939393,0_0_40px_#FFF,0_0_20px#939393] overflow-hidden relative transition-all duration-500">
                <span className="absolute block"></span>
                <CeloLogo />
              </button>
            </div>
          </div>
        </div>
        <button className="gradient-bg-btn w-[296px] h-[46px] rounded-[45px] text-black font-Montserrat-neus font-semibold text-sm sm:mt-[73px] mb-[35px] sm:mb-[63px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500">
          See Full List of Supported Chains
        </button>
      </div>
    </section>
  );
};

export default Spectrum;
