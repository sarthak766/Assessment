import React from 'react'
import { TiTickOutline } from "react-icons/ti";
function Content4() {
  return (
    <div className='flex flex-col gap-1 px-5 py-5'>
        <div className='text-1xl'><span className='font-semibold text-1xl'>CDK Responsive Builder</span>: An extensive library of widgets and apps,</div>
        <div className='text-1xl'>and detailed step by step guides</div>
         <span className='w-20 h-7 py-3 bg-gray-200 flex justify-center items-center text-black'>26% OFF</span>
         <span className='font-semibold'>Main Highlights</span>
         <div className='bg-[#FFF4ED] ml-5 w-[505px] h-[116px] flex flex-col gap-2'>
            <div className='text 1xl'>
                <span className='bg-white w-10 h-10 rounded-md text-1xl m-7'>9.9</span>
                Building responsive
            </div>
            <div className='text 1xl'>
                <span className='bg-white w-10 h-10 rounded-md text-1xl m-7'>8.9</span>
                Cool
            </div>
            <div className='text 1xl'>
                <span className='bg-white w-10 h-10 rounded-md text-1xl m-7'>8.9</span>
                Docs
            </div>
         </div>
         <div className='flex flex-col gap-2'>
         <div className='h-1'>Why we love it</div>
          <div className='text-1xl mt-0 mb-6 h-2'><span className='px-5 relative top-5'><TiTickOutline/></span> Documentation</div>
          <div className='text-1xl mb-6 h-2'><span className='px-5 relative top-5'><TiTickOutline/></span> Easy Use</div>
          <div className='text-1xl mb-6 h-2'><span className='px-5 relative top-5'><TiTickOutline/></span> Out of Box</div>
        </div>

      <a className='text-blue-500 mt-8'>show more</a>        
    </div>
  )
}

export default Content4
