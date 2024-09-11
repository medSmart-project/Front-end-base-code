import React from "react";
import product1 from "../assets/product1.jpg";
import { FaRegHeart } from "react-icons/fa";
import Button from "./Button";
import ButtonSmall from "./ButtonSmall";

function ProductCard(props) {
  return (
    <>
      <div className="container flex flex-col space-y-3 p-3 shadow-md">
        <div className="flex justify-center">
          <img src={props.img} alt="" className="w-32 h-44" />
        </div>
        <div className="flex justify-end">
          <FaRegHeart className="hover:text-red-800" />
        </div>
        <div>
          <p className="text-sky-800">
            Shampoo pantene Pro-V Control Caida 500ml
          </p>
        </div>
        <div className="flex justify-center text-gray-500">
          <p>400 EG</p>
        </div>
        <div className="flex justify-center">
          <ButtonSmall title={'Add to cart'} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
