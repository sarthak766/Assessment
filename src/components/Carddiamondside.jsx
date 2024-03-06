import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function Carddiamondside({number}) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className=" flex flex-col rounded-bl-md rounded-br-md justify-center items-center h-[140px] w-[130px] bg-[#F3F9FF] px-4 mt-10">
        <span className="text-3xl mb-2">{number}</span>
        <span>Excellent</span>
        <div className="flex flex-row gap-1">
          <FaStar className="text-yellow-500 " />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStarHalfAlt className="text-yellow-500" />
        </div>
      </div>
      <div
        className="flex rounded-lg justify-center items-center w-[232px] h-[48px] bg-[#1B88F4] text-white "
      >
        <button>View</button>
      </div>
    </div>
  );
}

export default Carddiamondside;
