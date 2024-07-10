import { CardCompanyBasic } from "../CardCompanyBasic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../../../../public/img/arr-left.svg";
import ArrowRight from "../../../../public/img/arr-right.svg";
import LogoExample from "../../../../public/img/logo-media-monks.png";
7;
import "swiper/css";

export default function CarouselBasic() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]} 
        spaceBetween={10}
        slidesPerView={2.5}
        navigation={{
            prevEl: '.basic-custom-swiper-prev',
            nextEl: '.basic-custom-swiper-next'
        }}
        breakpoints={{
          480:{
            slidesPerView: 9
          }
        }}
        >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((company, i) => (
          <SwiperSlide key={i}>
            <CardCompanyBasic cover={LogoExample.src} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
        <img className="w-3" src={ArrowLeft.src} alt="" />
      </button>
      <button className="hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
        <img className="w-3" src={ArrowRight.src} alt="" />
      </button>
    </div>
  );
}
