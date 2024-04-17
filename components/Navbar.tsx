import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="logo.svg"
            alt="car hub logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        <CustomButton
          text="Sign In"
          className="text-primary-blue rounded-full bg-white min-w-[8.125rem] hover:bg-primary-blue hover:text-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
