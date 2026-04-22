import { NavLinks } from "@/constant/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpenStyles = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="">
      {/* overlay */}
      <div
        className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpenStyles} top-0 fixed justify-center flex gap-10 flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#9f7c4e] z-1002`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[20px] ml-16 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.lable}
            </p>
          </Link>
        ))}

        {/* close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
