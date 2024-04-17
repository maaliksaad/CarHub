"use client";

import { useState } from "react";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarDetails, CustomButton } from ".";
import { carProps } from "@/types";

interface Props {
  car: carProps;
}
const CarCard = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRental = calculateCarRent(city_mpg, year);

  return (
    <div className=" car-card group">
      <h2 className="car-card__content-title">
        {make} {model}
      </h2>

      <p className="flex mt-6 text-[2rem] font-extrabold">
        <span className="self-start text-[0.875rem] dont-semibold">$</span>
        {carRental}
        <span className="self-end text-[0.875rem] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className=" object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[0.875rem]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[0.875rem]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[0.875rem]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            text="View More"
            className="w-full py-4 rounded-full bg-primary-blue"
            textClasses=" text-white text-[0.875rem] leading-[1.0625rem] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        car={car}
      />
    </div>
  );
};

export default CarCard;
