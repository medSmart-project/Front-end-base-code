import React from "react";
import doctor3 from "../assets/doctor3.jpg";
import med from "../assets/med.jpg";
import med2 from "../assets/med2.jpg";
import pharma from "../assets/pharma.jpg";
import pharma2 from "../assets/pharma2.jpg";

function Categories() {
  return (
    <>
      <div className="flex flex-col mt-10 font-poppins ">
        <div className="flex justify-center my-4">
          <p className="font-bold text-4xl text-sky-800 my-5">Categories</p>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center items-center">
            <img src={doctor3} alt="" className="rounded-full w-36 h-36" />
            <p className=" text-2xl text-sky-800 my-5">medicine</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={med} alt="" className="rounded-full w-36 h-36" />
            <p className=" text-2xl text-sky-800 my-5">skin care</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={med2} alt="" className="rounded-full w-36 h-36" />
            <p className=" text-2xl text-sky-800 my-5">hair care</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={pharma} alt="" className="rounded-full w-36 h-36" />
            <p className=" text-2xl text-sky-800 my-5">vitamens</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={pharma2} alt="" className="rounded-full w-36 h-36" />
            <p className=" text-2xl text-sky-800 my-5">baby care</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Categories;
