import React from "react";
import user from "../assets/user.jpeg";
import { FaStar } from "react-icons/fa6";

function Review(props) {
  return (
    <>
      <div className="container mx-auto flex items-start justify-between border-b-2 border-gray-300 p-6 my-3 relative w-3/4">
        <div className="flex flex-col items-center">
          <img src={user} alt="" className="w-24 h-24 rounded-full mb-2" />
          <p className="text-sm font-semibold m-2">{props.name}</p>
        </div>

        <div className="flex-1 ml-5">
          <p className="text-xs text-gray-500 absolute top-1 right-6">
            Reviewed on Sep 7, 2024
          </p>

          <p className="text-sm m-2 text-secondary">
            This product fixes my hair very deeply, amazing and very
            recommended.
          </p>

          <div className="flex">
            <FaStar className="text-lg text-yellow-300" />
            <FaStar className="text-lg text-yellow-300" />
            <FaStar className="text-lg text-yellow-300" />
            <FaStar className="text-lg text-yellow-300" />
            <FaStar className="text-lg text-yellow-300" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
