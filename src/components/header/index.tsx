import React from "react";
import Link from "next/link";
import Logo from "@/components/UI/Logo";
import ConnectToWalletBtn from "../UI/ConnectToWalletBtn";

const Header: React.FC = () => {
  const links = [
    { title: "home", href: "/" },
    { title: "about", href: "/about" },
    { title: "contact us", href: "contact-us" },
  ];

  return (
    <header className=" h-[100px] xl:h-[127px] flex items-center border-b border-[#1A1E28]">
      <div className="container flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-9">
            {links.map((item, index) => (
              <li key={index} className="font-Techno text-[20px]">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ConnectToWalletBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
