import React from "react";
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

function CardSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard img={product1}/></SwiperSlide>
        <SwiperSlide><ProductCard img={product2}/></SwiperSlide>
        <SwiperSlide><ProductCard img={product3}/></SwiperSlide>
        <SwiperSlide><ProductCard img={product4}/></SwiperSlide>
        <SwiperSlide><ProductCard img={product5}/></SwiperSlide>
        <SwiperSlide><ProductCard img={product6}/></SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default CardSlider;
