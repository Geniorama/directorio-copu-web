"use client";

import LogoBito from "../../../../../public/img/logo-bito.svg";
import LogoGeniorama from "../../../../../public/img/logo-geniorama.svg";
import Link from "next/link";
import LogoFb from "../../../../../public/img/logo-fb.svg";
import IgIcon from "../../../../../public/img/ig.svg";
import YtIcon from "../../../../../public/img/yt-icon.svg";
import LinkedInIcon from "../../../../../public/img/linkedin-icon.svg";
import MailIcon from "../../../../../public/img/mail.svg";
import ThreadsIcon from "../../../../../public/img/threads-icon.svg";
import Xicon from "../../../../../public/img/x-icon.svg";
import TikTokIcon from "../../../../../public/img/tik-tok-icon.svg";

import { useEffect } from "react";

const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/copublicitarias",
    image: LogoFb,
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/copu___/",
    image: IgIcon,
  },

  {
    name: "YouTube",
    link: "https://www.youtube.com/@Copu___",
    image: YtIcon,
  },

  {
    name: "TikTok",
    link: "https://www.tiktok.com/@copu___",
    image: TikTokIcon,
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/10370518/admin/feed/posts/",
    image: LinkedInIcon,
  },

  {
    name: "Mail",
    link: "mailto:directorio@copu.media",
    image: MailIcon,
  },

  {
    name: "Threads",
    link: "https://www.threads.net/@copu___",
    image: ThreadsIcon,
  },

  {
    name: "X",
    link: "https://twitter.com/copu___",
    image: Xicon,
  },
];

export default function Footer() {
  useEffect(() => {
    const listItems = document.querySelectorAll(".social-nav-list li a img");

    // Aligment elements in social nav
    if (listItems.length > 0) {
      listItems.forEach((item, i) => {
        if (i === 3 || i === 7) {
          item.classList.add("ml-auto");
        } else if (i === 0 || i === 4) {
          item.classList.add("mr-auto");
        } else {
          item.classList.add("mx-auto");
        }
      });
    }
  }, []);

  return (
    <footer className="bg-secondary-color-light text-xs p-5 flex md:justify-between flex-col-reverse md:flex-row">
      <div className="md:w-1/3">
        <p className="flex gap-1 mt-9 md:mt-0">
          <span>Designed by</span>
          <Link href={"https://bitoinc.net/"} target="_blank">
            <img src={LogoBito.src} alt="" />
          </Link>
          <span>&</span>
          <Link href={"https://geniorama.co/"} target="_blank">
            <img src={LogoGeniorama.src} alt="" />
          </Link>
        </p>
      </div>

      <div className="md:w-1/3">
        <ul className="social-nav-list text-center grid grid-cols-4 md:flex md:justify-center gap-10 md:gap-6 my-10 md:my-0">
          {socialMedia.map((item, i) => (
            <li key={i}>
              <Link title={item.name} href={item.link} target="blank">
                <img
                  className="h-5 md:h-4"
                  src={item.image.src}
                  alt={item.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex gap-20 md:w-1/3 justify-end">
        <Link
          className=" underline md:no-underline pt-5 block md:pt-0 hover:underline"
          href={"/tyc"}
          target="_blank"
        >
          Términos y condiciones
        </Link>
        <Link
          className=" underline md:no-underline pt-5 block md:pt-0 hover:underline"
          href={"/habeasdata"}
          target="_blank"
        >
          Tratamiento de datos
        </Link>
        <Link
          className=" underline md:no-underline pt-5 block md:pt-0 hover:underline"
          href={"https://wa.link/mgi9db"}
          target="_blank"
        >
          Contacto
        </Link>
        <p className=" py-9 md:py-0">2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}
