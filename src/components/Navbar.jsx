import React from "react";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className="w-full  h-[10vh] bg-[#212731] text-black flex flex-row justify-center items-center md:visible sm:none">
      <div className="flex flex-row p-7 relative">
        <CiSearch className="text-gray-500 mr-2 top-[30px] absolute" />
        <input type="Search" className="rounded-md w-30 h-8 " />
      </div>
    <ul className=" text-[#D1D6DA] md:gap-[130px] sm:hidden md:flex md:flex-row">
        <li>Categories</li>
        <li>Website-builders</li>
        <li>Todays deal</li>
      </ul>
    </div>
  );
}

export default Navbar;
