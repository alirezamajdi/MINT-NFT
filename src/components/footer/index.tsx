import React from "react";
import images from "@/constants/images";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray mt-[120px] min-h-[84px] flex items-center  py-4">
      <div className="container flex justify-between items-center flex-col-reverse md:flex-row ">
        <div>
          <p className="pt-5 md:pt-0">
            All right reserved for Gaply | © 2022 - 2024
          </p>
        </div>
        <div className=" flex items-center gap-7">
          <Link href={"/"} target="_blank">
            <img src={images.instagram} />
          </Link>
          <Link href={"/"} target="_blank">
            <img src={images.facebook} />
          </Link>
          <Link href={"/"} target="_blank">
            <img src={images.linkedin} />
          </Link>
          <Link href={"/"} target="_blank">
            <img src={images.twitter} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
