import { CardCompanyBasic } from "../CardCompanyBasic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../../../../public/img/arr-left.svg";
import ArrowRight from "../../../../public/img/arr-right.svg";
import type { Company } from "@/app/types";
import "swiper/css";

type CarouselBasicProps = {
  slides: Company[]
}

export default function CarouselBasic({slides}:CarouselBasicProps) {
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
        {slides.map((company, i) => (
          <SwiperSlide key={i}>
            <CardCompanyBasic slug={`/empresas/${company.slug}`} hoverBgColor={company.background} cover={company.logoLight} />
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
