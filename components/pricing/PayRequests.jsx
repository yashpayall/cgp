import React from "react";

const PayRequests = () => {
  return (
    <>
      <section className="bg-black py-10">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center text-center px-4 xl:px-0">
          <div className="flex flex-wrap md:space-x-6 xl:justify-between justify-center items-center w-full ">
            <div className="mt-10 xl:w-[325px] sm:w-[325px] w-full border border-[#545454] bg-black rounded-[10px] relative flex flex-col justify-center items-center">
              <span className="bg-[#B7894D] w-[130px] h-[25px] text-[12px] font-normal font-tomorrow-neue text-black  flex justify-center items-center rounded-[45px] absolute -top-3">
                Shared Nodes
              </span>
              <p className="font-bebas text-[40px] text-white font-normal leading-normal mt-[30px]">
                PAY PER REQUESTS
              </p>
              <p className="text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                Requests never expire
              </p>
              <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[49px]">
                Starting at:
              </p>
              <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal mt-2">
                <span className="text-[#B7894D] text-[20px] font-bold">0$</span>
                / 40K requests day
              </p>
              <div>
                <input
                  type="range"
                  className="transparent h-[5px]  w-[244px] sm:w-[276px] cursor-pointer appearance-none rounded-lg border-transparent bg-[#B7894D] accent-[#B7894D] mt-[39px]"
                  id="customRange1"
                />
                <div className="flex items-center justify-between mt-[16px]">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px]">
                    Requests
                  </p>
                  <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal text-[15px]">
                    Requests never expire
                  </p>
                </div>
                <span className="border w-full inline-block border-[#545454] rounded-[45px] mt-[36px]"></span>
                <div className="flex flex-col items-start mt-2.5">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[24px]">
                    Plan uncludes:
                  </p>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Endpoints to 50+ chains
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Up to 99% uptime
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    60 requests/second
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Pay per requests you send
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Purchased requests never expire
                  </li>
                </div>
                <button className="bg-[linear-gradient(270deg,#855D22_0%,#E0CCB3_42.79%,#926532_76.97%,#94713D_97.29%)] w-[186px] h-[46px] flex justify-center text-black font-tomorrow-neue text-sm font-semibold leading-normal items-center rounded-[45px] mx-auto mt-[40px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500 ">
                  Get Started
                </button>
                <p className="text-[#A3A3A3] font-tomorrow-neue text-xs font-light underline leading-normal mb-[25px] mt-[20px] ">
                  More about the plan
                </p>
              </div>
            </div>
            <div className="mt-10 xl:w-[349px] sm:w-[325px] w-full border border-[#545454] bg-[#161616] rounded-[10px] relative flex flex-col justify-center items-center">
              <span className="bg-[#B4B3B3] w-[130px] h-[25px] text-[12px] font-normal font-tomorrow-neue text-black  flex justify-center items-center rounded-[45px] absolute -top-3">
                Shared Nodes
              </span>
              <p className="font-bebas text-[40px] text-white font-normal leading-normal mt-[30px]">
                UNLIMITED ACCESS
              </p>
              <p className="text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                Send as many requests as needed
              </p>
              <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[49px]">
                Starting at:
              </p>
              <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal mt-2">
                <span className="text-[#B4B3B3] text-[20px] font-bold">
                  $499
                </span>
                / 1 month
              </p>
              <div>
                <input
                  type="range"
                  className="transparent h-[5px]  w-[244px] sm:w-[276px] cursor-pointer appearance-none rounded-lg border-transparent bg-[#B4B3B3] accent-[#B4B3B3] mt-[39px]"
                  id="customRange1"
                />
                <div className="flex items-center justify-between mt-[16px]">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px]">
                    Period
                  </p>
                  <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal text-[15px]">
                    1 month
                  </p>
                </div>
                <span className="border w-full inline-block border-[#545454] rounded-[45px] mt-[36px]"></span>
                <div className="flex flex-col items-start mt-2.5">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[24px]">
                    Plan uncludes:
                  </p>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Endpoints to 50+ chains
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Up to 99% uptime
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    60 requests/second
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Monthly plan
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    No requests limit
                  </li>
                </div>
                <button className="bg-[linear-gradient(270deg,#A9A9A9_0%,#FEFDFD_42.79%,#B2B1B1_76.97%,#B7B7B7_97.29%)] w-[186px] h-[46px] flex justify-center text-black font-tomorrow-neue text-sm font-semibold leading-normal items-center rounded-[45px] mx-auto mt-[40px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500 ">
                  Get Started
                </button>
                <p className="text-[#A3A3A3] font-tomorrow-neue text-xs font-light underline leading-normal mb-[25px] mt-[20px] ">
                  More about the plan
                </p>
              </div>
            </div>
            <div className="mt-10 xl:w-[349px] sm:w-[325px] w-full border border-[#545454] bg-[#161616] rounded-[10px] relative flex flex-col justify-center items-center">
              <span className="bg-[#EBE066] w-[130px] h-[25px] text-[12px] font-normal font-tomorrow-neue text-black  flex justify-center items-center rounded-[45px] absolute -top-3">
                Shared Nodes
              </span>
              <p className="font-bebas text-[40px] text-white font-normal leading-normal mt-[30px]">
                PRIVATE NODES
              </p>
              <p className="text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                for dApps with high workload
              </p>
              <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[49px]">
                Starting at:
              </p>
              <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal mt-2">
                <span className="text-[#EBE066] text-[20px] font-bold">
                  $600
                </span>
                / node
              </p>
              <div>
                <input
                  type="range"
                  className="transparent h-[5px]  w-[244px] sm:w-[276px] cursor-pointer appearance-none rounded-lg border-transparent bg-[#EBE066] accent-[#EBE066] mt-[39px]"
                  id="customRange1"
                />
                <div className="flex items-center justify-between mt-[16px]">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px]">
                    Period
                  </p>
                  <p className="text-[#A3A3A3] font-tomorrow-neue font-light leading-normal text-[15px]">
                    1month, 1 node
                  </p>
                </div>
                <span className="border w-full inline-block border-[#545454] rounded-[45px] mt-[36px]"></span>
                <div className="flex flex-col items-start mt-2.5">
                  <p className=" text-white font-tomorrow-neuefont font-semibold leaading-[30px] text-[15px] mt-[24px]">
                    Plan uncludes:
                  </p>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Private server
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Up to 99,99% uptime
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    No rate limits
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Archive mode
                  </li>
                  <li className="list-disc text-white font-tomorrow-neue font-light leading-normal text-[15px] mt-2">
                    Custom settings
                  </li>
                </div>
                <button className="bg-[linear-gradient(270deg,#EDDC6B_0%,#FBFCAC_42.79%,_#D6AE45_76.97%,#F0E576_97.29%)] w-[186px] h-[46px] flex justify-center text-black font-tomorrow-neue text-sm font-semibold leading-normal items-center rounded-[45px] mx-auto mt-[40px] hover:shadow-[0_0_2px#939393,0_0_20px_#FFF,0_0_10px#939393] overflow-hidden  transition-all duration-500 ">
                  Get Started
                </button>
                <p className="text-[#A3A3A3] font-tomorrow-neue text-xs font-light underline leading-normal mb-[25px] mt-[20px] ">
                  More about the plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayRequests;
