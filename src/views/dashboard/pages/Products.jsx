import React from "react";
import "../styles/style.css";
import logo from "../../../assets/imgs/logo.png";
import avatar from "../../../assets/imgs/avatar.png";
import dashboard from "../../../assets/imgs/dashboard1.png";
import addproduct from "../../../assets/imgs/add-product.jpg";
import scanproduct from "../../../assets/imgs/scan-product.jpg";

import {
  FaBell,
  FaPlus,
  FaTable,
  FaSitemap,
  FaReceipt,
  FaTruck,
  FaHandshake,
  FaShoppingCart,
  FaSearch,
  FaSlidersH,
  FaCameraRetro,
} from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6"; // Import icons from different packages as needed

const Products = () => {
  return (
    <>
      <header className="dash-header">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <FaBell className="icon" />
          </li>
          <li>
            <img src={avatar} alt="avatar" />
          </li>
        </ul>
      </header>
      <div className="wrapper">
        <div className="sidebar">
          <button className="flex justify-center pt-3">
            <FaPlus className="icon" /> <span>Quick add</span>
          </button>
          <ul>
            <li className="flex">
              <FaTable className="icon" />
              <span>Dashboard</span>
            </li>
            <li className="active flex">
              <FaSitemap className="icon" />
              <span>Products</span>
            </li>
            <li className="flex">
              <FaReceipt className="icon" />
              <span>Billing</span>
            </li>
            <li className="flex">
              <FaTruck className="icon" />
              <span>Delivery</span>
            </li>
            <li className="flex">
              <FaHandshake className="icon" />
              <span>Partners</span>
            </li>
            <li className="flex">
              <FaShoppingCart className="icon" />
              <span>Card</span>
            </li>
          </ul>
        </div>
        <div className="page">
          <div className="search">
            <input type="search" />
            <button className="p-2">
              <FaSearch className="icon" />
            </button>
            <div className="filter-container">
              <div className="filter-icon">
                <FaSlidersH className="icon" />
              </div>
              <ul className="filter-options">
                <li>A → Z</li>
                <li>Z → A</li>
                <li>Popular categories</li>
                <li>The lowest price</li>
                <li>The highest price</li>
              </ul>
            </div>
          </div>
          <div className="add-options flex justify-between align-middle mt-24 mx-20">
            <div className="flex flex-col items-center border-4  border-solid border-sky-700 rounded-lg w-96">
              <img
                src={addproduct}
                alt="add product"
                className="w-72 h-72 rounded-md mt-4"
              />
              <button className="flex px-2 py-2 m-4 rounded-full text-xl bg-sky-700 text-white">
                <FaSquarePlus className="icon my-1 mx-2" /> Add product manually
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-6xl text-center text-sky-700">OR</p>
            </div>

            <div className="flex flex-col items-center border-4  border-solid border-sky-700 rounded-lg w-96">
              <img
                src={scanproduct}
                alt="scan product"
                className="w-72 h-72 rounded-md mt-4"
              />
              <button className="flex px-2 py-2 m-4 rounded-full text-xl bg-sky-700 text-white">
                <FaCameraRetro className="icon my-1 mx-2" /> Add product
                manually
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
