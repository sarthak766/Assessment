import React from 'react'
import { CiTrophy } from "react-icons/ci";
import back from '../assets/back.png'
function Content({idx}) {
  return (
    <>
      <div className='flex flex-col'>
      <div className='bg-[#FF7724] text-white h-8 w-[130px] rounded-br-md rounded-tr-md flex items-center mb-2'>
        <CiTrophy className='mr-2' />
        <h4>Best Choice</h4>
      </div>
      <span>{idx}</span>
      <img src={back} alt="" className='h-[143px] w-[103px]' />
      </div>
    </>
  )
}

export default Content
