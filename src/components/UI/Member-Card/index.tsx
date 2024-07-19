"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./index.css";
import { useWindowSize } from "usehooks-ts";

interface Props extends Member {
  index?: number;
  className?: string;
}

const MemberCard: React.FC<Props> = ({
  className,
  first_name,
  last_name,
  email,
  index,
  avatar,
}) => {
  const { width } = useWindowSize();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const generateSize = (): { h: string; w: string } => {
    if (index == 0 || index == 4) {
      return { h: "292px", w: "213px" };
    } else if (index == 1 || index == 3) {
      return { h: "336px", w: "245px" };
    } else return { h: "410px", w: "299px" };
  };

  const isDesktop = width > 1279;

  return (
    <div>
      {show && (
        <div
          className={clsx("card", className)}
          style={{
            // backgroundImage:
            //   scale == 1 ? bgImage1 : scale == 2 ? bgImage2 : bgImage3,
            height: isDesktop ? generateSize().h : "400px",
            // width: generateSize().w,
            width: isDesktop ? generateSize().w : "100%",
            backgroundImage: `url(${avatar})`,
          }}
        >
          <div className="card-detail text-center p-2 font-Poppins">
            <span className=" block text-[19px]">
              {first_name + " " + last_name}
            </span>
            <span className="text-[9px] bg-white rounded-[4px] text-primary px-[5px] py-[3px] font-semibold">
              {email}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
