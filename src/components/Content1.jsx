import React from "react";
import { FaAngleDown } from "react-icons/fa";
function Content1() {
  return (
    <div className="flex flex-col gap-2 h-[300px] w-[600px] px-10 py-10">
      <p>
       <span className="font-semibold">WixPro 72-Inch Responsive Website Builder</span>Comprehensive Digital
        Platform Creation Tool, Streamlined Design Interface for Professional
        Websites and Online Stores (Black/Blue)
      </p>
      <p className="font-semibold">Main highlights</p>
      <p className="ml-4 py-2">
        [What You Get]: Receive the WixPro website builder
        suite, access to premium design templates, an extensive library of
        widgets and apps, and detailed step-by-step guides.
      </p>
      <a href="" className="text-blue-500 flex flex-row">Show more <FaAngleDown className="relative top-1"/></a>
    </div>
  );
}

export default Content1;
