import React from 'react'
import back from '../assets/back.png'
import { IoDiamondOutline } from "react-icons/io5";
function ContentTrophy({idx}) {
  return (
    <>
      <div className='flex flex-col'>
      <div className='bg-[#FF7724] text-white h-8 w-[130px] rounded-br-md rounded-tr-md flex items-center mb-2'>
        <IoDiamondOutline className='mr-2' />
        <h4>Best Choice</h4>
      </div>
      <span>{idx}</span>
      <img src={back} alt="" className='h-[143px] w-[103px]' />
      </div>
    </>
  )
}

export default ContentTrophy
