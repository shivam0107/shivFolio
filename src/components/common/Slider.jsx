import React, { useEffect, useRef, useState } from "react";

import {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/sliderImg/IMG_20231219_125047.jpg";
import img2 from "../../assets/sliderImg/IMG_20231220_171312.jpg";
import img3 from "../../assets/sliderImg/IMG_20240101_220542.jpg";
import img4 from "../../assets/sliderImg/shiv.jpeg";
import img5 from "../../assets/sliderImg/स्क्रीनशॉट 2024-03-26 233244.png";
import img6 from "../../assets/sliderImg/iist.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const images = [img1, img4, img2, img5, img6, img3];

  const curEl = useRef();

  const [slideWidth, setSlideWidth] = useState(4);

  return (
    <div>
      {images?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className=""
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div ref={curEl} className="h-[300px]">
                  <img src={img} width={500} className="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Slider;
