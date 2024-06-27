import { CardCompanyPro } from "../CardCompanyPro";
import { Swiper, SwiperSlide } from "swiper/react";
import ExampleImage from "../../../../public/img/cover-card-related_enjoy.png";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../../../../public/img/arr-left.svg";
import ArrowRight from "../../../../public/img/arr-right.svg";

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
          prevEl: ".custom-swiper-prev",
          nextEl: ".custom-swiper-next",
        }}
      >
        {[1, 2, 3, 4, 5].map((item, i) => (
          <SwiperSlide key={i}>
            <CardCompanyPro
              id={i}
              name="Geniorama"
              sectors={[
                { id: "1", name: "Web Development", slug: "/web-development" },
                { id: "2", name: "Software", slug: "/software" }
              ]}
              cover={ExampleImage.src}
              slug="/empresas/geniorama"
              countries={[{ id: "co", name: "Colombia", code: "CO" }]}
              tags={[{ id: "agency", title: "Agency", slug: "/agency" }]}
              plan={{ id: "pro", name: "Pro", price: 900 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="hover:bg-[#2D2D33] grid place-items-center custom-swiper-prev w-[40px] h-[40px] rounded-full bg-[#18181B] absolute left-[-60px] top-[calc(50%-20px)] z-5 active:bg-white">
        <img className="w-3" src={ArrowLeft.src} alt="" />
      </button>
      <button className="hover:bg-[#2D2D33] grid place-items-center custom-swiper-next w-[40px] h-[40px] rounded-full bg-[#18181B] absolute right-[-60px] top-[calc(50%-20px)] z-50 active:bg-white">
        <img className="w-3" src={ArrowRight.src} alt="" />
      </button>
    </div>
  );
}
