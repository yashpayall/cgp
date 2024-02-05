import React from "react";

const Debugging = () => {
  return (
    <div className="debugging_bg_img bg-cover bg-no-repeat w-full  py-10 z-10 ">
      <div className=" max-w-[1200px] mx-auto px-4 py-6">
        <h2 className="text-[30px] md:text-[40px] xl:text-[50px] font-bebas uppercase text-white text-center pt-10 ">
          Deep Dive Debugging
        </h2>
        <p className="text-[15px] xl:text-[20px] font-tomorrow-neue text-white text-center py-2">
          Want to perform smart debugging? Try our transaction tracing tools for
          simulated transactions.
        </p>
        <div className="flex justify-center md:justify-between items-center flex-wrap py-8">
          <div className="w-full flex flex-col items-center md:items-start md:w-[48%] mb-9">
            <p className="text-[12px] md:text-[15px] xl:text-[20px] text-center md:text-start text-white font-tomorrow-neue font-light w-full md:max-w-[453px] leading-[25px] md:leading-[30px]">
              Dive deep into every transaction. With our enhanced tracing tools,
              simulated transaction support ensures that you catch issues before
              they hit the chain.
            </p>
            <button className="btn text-[14px]   mt-5  font-tomorrow-neue rounded-[45px] text-black font-semibold  py-2 px-7 hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] hover:text-white overflow-hidden  transition-all duration-500">
              Start Debugging Now
            </button>
          </div>
          <div className="w-full md:w-[48%] mb-9 flex justify-center">
            <img
              className="md:w-[534px] md:h-[302px] w-[287px] h-[162px]"
              src="/images/debugging-img-1.png"
              alt="debugging"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debugging;
