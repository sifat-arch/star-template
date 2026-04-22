import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* image context*/}
        <div className="relative flex justify-center items-center">
          {/* main image */}
          <Image
            src={"/images/a3.png"}
            alt="img"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
