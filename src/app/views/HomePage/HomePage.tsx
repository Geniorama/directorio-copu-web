import React from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterByLetter } from "@/app/components/FilterByLetter";
import { CarouselPro } from "@/app/components/CarouselPro";
import { CarouselBasic } from "@/app/components/CarouselBasic";
import { CardCompanyPremium } from "@/app/components/CardCompanyPremium";
import type { Company } from "@/app/types";

interface HomePageProps {
  data: Company[];
}

export default function HomePage({ data }: HomePageProps) {
  return (
    <div className="px-3 pl-10">
      <SearchBar />
      <div className="my-4"></div>
      <FilterByLetter />
      <hr className="my-4 border-[#2D2D2D]" />

      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl text-white">
          Empresas más relevantes
        </h1>
        {data.map((company, i) => (
          <div key={company.id} className="max-w-[800px]">
            <CardCompanyPremium 
              name={company.name} 
              slug={company.slug} 
              id={company.id}
              cover={company.cover}
              tags={company.tags}
              sectors={company.sectors}
              logoLight={company.logoLight}
              reel="t4eGUyO4s54"
            />
          </div>
        ))}
      </div>

      <div className="w-[90%] mx-auto space-y-4">
        <h5 className="text-[#C7C7DF]">También puede interesarte</h5>
        <CarouselPro />
      </div>

      <div className="mt-10 w-[90%] mx-auto space-y-4">
        <h5 className="text-[#C7C7DF]">
          Otras empresas que pueden interesarte
        </h5>
        <CarouselBasic />
      </div>
    </div>
  );
}
