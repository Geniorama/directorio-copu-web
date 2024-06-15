"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LogoBud from "../../../../../public/img/logo-bud.png";
import CoverExample from "../../../../../public/img/example-project.png";

export default function TabInicio() {
  return (
    <article className="text-center">
      <p className="my-5 text-xs max-w-[315px] mx-auto text-[#E9E9E9] leading-5">
        We are a creative accelerator company. We work with the best talented
        people in LATAM to create amazing apps, websites, digital campaigns,
        ilustrations and other cool things to help companies to increase their
        value in the market through design and technology.
      </p>

      {/* Reel */}
      <div className=" mt-20">
        <h3 className="text-[#C7C7DF] font-bold text-2xl">Reel</h3>
        <div className="my-7">
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
      <div className=" mt-32">
        <h3 className="text-[#C7C7DF] font-bold text-2xl mb-32">Clientes</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          autoplay
          scrollbar={{ draggable: true }}
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
        </Swiper>
      </div>

      {/* Trabajo destacado */}
      <div className="mt-32">
        <h3 className="text-[#C7C7DF] font-bold text-2xl mb-32">
          Trabajo destacado
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
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
