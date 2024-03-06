import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
function Footer() {
  return (
    <div class="flex flex-row w-full justify-start py-2 h-[400px] bg-[#212731] mt-5 gap-[300px]">
        <div className='Flex flex-col gap-4 ml-[26%]'>
            <div className='text-2xl text-gray-200 mt-4'>Categories</div>
            <div className='text-1xl text-gray-400 mt-4'>Web builder</div>
            <div className='text-1xl text-gray-400 mt-4'>Hoisting</div>
            <div className='text-1xl text-gray-400 mt-4'>Data center</div>
            <div className='text-1xl text-gray-400 mt-4'>Robotic Automation</div>
        </div>
        <div className='Flex flex-col gap-4 '>
        <div className='text-2xl text-gray-200 mt-4'>Contact</div>
        <div className='text-1xl text-gray-400 mt-4'>Contact</div>
            <div className='text-1xl text-gray-400 mt-4'>Privacy policy</div>
            <div className='text-1xl text-gray-400 mt-4'>Terms of service</div>
            <div className='text-1xl text-gray-400 mt-4'>Categories</div>
            <div className='text-1xl text-gray-400 mt-4'> About</div>
        
        </div>
        <div className='text-1xl text-gray-400 mt-[100px] flex flex-row gap-1'>United States <FaAngleDown className='relative top-1'/></div>

        
    </div>
  )
}

export default Footer
