import React, { useState } from "react";
import logo3 from "../assets/logo3.png";
import { FaBookmark, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbBellRingingFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";
import { MdOutlineDisabledByDefault } from "react-icons/md";

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" w-full top-0 left-0">
        <div className="container bg-gradient-to-r from-sky-200 to-sky-100  flex flex-row justify-between font-poppins ">
          <div className="pl-3">
            <span className="cursor-pointer">
              <img src={logo3} alt="" className="w-45 h-24" />
            </span>
          </div>
          <div className="flex flex-row py-8">
            <FaBookmark className="text-2xl mx-2 text-sky-800" />
            <FaLocationDot className="text-2xl mx-2 text-sky-800" />
            <TbBellRingingFilled className="text-2xl mx-2 text-sky-800" />
          </div>
          <ul className="flex flex-row p-6 text-xl text-sky-800">
            <li className="mx-4">Home</li>
            <li className="mx-4">About us</li>
            <li className="mx-4">Products</li>
            <li className="mx-4">Contact us</li>
            <li className="mx-4">Track orders</li>
            <li className="mx-2">
              <div className="p-2 rounded-2xl bg-slate-200 shadow-xl flex flex-col justify-center text-lg">
                {show && (
                  <div className="border-2 border-dashed rounded-sm border-slate-400 flex flex-col p-4 justify-center items-center">
                    <div className="flex flex-row justify-start w-full">
                      <span className="my-2 text-2xl">
                        <button
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <MdOutlineDisabledByDefault />
                        </button>
                      </span>
                    </div>

                    <span className="my-2 text-5xl">
                      <IoCloudUpload />
                    </span>
                    <p className="my-2 py-3 ml-2">Upload prescription</p>
                  </div>
                )}

                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => {
                      setShow(true);
                    }}
                    className="text-sky-700 outline outline-1 outline-sky-700 shadow-lg py-1 px-2 rounded-full  text-sm"
                  >
                    Order via prescription
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex flex-row p-8">
            <FaShoppingCart className="text-2xl mx-2 text-sky-800" />
            <FaUser className="text-2xl mx-2 text-sky-800" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
