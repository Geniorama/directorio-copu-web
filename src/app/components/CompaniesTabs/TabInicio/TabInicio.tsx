"use client";

import type { Company } from "@/app/types";
import { DescriptionCompany, ReelCompany, CarouselClientsCompany, WorkCompany } from "../../ProSection";
// import 'swiper/swiper-bundle.min.css';

type TabInicioProps = {
  description?: string;
  reel?: string;
  clients?: Company['clients'];
  work?: Company['work'];
};

export default function TabInicio({
  description,
  reel,
  clients,
  work
}: TabInicioProps) {

  return (
    <article className="text-center">
      <DescriptionCompany description={description}/>
      <ReelCompany reel={reel} />
      <CarouselClientsCompany clients={clients} />
      <WorkCompany work={work} />
    </article>
  );
}
