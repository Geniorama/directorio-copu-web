
import { CardCompanyPro } from "../CardCompanyPro";
import { Swiper, SwiperSlide } from "swiper/react";
import ExampleImage from "../../../../public/img/cover-card-related_enjoy.png";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../../../../public/img/arr-left.svg";
import ArrowRight from "../../../../public/img/arr-right.svg"

import "swiper/css";

export default function CarouselPro() {
  return (
    <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next'
          }}
          >
        {[1, 2, 3, 4, 5].map((item, i) => (
          <SwiperSlide key={i}>
            <CardCompanyPro
              name="Geniorama"
              area="Web Development"
              bgImage={ExampleImage.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="hover:bg-[#2D2D33] grid place-items-center custom-swiper-prev swiper-button-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
        <img className="w-3" src={ArrowLeft.src} alt="" />
      </button>
      <button className="hover:bg-[#2D2D33] grid place-items-center custom-swiper-next swiper-button-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
        <img className="w-3" src={ArrowRight.src} alt="" />
      </button>
    </div>
  );
}
