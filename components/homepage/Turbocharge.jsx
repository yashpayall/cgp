import React from "react";

const Turbocharge = () => {
  return (
    <>
      <section className="Turbocharge-bg -mb-12">
        <div className=" max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4 xl:px-0 md:pb-[124px]">
          <h2 className=" mt-[29px] sm:mt-[53px]  md:mt-[45px] sm:text-[40px] text-[30px] xl:text-[50px] font-normal text-white font-bebas mb-[33px] sm:mb-[15px] md:mb-[21px]">
            Turbocharge Your MEV Strategy
          </h2>
          <p className="text-white font-tomorrow-neue font-normal xl:text-[20px] text-xs sm:text-[15px] md:text-[15px] mb-[46px] sm:leading-normal leading-[25px]">
            Running your MEV bot? Try our custom estimation API.
          </p>
          <div className="w-fit hidden md:block">
            <img
              className="w-[288px] h-[163px] sm:w-[534px] sm:h-[302px] mb-[65px]"
              src="/images\Turbocharge-2.png"
              alt="Turbocharge"
            />{" "}
            <p className="text-white font-tomorrow-neue font-light leading-[25px] sm:leading-[30px] text-[15px] xl:text-[20px] md:text-[15px] mb-[46px]">
              Boost your MEV bot's efficiency with precise and quick <br />{" "}
              estimates, allowing for sharper strategies and better results.s
            </p>
            <button className="w-[240px] h-[46px] rounded-[45px] border border-white  text-sm font-tomorrow-neue font-semibold leading-normal text-white m hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500">
              Explore Estimation API
            </button>
          </div>
          <div className="w-fit flex flex-col items-center md:hidden">
            <p className="text-white font-tomorrow-neue font-light leading-[25px] sm:leading-[30px] text-[12px] sm:text-[15px] mb-5 sm:mb-[37px] mt-[19px]">
              Boost your MEV bot's efficiency with precise and quick <br />{" "}
              estimates, allowing for sharper strategies and better results.
            </p>{" "}
            <button className="w-[240px] h-[46px] mb-8 sm:mb-[47px] rounded-[45px] border border-white  text-sm font-tomorrow-neue font-semibold leading-normal text-white m hover:bg-white hover:text-black cursor-pointer hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500">
              Explore Estimation API
            </button>
            <img
              className="w-[288px] h-[163px] sm:w-[534px] sm:h-[302px] mb-[98px]"
              src="/images\Turbocharge-2.png"
              alt="Turbocharge"
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Turbocharge;
