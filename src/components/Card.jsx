import React from 'react';
import Content1 from './Content1';
import Content from './Content';
import Content3 from './Content3';
function Card() {
  return (
    <>
      <div class="flex flex-row w-full justify-start ml-[28%] py-2 ">
      <Content idx={1} />
      <Content1/>
      <Content3 number={9.8}/>
      </div>    

      </>
  );
}

export default Card;
