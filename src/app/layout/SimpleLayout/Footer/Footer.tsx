"use client"

import LogoBito from "../../../../../public/img/logo-bito.svg";
import LogoGeniorama from "../../../../../public/img/logo-geniorama.svg";
import Link from "next/link";
import LogoFb from "../../../../../public/img/logo-fb.svg";
import IgIcon from "../../../../../public/img/ig.svg";
import BeHanceIcon from "../../../../../public/img/behance.svg";
import { useEffect } from "react";

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

export default function Footer() {
  useEffect(()=>{
    const listItems = document.querySelectorAll('.social-nav-list li a img')
    
    // Aligment elements in social nav
    if(listItems.length > 0){
      listItems.forEach((item, i) => {
        if(i === 3 || i === 7){
          console.log(item)
          item.classList.add('ml-auto')
        } else if(i === 0 || i === 4){
          item.classList.add('mr-auto')
        } else {
          item.classList.add('mx-auto')
        }
      })
    }
  }, [])

  return (
    <footer className="bg-secondary-color-light text-xs p-3 flex md:justify-between flex-col-reverse md:flex-row">
      <div className="md:w-1/3">
        <p className="flex gap-1 mt-9 md:mt-0">
          <span>Designed by</span>
          <img src={LogoBito.src} alt="" />
          <span>&</span>
          <img src={LogoGeniorama.src} alt="" />
        </p>
      </div>

      <div className="md:w-1/3">
        <ul className="social-nav-list text-center grid grid-cols-4 md:flex md:justify-center gap-10 md:gap-6 my-10 md:my-0">
          {socialMedia.map((item, i) => (
            <li key={i}>
              <Link href={item.link} target="blank">
                <img className="h-5 md:h-4" src={item.image.src} alt={item.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex gap-20 md:w-1/3 justify-end">
        <Link
          className=" underline md:no-underline pt-5 block md:pt-0"
          href={"/contacto"}
        >
          Contacto
        </Link>
        <p className=" py-9 md:py-0">2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}
