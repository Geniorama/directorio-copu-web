"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LogoBud from "../../../../../public/img/logo-bud.png";
import CoverExample from "../../../../../public/img/example-project.png";
import { useRef } from "react";
import ArrowRight from '../../../../../public/img/right.svg'
import ArrowLeft from '../../../../../public/img/left.svg'
// import 'swiper/swiper-bundle.min.css';

export default function TabInicio() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <article className="text-center">
      <p className="my-5 text-xs max-w-[315px] mx-auto text-[#E9E9E9] leading-5">
        We are a creative accelerator company. We work with the best talented
        people in LATAM to create amazing apps, websites, digital campaigns,
        ilustrations and other cool things to help companies to increase their
        value in the market through design and technology.
      </p>

      {/* Reel */}
      <div className="mt-10 md:mt-20">
        <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl">Reel</h3>
        <div className="mt-10 md:my-7">
          <iframe
            className="w-full aspect-video self-stretch md:min-h-96"
            src="https://www.youtube.com/embed/hTFspxxMERU"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
            allowFullScreen
          />
        </div>
      </div>

      {/* Clientes */}
      <div className="mt-16 md:mt-32">
        <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl mb-16 md:mb-28">Clientes</h3>
        <Swiper
          className="relative"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: {
              slidesPerView: 4
            }
          }}
        >
          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={LogoBud.src} alt="" className="mx-auto" />
          </SwiperSlide>

           {/* Botones personalizados */}
          <button ref={prevRef} className="custom-prev-button bg-secondary-color-light w-[40px] h-[40px] rounded-full inline-flex justify-center items-center absolute left-0 top-[30%] z-20 hover:bg-secondary-color-hover active:bg-white">
          <img src={ArrowLeft.src} alt="" />
          </button>
          <button ref={nextRef} className="custom-next-button bg-secondary-color-light w-[40px] h-[40px] rounded-full inline-flex justify-center items-center absolute right-0 top-[30%] z-20 hover:bg-secondary-color-hover active:bg-white">
            <img src={ArrowRight.src} alt="" />
          </button>
        </Swiper>
      </div>

      {/* Trabajo destacado */}
      <div className="mt-16 md:mt-32">
        <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl mb-16 md:mb-28">
          Trabajo destacado
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
          <div key={i}>
            <img
              className="w-full aspect-square object-cover"
              src={CoverExample.src}
              alt=""
            />
          </div>
        ))}
      </div>
    </article>
  );
}
