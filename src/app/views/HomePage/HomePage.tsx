"use client";

import React from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterByLetter } from "@/app/components/FilterByLetter";
import { CarouselPro } from "@/app/components/CarouselPro";
import { CarouselBasic } from "@/app/components/CarouselBasic";
import { CarouselPremium } from "@/app/components/CarouselPremium";
import type { Company } from "@/app/types";
import { useState, useEffect } from "react";

interface HomePageProps {
  companiesBasic: Company[];
  companiesPro: Company[];
  companiesPremium: Company[];
}

const transformData = (data: any[]): Company[] => {
  const dataFormat = data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    slug: item.attributes.slug,
    plan: item.attributes.plan.data.attributes,
    background: item.attributes.background,
    logoLight: "http://localhost:1337" + item.attributes.logoLight?.data.attributes.url,
    cover: "http://localhost:1337" + item.attributes.cover?.data.attributes.url,
    sectors: item.attributes.categories.data.map((cat: any) => ({
      name: cat.attributes.name,
      slug: cat.attributes.slug,
    })),
    tags: item.attributes.tags.data.map((tag: any) => ({
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    })),
    // ...item.attributes,
  }));

  return dataFormat;
};

export default function HomePage({
  companiesBasic,
  companiesPro,
  companiesPremium,
}: HomePageProps) {
  const [premiumCompanies, setPremiumCompanies] = useState<Company[]>();
  const [proCompanies, setProCompanies] = useState<Company[]>();
  const [basicCompanies, setBasicCompanies] = useState<Company[]>();

  useEffect(() => {
    setPremiumCompanies(transformData(companiesPremium));
    setProCompanies(transformData(companiesPro));
    setBasicCompanies(transformData(companiesBasic));
  }, [companiesBasic, companiesPremium, companiesPro]);

  return (
    <div className="px-3 lg:pl-10 pb-10">
      <SearchBar />
      <div className="my-4"></div>
      <FilterByLetter />
      <hr className="my-4 border-[#2D2D2D]" />

      {/**
       * PREMIUM LEVEL
       */}
      {premiumCompanies && (
        <div className="lg:w-[90%] mx-auto text-center space-y-4 my-16">
          <h1 className="font-bold text-3xl text-white mb-16">
            Empresas más relevantes
          </h1>
          <CarouselPremium slides={premiumCompanies} />
        </div>

      )}

      {/**
       * PRO LEVEL
       */}
      {proCompanies && (
        <div className="lg:w-[90%] mx-auto space-y-4">
          <h5 className="text-[#C7C7DF]">También puede interesarte</h5>
          <CarouselPro slides={proCompanies} />
        </div>
      )}

      {/**
       * BASIC LEVEL
       */}
      {basicCompanies && (
        <div className="mt-10 lg:w-[90%] mx-auto space-y-4">
          <h5 className="text-[#C7C7DF]">
            Otras empresas que pueden interesarte
          </h5>
          <CarouselBasic slides={basicCompanies} />
        </div>
      )}
    </div>
  );
}
