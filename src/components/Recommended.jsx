import React from "react";
import CardSlider from "./CardSlider";
import { RiHeartAdd2Fill } from "react-icons/ri";


function Recommended() {
  return (
    <>
      <div className="flex flex-col space-y-20 mt-8">
        <div className="flex justify-center font-bold text-4xl text-sky-800  space-x-3">
          <span>Recommended</span>
          <span>
            <RiHeartAdd2Fill className="text-rose-300" />
          </span>
        </div>
        <div>
          <CardSlider />
        </div>
        <div>
          <CardSlider />
        </div>
      </div>
    </>
  );
}

export default Recommended;
