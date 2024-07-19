import React from "react";
import Link from "next/link";
import images from "@/constants/images";
import Image from "next/image";

const Index = () => {
  return (
    <Link href={"/"}>
      <Image src={images.logo} alt="logo" width={60} height={60} />
    </Link>
  );
};

export default Index;
