import React from "react";
import product from "../../../assets/product3.jpg";
import user from "../../../assets/user.jpeg";
import "../styles/productDetails.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {
  FaArrowCircleLeft,
  FaShareAlt,
  FaHeart,
  FaStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div>
      <div className="container mx-auto p-5 flex flex-col md:flex-row justify-between">
        <a href="">
          <FaArrowCircleLeft className="text-4xl hover:text-blue-600" />
        </a>
        <div className="flex mt-4 md:mt-0">
          <a href="">
            <FaShareAlt className="text-3xl ml-3 hover:text-blue-600" />
          </a>
          <a href="">
            <FaHeart className="text-3xl ml-3 hover:text-red-700" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-5 mb-5 justify-start flex flex-row">
        <button
          type="button"
          className="btn btn-outline-danger rounded-full"
          disabled
        >
          Shampoo
        </button>
      </div>

      <div className="container mx-auto p-5 text-xl grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <img
            src={product}
            alt=""
            className="w-full h-auto"
            style={{ maxHeight: "437px" }}
          />
          <button
            className="btn h-10 w-1/2 mx-auto p-2 rounded-full hover:bg-blue-900 bg-blue-600 text-gray-50 hover:text-gray-100 mt-4"
            type="button"
          >
            Add to cart
          </button>
        </div>
        <div>
          <h4>Shampoo Pantene Pro-V Control Caída 500 ml</h4>
          <div className="my-5">
            <p className="mr-4  mb-4">Quantity:</p>
            <div
              className="inline-flex rounded-lg overflow-hidden"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-secondary rounded-l-full text-success text-xl md:text-3xl pb-2 hover:bg-green-600 font-medium"
              >
                <FaPlus />
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-none px-4 text-xl md:text-3xl font-medium"
              >
                1
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-r-full text-danger text-xl md:text-3xl pb-2 hover:bg-red-700 font-medium"
              >
                <FaMinus />
              </button>
            </div>
            <p className="my-4">Price:</p>
            <p className="text-secondary font-medium">400 EGP</p>
          </div>
          <p className="my-4">Expired date :</p>
          <p className="text-secondary">26 July 2027</p>
          <p className="my-4">Product details :</p>
          <p className="text-secondary">
            This product is designed to improve hair strength and reduce
            breakage, leading to less hair fall over time.
          </p>
          <p className="my-4">Ingredients :</p>
          <p className="text-secondary">
            Pro-V formula: Nourishes hair from root to tip, providing strength
            and resilience.
          </p>
          <p className="my-4">Hair Type :</p>
          <p className="text-secondary">
            Suitable for weak or damaged hair prone to hair fall.
          </p>
          <p className="my-4">Review of the product :</p>

          <div className="container mx-auto flex items-start justify-between border-b-2 border-gray-300 my-4 p-6 relative">
            <div className="flex flex-col items-center">
              <img src={user} alt="" className="w-24 h-24 rounded-full mb-2" />
              <p className="text-sm font-semibold m-2">Sara Ali</p>
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
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
              </div>
            </div>
          </div>

          <div className="container mx-auto flex items-start justify-between border-b-2 border-gray-300 my-4 p-6 relative">
            <div className="flex flex-col items-center">
              <img src={user} alt="" className="w-24 h-24 rounded-full mb-2" />
              <p className="text-sm font-semibold m-2">Tara Awad</p>
            </div>

            <div className="flex-1 ml-5">
              <p className="text-xs text-gray-500 absolute top-1 right-6">
                Reviewed on Sep 7, 2024
              </p>

              <p className="text-sm m-2 text-secondary">
                Very smooth and its smell takes you to another world, but makes
                your hair a little dry.
              </p>

              <div className="flex">
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
              </div>
            </div>
          </div>

          <div className="form-floating my-4">
            <textarea
              className="form-control"
              placeholder="Leave your review here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2" className="text-lg">
              Add review
            </label>
          </div>
          <button type="button" className="btn btn-outline-primary mt-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
