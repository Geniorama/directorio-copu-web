import { CardCompanyPro } from "../CardCompanyPro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Company } from "@/app/types";
import IconLeft from "@/app/utils/Icons/IconLeft";
import IconRight from "@/app/utils/Icons/IconRight";
import { useState, useEffect } from "react";

import "swiper/css";

interface CarouselProProps {
  slides?: Company[];
}

export default function CarouselPro({ slides }: CarouselProProps) {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const updateNavigationVisibility = () => {
      if (!slides || slides.length === 0) {
        setShowNavigation(false);
        return;
      }

      const viewportWidth = window.innerWidth;
      let visibleSlides = 1.2; // Default slides visible on mobile

      if (viewportWidth >= 480) {
        visibleSlides = 4; // Slides visible on desktop
      }

      setShowNavigation(slides.length > visibleSlides);
    };

    updateNavigationVisibility();

    window.addEventListener("resize", updateNavigationVisibility);

    return () => {
      window.removeEventListener("resize", updateNavigationVisibility);
    };
  }, [slides]);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={showNavigation}
        navigation={showNavigation ? {
          prevEl: ".custom-swiper-prev",
          nextEl: ".custom-swiper-next",
        } : false}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
        }}
      >
        {slides &&
          slides.map((item, i) => (
            <SwiperSlide key={i}>
              <CardCompanyPro
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

      {showNavigation && (
        <>
          <button className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
            <IconLeft color="currentColor" />
          </button>
          <button className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
            <IconRight color="currentColor" />
          </button>
        </>
      )}
    </div>
  );
}
