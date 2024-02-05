import React from "react";

const Collaboration = () => {
  return (
    <>
      <section className="Collaboration-bg -mt-14">
        <div className=" max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4 pt-10 pb-0 md:py-10">
          <h2 className=" mt-[29px] sm:mt-[53px] xl:text-[50px] leading-normal  md:mt-[45px] text-[40px] font-normal text-white font-bebas mb-[33px] sm:mb-[15px] md:mb-[21px]">
            In Collaboration with the Best
          </h2>{" "}
          <p className="text-white font-tomorrow-neue font-normal text-xs xl:text-[20px] sm:text-[15px] md:text-[15px] sm:mb-[46px]">
            Our major partner <span className="font-bold">- bloXroute</span>
          </p>
          <div className="w-full flex flex-wrap justify-between mt-[45px] ">
            <div className="w-full md:w-[48%] flex md:items-start items-center justify-center flex-col md:text-start">
              <p className="text-white font-tomorrow-neue font-light text-xs sm:text-[15px] xl:text-[20px] md:text-[15px] mb-[33px] ] md:mb-[46px] leading-[25px] sm:leading-[30px] w-full md:max-w-[453px]">
                Our major partner Together with{" "}
                <span className="font-bold">bloXroute</span>, we're pioneering
                the next generation of blockchain solutions. Our combined
                expertise means unmatched quality and reliability for our users.
              </p>
              <button className="md:mb-[88px] mb-[35px] w-[287px] md:w-[317px] h-[46px] rounded-[45px] border border-white text-sm font-tomorrow-neue font-semibold leading-normal hover:bg-white hover:text-black  cursor-pointer text-white hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500">
                Learn More About Our Partnership
              </button>
            </div>
            <div className="flex justify-center w-full md:w-[48%] md:mb-0 mb-[33px]">
              <img
                className="md:w-[229px] h-[132px] md:h-[186px] w-[163px] "
                src="/images\Collaboration-2.png"
                alt="Collaboration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaboration;
