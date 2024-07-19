"use client";
import { ReactNode } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, arbitrum, xdc } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@/components/header";
import Footer from "@/components/footer";
import "../../public/static/fonts/techno/index.css";
import "./globals.css";

const queryClient = new QueryClient();

export default function ClientLayout({ children }: { children: ReactNode }) {
  const projectId = "3058290b18762c5dd4b40ed4d720c8b2";

  // 2. Create wagmiConfig
  const metadata = {
    name: "IPhone App",
    description: "AppKit Example",
    url: "https://web3modal.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const chains = [mainnet, polygon, arbitrum, xdc] as const;

  const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
  });

  // 3. Create modal
  createWeb3Modal({
    wagmiConfig: config,
    projectId,
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
