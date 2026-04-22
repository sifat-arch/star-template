import Logo from "@/components/Helper/Logo";
import { NavLinks } from "@/constant/constants";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type props = {
   openNav: () => void;
};



const Nav = ({openNav}: props) => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Logo />
        {/* nav links for large screens */}
        <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200"
            >
              <p>{link.lable}</p>
            </Link>
          ))}

          {/* button */}
          <button className="h-full p-5 bg-[#b69974] cursor-pointer text-white font-bold ">
            Create Account
          </button>
        </div>
        {/* hamberger icon for mobile */}
        <div className="lg:hidden" onClick={openNav}>
          <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
