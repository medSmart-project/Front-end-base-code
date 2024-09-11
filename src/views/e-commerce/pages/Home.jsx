import React from "react";
import Herosection from "../../../components/Herosection";
import Nav from "../../../components/Nav";
import Aboutus from "../../../components/Aboutus";
import Categories from "../../../components/Categories.JSX";
import Recommended from "../../../components/Recommended";
import Offers from "../../../components/Offers";
import Reviews from "../../../components/Reviews";

function Home() {
  return (
    <>
      <Nav />
      <Herosection />
      <Aboutus />
      <Categories />
      <Recommended />
      <Offers />
      <Reviews />
    </>
  );
}

export default Home;
