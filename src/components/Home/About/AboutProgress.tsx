import React from "react";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";

const AboutProgress = () => {
  const data = [
    {
      id: 1,
      title: "Digital Marketing",
      Percent: 95,
      icon: <FaBullseye className="text-white text-3xl" />,
    },
    {
      id: 2,
      title: "Digital Business",
      Percent: 90,
      icon: <HiOutlineChartBar className="text-white text-3xl" />,
    },
  ];
  return (
    <div className="space-y-8 py-6 md:py-10">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-6 bg-white rounded-xl shadow-md p-6"
        >
          {/* icon */}
          <div className="bg-[#b58b58] p-5 rounded-md flex items-center justify-center ">
            {item.icon}
          </div>
          {/* text + progress */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold text-lg">
                {item.title}
              </h3>
              <p className="font-semibold text-gray-800">{item.Percent}</p>
            </div>
            {/* progress bar */}
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
               <div className="h-2 bg-[#b58b68] rounded-full" style={{
                 width:`${item.Percent}%`
               }}>
                 
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutProgress;
