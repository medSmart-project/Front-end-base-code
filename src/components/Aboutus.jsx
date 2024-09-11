import React from "react";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import med from "../assets/med.jpg";
import med2 from "../assets/med2.jpg";
import pharma from "../assets/pharma.jpg";
import pharma2 from "../assets/pharma2.jpg";

function Aboutus() {
  return (
    <>
      <div className="grid grid-cols-2 font-poppins bg-gradient-to-r from-sky-100 to-white pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <img
            src={doctor2}
            alt="Doctor 2"
            className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <img
            src={doctor3}
            alt="Doctor 3"
            className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <img
            src={med}
            alt="Med"
            className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <img
            src={pharma}
            alt="Pharma"
            className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="flex flex-col m-5 ">
          <div className="flex justify-center">
            <p className="font-bold text-5xl text-sky-800 my-1">About US</p>
          </div>

          <p className="text-2xl text-gray-500 mt-10 p-12 py-14">
            Welcome to <span className="text-sky-800">MEDSMART</span> pharmacy
            where your health and well-being are our top priorities. We are a
            dedicated team of pharmacists and healthcare professionals committed
            to providing exceptional services and personalized care. With years
            of experience in the pharmaceutical industry, our goal is to be your
            trusted partner in health.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
