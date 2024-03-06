import React from 'react';
import Content1 from './Content1';
import Contentdiamond from './Contentdiamond';
import Content3 from './Content3';
import Carddiamondside from './Carddiamondside';
function Card() {
  return (
    <>
      <div class="flex flex-row w-full justify-start ml-[28%] py-2 ">
      <Contentdiamond idx={2}/>
      <Content1/>
      <Carddiamondside number={9.5}/>
      </div>    

      </>
  );
}

export default Card;
