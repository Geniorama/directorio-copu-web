import React from "react";
import Link from "next/link";
import IgIcon from "../../../../../public/img/ig.svg";
import BeHanceIcon from "../../../../../public/img/behance.svg";

const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/copu___/",
    image: IgIcon,
  },

  {
    name: "Behance",
    link: "https://www.behance.net/",
    image: BeHanceIcon,
  },
];

const specialties = [
  "UX/UI Design",
  "Digital Advertising",
  "Apps",
  "Ilustration",
  "Branding",
  "Websites",
  "Art Direction",
  "Copywriting",
  "Business Acceleration",
];

export default function TabContacto() {
  return (
    <article className="text-center">
      <p className="my-5 text-xs max-w-[315px] mx-auto text-[#E9E9E9] leading-5">
        We are a creative accelerator company. We work with the best talented
        people in LATAM to create amazing apps, websites, digital campaigns,
        ilustrations and other cool things to help companies to increase their
        value in the market through design and technology.
      </p>

      <ul className="flex gap-10 justify-center items-center my-16">
        {socialMedia.map((item, i) => (
          <li key={i}>
            <Link href={"#"}>
              <img src={item.image.src} />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mb-16">
        <h3 className="text-[#D9D7D7] font-bold text-sm">Especialidades</h3>
        <p className="text-xs max-w-[315px] my-5 mx-auto text-[#E9E9E9]">
          {specialties.join(", ")}
        </p>
      </div>

      <div className="grid grid-cols-2 max-w-[315px] mx-auto">
        {/* Content left */}
        <div>
          <div>
            <h5 className="text-[#D9D7D7] font-bold text-sm">Sitio web</h5>
            <Link
              className="text-[#C7C7DF] text-xs underline leading-7"
              href={"/"}
              target="_blank"
            >
              www.bitoinc.net
            </Link>
          </div>

          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">Celular</h5>
            <ul>
              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>

              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">NIT</h5>
            <p className="text-[#C7C7DF] text-xs leading-7">343454553422</p>
          </div>
        </div>

        {/* Content right */}
        <div>
          <div>
            <h5 className="text-[#D9D7D7] font-bold text-sm">Sector</h5>
            <p className="text-[#C7C7DF] text-xs leading-7">
              Servicios de diseño
            </p>
          </div>

          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">Correos</h5>
            <ul>
              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>

              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={"/"}
                  target="_blank"
                >
                  {`(+57) 301 3083035`}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">Sede</h5>
            <p className="text-[#C7C7DF] text-xs leading-7">Bogotá D.C / Miami</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#D9D7D7] font-bold text-sm mt-20 mb-5">Dirección</h3>
      </div>
    </article>
  );
}
