import React from "react";
import LazyLoadImage from "@/components/packages/lazy-load-image";
import clsx from "clsx";
import style from "./Style.module.css";

export interface props {
  src: string | undefined;
  alt: string | undefined;
  className?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  placeholderSrc?: string;
  size?: "medium" | "small";
  label?: string;
  variant?: "primary" | "blue20";
  id?: string;
}

const Avatar = ({
  src,
  alt,
  className,
  wrapperClassName,
  containerClassName,
  size = "medium",
  placeholderSrc = "/img/default-profile-icon.jpg",
  label,
  variant,
  id,
}: props) => {
  return (
    <div className={clsx(containerClassName, style["container-avatar"])}>
      <LazyLoadImage
        src={src ?? "/img/default-profile-icon.jpg"}
        alt={alt}
        className={clsx(className, style["avatar"])}
        wrapperClassName={clsx(
          wrapperClassName,
          style["wrapper-avatar"],
          Boolean(label) && style["label--" + variant],
          style["size--" + size]
        )}
        placeholderSrc={placeholderSrc}
        id={id}
      />
      <div className="overflow-hidden">
        {Boolean(label) && (
          <p
            className={clsx(
              "absolute bottom-[1rem] w-full text-center text-[1rem]",
              "text-" + (variant === "primary" ? "white" : "primary")
            )}
          >
            {label}
          </p>
        )}
      </div>
    </div>
  );
};

export default Avatar;
