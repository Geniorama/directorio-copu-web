"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/utils/Button";
interface CardFullWidthProps {
  bgImage?: string;
  bgImageMobile?: string;
  title?: string;
  description?: string;
  link?: { text: string; href?: string; target?: string };
}

export default function CardFullWidth({
  bgImage,
  bgImageMobile,
  title,
  description,
  link,
}: CardFullWidthProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    screen.width <= 900 ? setIsMobile(true) : setIsMobile(false);

    window.addEventListener("resize", () => {
      screen.width <= 900 ? setIsMobile(true) : setIsMobile(false);
    });
  }, [setIsMobile]);

  return (
    <div
      style={{
        backgroundImage: `url(${!isMobile && bgImage})`,
        backgroundPosition: "right center",
      }}
      className={`bg-cover bg-no-repeat lg:p-10 lg:h-[576px] flex items-center lg:bg-black lg:rounded-2xl overflow-hidden text-[#E9E9E9]`}
    >
      <div className=" space-y-7 lg:w-1/3 mt-12 lg:mt-0">
        {isMobile && bgImageMobile && (
          <img src={bgImageMobile} alt="" className="w-full rounded-2xl" />
        )}
        {title && (
          <h2 className="text-3xl lg:text-5xl font-bold text-white">{title}</h2>
        )}
        {description && (
          <p
            className="text-xs"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {link && (
          <div className="inline-block">
            <Button href={link.href} target={link.target}>
              {link.text}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
