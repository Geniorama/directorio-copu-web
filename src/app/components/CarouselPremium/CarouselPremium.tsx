"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { CardCompanyPremium } from "../CardCompanyPremium";
import { CardCompanyOuterInfo } from "../CardCompanyOuterInfo";
import type { Company } from "@/app/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from "./CarouselPremium.module.css";
import IconLeft from "@/app/utils/Icons/IconLeft";
import IconRight from "@/app/utils/Icons/IconRight";
import { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";

interface CarouselPremiumProps {
  slides?: Company[];
  handleOpen: (
    reel: string,
    url: string,
    name: Company['name'],
    slogan?: Company['slogan'],
    sectors?: Company['sectors']
  ) => void;
}

export default function CarouselPremium({
  slides,
  handleOpen,
}: CarouselPremiumProps) {
  const masterSlider = useRef<SwiperCore | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  useEffect(() => {
    const slider = masterSlider.current;

    if (slider) {
      const allSlides = slider.slides;
      // Reset styles for all slides
      allSlides.forEach((slide) => {
        slide.classList.remove(styles.adjacentSlide);
      });

      // Apply custom styles to the adjacent slides
      if (activeSlideIndex > 0) {
        const prevSlide = allSlides[activeSlideIndex - 1];
        prevSlide?.classList.add(styles.prevSlide); // Apply a custom class
      }

      if (activeSlideIndex < allSlides.length - 1) {
        const nextSlide = allSlides[activeSlideIndex + 1];
        nextSlide?.classList.add(styles.nextSlide); // Apply a custom class
      }
    }
  }, [activeSlideIndex]);

  return (
    <div className="w-full relative max-w-full">
      <Swiper
        onSwiper={(swiper) => {
          masterSlider.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlideIndex(swiper.activeIndex);
        }}
        className={styles.Swiper}
        modules={[EffectCoverflow, Navigation]}
        loop
        effect={"coverflow"}
        slidesPerView={1.2}
        navigation={{
          prevEl: "#prevButtonPremium",
          nextEl: "#nextButtonPremium",
        }}
        breakpoints={{
          1440: {
            centeredSlides: true,
            slidesPerView: "auto",
            grabCursor: true,
            coverflowEffect: {
              rotate: 40,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: true,
            },
          },

          1560: {
            centeredSlides: true,
            slidesPerView: "auto",
            grabCursor: true,
            coverflowEffect: {
              rotate: 30,
              stretch: 100,
              depth: 500,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
      >
        {slides?.map((company, i) => (
          <SwiperSlide className={`${styles.SwiperSlide}`} key={i}>
            {({ isActive }) => (
              <>
                <div className={`hidden lg:block ${isActive && 'lg:scale-110'}`}>
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
                    slogan={company.slogan}
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
                    handleOpen={handleOpen}
                    slogan={company.slogan}
                  />
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <>
        <button
          id="prevButtonPremium"
          className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white"
        >
          <IconLeft color="currentColor" />
        </button>
        <button
          id="nextButtonPremium"
          className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white"
        >
          <IconRight color="currentColor" />
        </button>
      </>
    </div>
  );
}
