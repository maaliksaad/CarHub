"use client";
import React from "react";
import CustomButton from "../CustomButton";

const HeroButton = () => {
  const handleScroll = () => {};
  return (
    <CustomButton
      text="Explore Cars"
      className=" bg-primary-blue text-white rounded-full mt-10"
      handleClick={handleScroll}
    />
  );
};

export default HeroButton;
