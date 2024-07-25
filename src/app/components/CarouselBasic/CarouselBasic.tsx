import { CardCompanyBasic } from "../CardCompanyBasic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IconLeft from "@/app/utils/Icons/IconLeft";
import IconRight from "@/app/utils/Icons/IconRight";
import type { Company } from "@/app/types";
import "swiper/css";
import { useState, useEffect, useCallback } from "react";

type CarouselBasicProps = {
  slides: Company[];
};

export default function CarouselBasic({ slides }: CarouselBasicProps) {
  const [showNavigation, setShowNavigation] = useState(false);

  const updateNavigationVisibility = useCallback(() => {
    if (!slides || slides.length === 0) {
      setShowNavigation(false);
      return;
    }

    const viewportWidth = window.innerWidth;
    let visibleSlides = 2.5; // Default slides visible on mobile

    if (viewportWidth >= 480) {
      visibleSlides = 9; // Slides visible on desktop
    }

    setShowNavigation(slides.length > visibleSlides);
  }, [slides]);

  useEffect(() => {
    updateNavigationVisibility();

    window.addEventListener("resize", updateNavigationVisibility);

    return () => {
      window.removeEventListener("resize", updateNavigationVisibility);
    };
  }, [updateNavigationVisibility]);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2.5}
        loop={showNavigation}
        navigation={
          showNavigation
            ? {
                prevEl: ".basic-custom-swiper-prev",
                nextEl: ".basic-custom-swiper-next",
              }
            : false
        }
        breakpoints={{
          480: {
            slidesPerView: 9,
          },
        }}
      >
        {slides.map((company, i) => (
          <SwiperSlide key={i}>
            <CardCompanyBasic
              slug={`/empresas/${company.slug}`}
              hoverBgColor={company.background}
              cover={company.logoLight}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <>
          <button className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
            <IconLeft color="currentColor" />
          </button>
          <button className="text-white active:text-black hidden lg:grid hover:bg-[#2D2D33] place-items-center basic-custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
            <IconRight color="currentColor" />
          </button>
        </>
      )}
    </div>
  );
}
