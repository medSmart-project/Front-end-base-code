import React from 'react'
import CardSlider from './CardSlider';
import { MdLocalOffer } from "react-icons/md";

function Offers() {
  return (
    <>
      <div className="flex flex-col space-y-20 mt-8">
        <div className="flex justify-center font-bold text-4xl text-sky-800 space-x-3">
         <span>Offers</span>
         <span><MdLocalOffer className='text-red-700'/></span>
        </div>
        <div>
          <CardSlider />
        </div>
      </div>
    </>
  );
}

export default Offers