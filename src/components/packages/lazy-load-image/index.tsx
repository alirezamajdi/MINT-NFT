import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import clsx from "clsx";

interface props {
  src: string | undefined;
  alt: string | undefined;
  className?: string;
  effect?: "black-and-white" | "blur" | "opacity";
  placeholderSrc?: string;
  wrapperClassName?: string;
  id?: string;
}
const Image = ({
  src,
  alt,
  className,
  effect = "black-and-white",
  placeholderSrc,
  wrapperClassName,
  id,
}: props) => {
  const defaultImg = "/public/static/images/defualt-property.svg";
  return (
    <LazyLoadImage
      src={src || defaultImg}
      effect={effect}
      alt={alt}
      id={id}
      className={clsx(className, !Boolean(src) && "object-cover")}
      placeholderSrc={placeholderSrc || defaultImg}
      wrapperClassName={clsx(
        wrapperClassName || className,
        "bg-cover bg-center"
      )}
    />
  );
};

export default Image;
