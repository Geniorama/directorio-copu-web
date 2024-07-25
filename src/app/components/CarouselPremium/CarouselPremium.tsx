import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { CardCompanyPremium } from "../CardCompanyPremium";
import type { Company } from "@/app/types";
import "swiper/css";
import "swiper/css/effect-coverflow";

interface CarouselPremiumProps {
  slides?: Company[];
  handleOpen: (reel: string, url: string, name: string, slogan?: string) => void
}

export default function CarouselPremium({ slides, handleOpen }: CarouselPremiumProps) {
  return (
    <div className="w-full relative max-w-full">
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        centeredSlides={true}
        slidesPerView={1}
        // spaceBetween={-80}
        loop
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
        }}
      >
        {slides?.map((company, i) => (
          <SwiperSlide key={i}>
            <CardCompanyPremium
              id={company.id}
              name={company.name}
              slug={company.slug}
              cover={company.cover}
              tags={company.tags}
              sectors={company.sectors}
              reel={company.reel}
              logoLight={company.logoLight}
              logoDark={company.logoDark}
              handleOpen={handleOpen}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
