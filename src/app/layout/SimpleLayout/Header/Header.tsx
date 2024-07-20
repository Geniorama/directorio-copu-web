"use client";

import LogoCopu from "../../../../../public/img/logo-copu.svg";
import Link from "next/link";
import { Switch } from "@/app/components/Switch";
import { Button } from "@/app/utils/Button";
import WpIcon from "../../../../../public/img/wp-icon.svg";
import MenuIcon from "../../../../../public/img/menu-icon.svg";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sidebar } from "../Sidebar";
import CloseIcon from "../../../../../public/img/btn-close.svg";
import IconFilter from "../../../../../public/img/tune.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const buttonOpen = document.getElementById("button-open-menu");
    if (buttonOpen) {
      if (openMenu) {
        buttonOpen.classList.add("hidden");
        buttonOpen.classList.remove("block");
      } else {
        buttonOpen.classList.add("block");
        buttonOpen.classList.remove("hidden");
      }
    }
  }, [openMenu]);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  function handleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <header className="fixed w-full lg:relative z-50 bg-secondary-color-light text-text-light py-5">
      <div className="flex justify-between items-center px-4">
        <Link className="text-lg flex gap-2 items-center" href={"/"}>
          <span>Directorio de</span>
          <img src={LogoCopu.src} alt="Logo Copu" />
        </Link>

        {!openSidebar && (
          <button
            id="button-open-menu"
            onClick={handleMenu}
            className="lg:hidden"
          >
            <img src={MenuIcon.src} alt="" />
          </button>
        )}

        {openMenu && (
          <button
            id="button-close-menu"
            onClick={handleMenu}
            className="lg:hidden"
          >
            <img src={CloseIcon.src} alt="" />
          </button>
        )}

        <nav className="text-xs hidden lg:flex gap-20 items-center">
          <ul className="flex gap-20 items-center">
            <li>
              <Link
                href={"/que-es"}
                className={`hover:text-primary-color transition ${
                  pathname === "/que-es" ? "text-primary-color" : "text-white"
                }`}
              >
                Qué es el directorio
              </Link>
            </li>
            <li>
              <Link
                href={"/planes"}
                className={`hover:text-primary-color transition ${
                  pathname === "/planes" ? "text-primary-color" : "text-white"
                }`}
              >
                Planes
              </Link>
            </li>
            <li>
              <Button
                icon={<img src={WpIcon.src} alt="whatsapp" />}
                href="/contacto"
              >
                Contacto
              </Button>
            </li>
          </ul>
          <Switch />
        </nav>
      </div>

      {openSidebar && !openMenu && (
        <div className="h-screen">
          <Sidebar handleSidebar={handleSidebar} />
        </div>
      )}

      {openMenu && !openSidebar && (
        <div className="h-screen mt-5">
          <ul className="text-[#D7D7D7] font-light text-lg">
            <li className="border-t border-t-[#696969] py-6 px-4">
              <Link href={"/que-es"}>Qué es el directorio</Link>
            </li>
            <li className="border-t border-t-[#696969] py-6 px-4">
              <Link href={"/que-es"}>Planes</Link>
            </li>
            <li className="border-t border-t-[#696969] py-6 px-4">
              <Link href={"/que-es"}>Contacto</Link>
            </li>
            <li className="border-y border-y-[#696969] py-6 px-4">
              <Link href={"/que-es"}>Web Copu</Link>
            </li>
          </ul>
        </div>
      )}

      {!openMenu && (
        <div className=" fixed bottom-3 right-3 lg:hidden">
          <button
            onClick={handleSidebar}
            className=" bg-primary-color w-[50px]  h-[50px] rounded-full flex justify-center items-center"
          >
            <img src={IconFilter.src} alt="" />
          </button>
        </div>
      )}
    </header>
  );
}
