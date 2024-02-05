import React from "react";

const BuildWebCard = ({ items }) => {
  return (
    <div className="max-w-[348px]  mx-auto pt-[26px] pb-[23px] px-[11px] w-full bg-black rounded-[16px] border border-[#313131] ">
      <div className="flex gap-[14px]">
        <span>{items.svg}</span>
        <h3
          style={{ maxWidth: items.titleWidth }}
          className={`text-[18px] sm:text-[20px]  text-white font-tomorrow-neue font-bold leading-6`}
        >
          {items.title}
        </h3>
      </div>
      <p
        style={{ maxWidth: items.descWidth }}
        className={`text-white pt-6  w-full text-[12px] sm:text-[14px] font-normal font-tomorrow-neue leading-5`}
      >
        {items.desc}
      </p>
    </div>
  );
};

export default BuildWebCard;
