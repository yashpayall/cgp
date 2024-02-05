import React from "react";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "../icons/Icons";
import Link from "next/link";
const SocialMedia = () => {
  return (
    <>
      <span className="cursor-pointer group w-[30px] h-[30px] flex items-center justify-center">
        <Link href="https://web.telegram.org/a/" target="_blank">
          <TelegramIcon />
        </Link>
      </span>
      <span className="cursor-pointer group w-[30px] h-[30px] flex items-center justify-center">
        <Link href="https://twitter.com/" target="_blank">
          <TwitterIcon />
        </Link>
      </span>
      <span className="cursor-pointer group w-[30px] h-[30px] flex items-center justify-center">
        <Link href="https://discord.com/" target="_blank">
          <DiscordIcon />
        </Link>
      </span>
    </>
  );
};

export default SocialMedia;
