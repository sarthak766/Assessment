import React from 'react'
import RelatedCard from './RelatedCard'

function Related() {
  return (
    <div class="flex flex-row w-full justify-start ml-[28%] py-2 gap-8 ">
      <p className='text-2xl text-black'>Related deals you might like for</p>
      <RelatedCard text={''}/>
      <RelatedCard text={'View Deal'}/>
      <RelatedCard text={'View Deal'}/>
    </div>
  )
}

export default Related
