"use client"

import React from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterByLetter } from "@/app/components/FilterByLetter";
import { CarouselPro } from "@/app/components/CarouselPro";
import { CarouselBasic } from "@/app/components/CarouselBasic";
import { CarouselPremium } from "@/app/components/CarouselPremium";
import type { Company } from "@/app/types";
import { useState, useEffect } from "react";

interface HomePageProps {
  companies: Company[];
}

export default function HomePage({ companies }: HomePageProps) {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>()
  console.log(companies)
  useEffect(()=>{
    if(companies){
      setFilteredCompanies(companies)
    }
  }, [setFilteredCompanies, companies])


  return (
    <div className="px-3 lg:pl-10 pb-10">
      <SearchBar />
      <div className="my-4"></div>
      <FilterByLetter />
      <hr className="my-4 border-[#2D2D2D]" />

      <div className="lg:w-[90%] mx-auto text-center space-y-4 my-16">
        <h1 className="font-bold text-3xl text-white mb-16">
          Empresas más relevantes
        </h1>
        {/* {filteredCompanies && (
          <CarouselPremium 
            slides={filteredCompanies}
          />
        )} */}
      </div>

      <div className="lg:w-[90%] mx-auto space-y-4">
        <h5 className="text-[#C7C7DF]">También puede interesarte</h5>
        <div>
          <CarouselPro />
        </div>
      </div>

      <div className="mt-10 lg:w-[90%] mx-auto space-y-4">
        <h5 className="text-[#C7C7DF]">
          Otras empresas que pueden interesarte
        </h5>
        <CarouselBasic />
      </div>
    </div>
  );
}
