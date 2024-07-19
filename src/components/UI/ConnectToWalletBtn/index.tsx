"use client";
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import { useAccount } from "wagmi";

const Index = () => {
  const w3m = useWeb3Modal();
  const { address, isConnecting, isDisconnected, connector, chainId } =
    useAccount();

  return (
    <>
      {Boolean(address) ? (
        <button className="auth-btn" onClick={() => connector?.disconnect()}>
          <span className="pr-2">DisConnect</span>
          <Image
            src={"/static/images/solar_wallet-outline.svg"}
            alt="solar_wallet"
            width={24}
            height={24}
          />
        </button>
      ) : (
        <button onClick={() => w3m.open()} className="auth-btn">
          <span className="pr-2">Connect Wallet</span>
          <Image
            src={"/static/images/solar_wallet-outline.svg"}
            alt="solar_wallet"
            width={24}
            height={24}
          />
        </button>
      )}
    </>
  );
};

export default Index;
