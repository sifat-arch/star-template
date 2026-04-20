import React from "react";
import { BiSolidBusiness } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-[#b69973] rounded-full flex items-center justify-center flex-col ">
        <BiSolidBusiness className=" w-6 h-6 text-white" />
      </div>
      <h1 className="text-xl hidden sm:block md:text-2xl text-[#d5b68c]">
        StarBox
      </h1>
    </div>
  );
};

export default Logo;
