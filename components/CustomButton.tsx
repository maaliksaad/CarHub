"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface Props {
  text: string;
  type?: string;
  className?: string;
  textClasses?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const CustomButton = ({
  text,
  type,
  className,
  textClasses,
  rightIcon,
  handleClick,
}: Props) => {
  return (
    <button
      disabled={false}
      className={`${className} custom-btn shadow-lg`}
      type={"button" || type}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textClasses}`}>{text}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className=" object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
