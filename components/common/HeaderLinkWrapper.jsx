import Link from "next/link";
import React from "react";

const HeaderLinkWrapper = () => {
  return (
    <>
      <li className="text-[15px] list-none text-white hover:text-[yellow]  transition duration-300 ease-in-out font-tomorrow-neue  font-bold">
        <Link href="">RPC API</Link>
      </li>
      <li className="text-[15px] list-none text-white hover:text-[yellow]  transition duration-300 ease-in-out font-tomorrow-neue">
        <Link href="">Pricing</Link>
      </li>
      <li className="text-[15px] list-none text-white hover:text-[yellow]  transition duration-300 ease-in-out font-tomorrow-neue">
        <Link href="">About</Link>
      </li>
      <li className="text-[15px] list-none text-white hover:text-[yellow]  transition duration-300 ease-in-out font-tomorrow-neue">
        <Link href="">Docs</Link>
      </li>
    </>
  );
};

export default HeaderLinkWrapper;
