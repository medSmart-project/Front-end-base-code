import React from "react";
import Review from "./Review";

function Reviews() {
  return (
    <>
      <div className="flex flex-col space-y-20 mt-8">
        <div className="flex justify-center font-bold text-4xl text-sky-800 ">
          <span>Some reviews</span>
        </div>
        <div className="">
          <Review name={"sara emad"} />
          <Review name={"tara awad"} />
        </div>
      </div>
    </>
  );
}

export default Reviews;
