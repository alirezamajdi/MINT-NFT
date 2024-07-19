"use client";
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";

const Index = () => {
  const { open, close } = useWeb3Modal();
  return (
    <button
      onClick={() => open()}
      className="flex items-center border border-[#747D90] rounded-[30px] py-[12px] px-[20px]"
    >
      <span className="pr-2">Connect Wallet</span>
      <Image
        src={"/static/images/solar_wallet-outline.svg"}
        alt="solar_wallet"
        width={24}
        height={24}
      />
    </button>
  );
};

export default Index;
