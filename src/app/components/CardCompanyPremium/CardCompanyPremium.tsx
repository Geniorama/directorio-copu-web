"use Client";

import type { Company } from "@/app/types";
import { Button } from "@/app/utils/Button";
import IconPlay from "../../../../public/img/btn-play.svg";
import { useState } from "react";
import { YouTubeVideo } from "@/app/utils/YouTubeVideo";
import IconClose from "../../../../public/img/close_small.svg";
import Link from "next/link";

export default function CardCompanyPremium({
  name,
  logoLight,
  logoDark,
  id,
  cover,
  slug,
  reel,
  tags,
  sectors,
}: Company) {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => setOpenModal(!openModal);
  const firstSectorName = sectors && sectors.length >= 1 && sectors[0].name
  return (
    <>
      {/* Modal Reel */}
      {reel && openModal && (
        <div className="fixed z-[2000] bg-[rgba(0,0,0)] left-0 top-0 w-full h-screen overflow-hidden max-h-screen grid place-items-center p-4">
          <div className="w-full max-w-[900px]">
            <div className="text-right mb-2">
              <button
                onClick={handleToggleModal}
                className="w-[50px] h-[50px] bg-[#32323B] inline-grid place-items-center rounded-full"
              >
                <img src={IconClose.src} alt="" />
              </button>
            </div>
            <div className="mb-8">
              <YouTubeVideo videoId={reel} />
            </div>

            <div className="text-[#C7C7DF] lg:flex justify-between items-center">
              <div className="lg:text-left mb-10 lg:mb-0">
                <h3 className="text-4xl font-bold">Bito Inc</h3>
                <h5 className="text-xl">Creative Acelerator</h5>
                <p className="text-sm">UX/UI, Product Design, Branding</p>
              </div>

              <div className=" space-x-4">
                <Link
                  href={`/empresas/${slug}`}
                  className="bg-primary-color font-bold lg:font-normal text-secondary-color lg:text-[#C7C7DF] lg:bg-secondary-color-light p-5 px-10 rounded-full min-w-40 lg:min-w-52 inline-block"
                >
                  Ir al perfil
                </Link>

                <button className="bg-secondary-color-light p-5 px-10 rounded-full min-w-40 lg:min-w-52 font-bold lg:font-normal">
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="relative flex flex-col justify-between p-6 bg-cover bg-no-repeat w-full aspect-video rounded-3xl overflow-hidden"
      >
        <div
          style={{
            background:
              "linear-gradient(202deg, rgba(0, 0, 0, 0.00) 56.14%, rgba(0, 0, 0, 0.84) 84.01%)",
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Layer opacity */}
        </div>
        <div className="flex justify-end text-right relative">
          {logoLight && (
            <img
              className="w-40 max-h-[50px] object-cover"
              src={logoLight}
              alt=""
            />
          )}
        </div>

        <div className="flex justify-between items-end relative">
          <div className="text-left text-[#C7C7DF]">
            <h2 className="text-4xl font-bold">{name}</h2>
            <h5 className="text-xl">
              {firstSectorName}
            </h5>
            <p className="text-sm">
              {tags?.map((tag) => tag.name).join(", ")}
            </p>
          </div>

          <div className="w-44 space-y-2">
            <Button href={`/empresas/${slug}`}>Ir al perfil</Button>
            {reel && (
              <Button
                icon={<img src={IconPlay.src} alt="play video" />}
                color="secondary"
                onClick={handleToggleModal}
              >
                Reproducir Reel
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
