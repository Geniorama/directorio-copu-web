"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import ArrowLeft from "../../../../../public/img/left.svg"
import ArrowRight from "../../../../../public/img/right.svg"
import "swiper/css";
import "swiper/css/navigation";
import type { Company } from "@/app/types";

type CarouselClientsCompanyProps = {
    clients: Company['clients']
}

export default function CarouselClientsCompany({clients}: CarouselClientsCompanyProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {clients && clients.length > 0 && (
        <div className="mt-16 md:mt-32">
          <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl mb-16 md:mb-28">
            Clientes
          </h3>
          <div className="relative px-16">
            <Swiper
              className="relative"
              spaceBetween={50}
              slidesPerView={1}
              loop
              // centeredSlides
              modules={[Navigation, Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {clients.length > 0 &&
                clients.map((client, i) => (
                  <SwiperSlide key={i}>
                    <div className=" flex items-center justify-center h-[80px]">
                      <img
                        title={client.name}
                        alt={client.name}
                        src={client.url}
                        className="mx-auto max-w-60 max-h-[80px] h-auto block grayscale brightness-100 contrast-200 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Botones personalizados */}
            <button
              ref={prevRef}
              className=" custom-prev-button bg-secondary-color-light w-[40px] h-[40px] rounded-full inline-flex justify-center items-center absolute left-0 top-[30%] z-20 hover:bg-secondary-color-hover active:bg-white"
            >
              <img src={ArrowLeft.src} alt="" />
            </button>
            <button
              ref={nextRef}
              className=" custom-next-button bg-secondary-color-light w-[40px] h-[40px] rounded-full inline-flex justify-center items-center absolute right-0 top-[30%] z-20 hover:bg-secondary-color-hover active:bg-white"
            >
              <img src={ArrowRight.src} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
