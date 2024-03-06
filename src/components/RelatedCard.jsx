import React from "react";
import back from "../assets/back.png";
function RelatedCard({ text }) {
  return (
    <div className="w-[333px] h-[425px] mt-20 relative right-[350px]">
      <div className="flex justify-center items-center">
        <img src={back} className="w-[103px] h-[103px]" />
      </div>
      <div className="flex flex-row py-3 ">
        <div className="bg-gray-200 w-20 h-7  px-3 justify-center items-center py-1 ">
          20% off
        </div>
        <div className="bg-gray-200 w-35 h-7 py-1 ml-5 justify-center items-center">
          Limited time
        </div>
      </div>
      <div className="flex justify-center items-center font-semibold">
        Webbuilder1
      </div>
      <span>Computer Modern class with wix support</span>
      <div className="flex flex-row">
        <span className="text-[25px]">$39.96</span>
        <span className=" relative top-2 ml-3 text-gray-400">$49.6</span>
        <span className="text-red-700 relative top-2 ml-3">(20%)</span>
      </div>
      <div className="w-[333px] rounded-md h-[50px] bg-blue-500 flex items-center justify-center">
        <button className="text-center text-white">{text}</button>
      </div>
    </div>
  );
}

export default RelatedCard;
