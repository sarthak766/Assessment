import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { CiCircleInfo } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
function Home() {
  return (
    <div className='bg-white flex flex-col justify-center items-center'>
      <h1 className='text-6xl py-7 mr-20'>Best website builder in the US</h1>
      <div className='border-b border-gray-300 w-[60%]'></div>
      <div className='gap-[300px] flex flex-row'>
      <div className='flex flex-row gap-2 mr-6 text-[#4B5665]'>
      <BsCheckCircle className='relative top-1'/> 
      <h4 >last updated-  February 22,2020</h4>
      <CiCircleInfo className='relative top-1'/>
      <h4 >Advertising-disclosure</h4>
        </div>
      <div>
      <div className='flex flex-row '>
        <h4>Top-Relevant</h4>
        <FaAngleDown className='relative top-1'/>
      </div>
      </div>
      
      </div>
     
      <div className=' border-b border-gray-300 w-[60%] py-2'></div>
        <ul className='flex mr-[10%]  gap-[50px] text-1xl py-3 text-[#4B5665]'>
            <li>Tools</li>
            <li>Aws builder</li>
            <li>Start build</li>
            <li>build supplies</li>
            <li>Tooling</li>
            <li>blue-hoisting</li>
        </ul>
        <div className=' mr-[19%] flex flex-row gap-3 py-4 text-[#4B5665]'>
         <span>Home</span>
         <FaAngleLeft className='relative top-1'/>
         <span>Hoisting for all</span>
         <FaAngleLeft className='relative top-1'/>
         <span>Hoisting</span>
         <FaAngleLeft className='relative top-1'/>
         <span>Hoisting-6</span>
         <FaAngleLeft className='relative top-1'/>
         <span>Hoisting-5</span>
        </div>
      
    </div>
  );
}

export default Home;
