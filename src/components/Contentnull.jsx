import React from 'react'
import back from '../assets/back.png'
import { IoDiamondOutline } from "react-icons/io5";
function ContentTrophy({idx}) {
  return (
    <>
      <div className='flex flex-col'>
      <span>{idx}</span>
      <img src={back} alt="" className='h-[143px] w-[103px] ml-7' />
      </div>
    </>
  )
}

export default ContentTrophy
