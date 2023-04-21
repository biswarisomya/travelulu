"use client";

// import { Link } from "react-scroll";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";

import { slide as Menu } from "react-burger-menu";
import * as React from "react";

const Header = () => {
  const [hideBackground, setHideBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/hotels",
      label: "Hotels",
    },
  ];
  return (
    <div className=" font-poppins  border-b-2 border-solid pb-[33px] pl-[135px]  pr-[90px] pt-[34px] font-bold text-primary-dark  mobile:pl-[9%] mobile:pr-[9%]">
      <Link className="text-[34px] leading-[55px]" href="/">
        Travelulu
      </Link>
      <Menu
        // burgerButtonClassName="hidden mobile:block"
        noOverlay
        onOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
        isOpen={mobileMenuOpen}
        crossButtonClassName="hidden"
        customBurgerIcon={<HiOutlineMenu />}
        right
      >
        <Link href="/">Home</Link>
        <Link href="/hotels">Hotels</Link>
      </Menu>
    </div>
  );
};

export default Header;
