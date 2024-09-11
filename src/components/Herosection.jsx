import React from "react";
import doctor1 from "../assets/doctor1.png";
import Button from "./Button";

function Herosection() {
  return (
    <>
      <div className="container bg-gradient-to-r from-sky-200 to-sky-100 grid grid-cols-2 font-poppins">
        <div className="flex flex-col justify-end">
          <img src={doctor1} className="w-full h-5/6"></img>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-2xl font-bold my-1">
            24/7 srvices for you
          </p>
          <p className="font-bold text-6xl text-sky-800 my-1">
            Welcome to our MEDSMART pharmacy
          </p>
          <p className="text-sky-500 font-bold text-2xl my-1">
            Trust,fast and available
          </p>
          <div className="my-8">
            <Button title={ 'shop now'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
