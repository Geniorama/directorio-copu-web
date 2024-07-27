import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { CardCompanyPremium } from "../CardCompanyPremium";
import { CardCompanyOuterInfo } from "../CardCompanyOuterInfo";
import type { Company } from "@/app/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from './CarouselPremium.module.css'
import IconLeft from "@/app/utils/Icons/IconLeft";
import IconRight from "@/app/utils/Icons/IconRight";

interface CarouselPremiumProps {
  slides?: Company[];
  handleOpen: (reel: string, url: string, name: string, slogan?: string) => void
}

export default function CarouselPremium({ slides, handleOpen }: CarouselPremiumProps) {
  return (
    <div className="w-full relative max-w-full">
      <Swiper
        style={{width: '100%'}}
        modules={[EffectCoverflow, Navigation]}
        loop
        effect="coverflow"
        slidesPerView= {1.2}
        navigation={{
          prevEl: '#prevButtonPremium',
          nextEl: '#nextButtonPremium'
        }}
        breakpoints={{
          600: {
            centeredSlides: true,
            slidesPerView: 'auto',
            grabCursor: true,
            coverflowEffect:{
              rotate: 50,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: true,
            }
          }
        }}
      >
        {slides?.map((company, i) => (
          <SwiperSlide className={styles.SwiperSlide} key={i}>
            <>
              <div className=" hidden lg:block">
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
              </div>

              <div className=" lg:hidden">
                <CardCompanyOuterInfo 
                  id={company.id}
                  name={company.name}
                  slug={company.slug}
                  cover={company.cover}
                  tags={company.tags}
                  sectors={company.sectors}
                  reel={company.reel}
                  logoLight={company.logoLight}
                  logoDark={company.logoDark}
                />
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>

      <>
          <button id="prevButtonPremium" className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
            <IconLeft color="currentColor" />
          </button>
          <button id="nextButtonPremium" className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
            <IconRight color="currentColor" />
          </button>
        </>
    </div>
  );
}
