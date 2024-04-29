import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <ul className="flex m-10 gap-10">
        <Link prefetch={false} passHref={false} href={"/"}>
          <li>Home</li>
        </Link>
        <Link prefetch={false} passHref={false} href={"/clientside"}>
          <li>Client Side</li>
        </Link>
        <Link prefetch={false} passHref={false} href={"/clientsidehoc"}>
          <li>client Side HOC</li>
        </Link>
        <Link prefetch={false} passHref={false} href={"/serverside"}>
          <li>Sever Side</li>
        </Link>
        <Link prefetch={false} passHref={false} href={"/middewareside"}>
          <li>Middeware side</li>
        </Link>
      </ul>
    </div>
  );
};

export default Index;
