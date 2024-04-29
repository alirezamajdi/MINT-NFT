import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "../../public/static/css/icons.css";
import "./globals.css";
import Layout from "@/components/layout/index";

export const metadata: Metadata = {
  description: "A platform for convenient house rental and contract",
  applicationName: "Apollon",
  other: {
    ["og:description"]: "A platform for convenient house rental and contract",
    ["Content-Type"]: "text/html; charset=utf-8",
    ["Content-Language"]: "en",
    ["og:title"]: "Apollon",
    ["og:site_name"]: "Apollon",
    ["og:url"]: "https://apollon.uk.com/",
    ["og:image"]: "https://apollon.uk.com/img/logo.svg",
    ["og:locale"]: "en_GB",
    ["og:image:width"]: "400",
    ["og:image:height"]: "400",
    ["theme-color"]: "#006FFD",
    ["msapplication-navbutton-color"]: "#006FFD",
    ["msapplication-TileColor"]: "#006FFD",
    ["apple-mobile-web-app-status-bar-style"]: "#006FFD",
    ["apple-itunes-app"]: "app-id=1672251268",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClientLayout>
          <Layout>{children}</Layout>
        </ClientLayout>
      </body>
      <GoogleTagManager gtmId="GTM-5SMKPXQG" />
    </html>
  );
}
