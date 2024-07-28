import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../../../../public/img/arr-left.svg";
import ArrowRight from "../../../../public/img/arr-right.svg";
import { CardCompanyOuterInfo } from "../CardCompanyOuterInfo";
import type { Company } from "@/app/types";

import "swiper/css";

interface CarouselProOuterInfoProps {
  slides?: Company[];
}

export default function CarouselProOuterInfo({
  slides,
}: CarouselProOuterInfoProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slides && slides.length > 1 ? 1.2 : 1}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        // centeredSlides
        navigation={{
          prevEl: ".custom-swiper-prev",
          nextEl: ".custom-swiper-next",
        }}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
        }}
      >
        {slides &&
          slides.map((item, i) => (
            <SwiperSlide key={i}>
              <CardCompanyOuterInfo
                id={i}
                name={item.name}
                sectors={item.sectors}
                cover={item.cover}
                slug={item.slug}
                tags={item.tags}
                plan={item.plan}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <button className="hidden lg:grid hover:bg-[#2D2D33] place-items-center custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
        <img className="w-3" src={ArrowLeft.src} alt="" />
      </button>
      <button className="hidden lg:grid hover:bg-[#2D2D33] place-items-center custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
        <img className="w-3" src={ArrowRight.src} alt="" />
      </button>
    </div>
  );
}
