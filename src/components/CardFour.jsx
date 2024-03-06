import React from 'react'
import Contentnull from './Contentnull'
import Content4 from './Content4'
import Contentlast from './Contentlast'
function CardFour() {
  return (
    <div class="flex flex-row w-full justify-start ml-[28%] py-2 mb-7 mt-6 ">
      <Contentnull idx={4}/>
      <Content4/>
      <Contentlast number={9.1}/>
    </div>
  )
}

export default CardFour
