"use client";

import React from "react";
import { SearchBar } from "@/app/components/SearchBar";
import { FilterByLetter } from "@/app/components/FilterByLetter";
import { CarouselPro } from "@/app/components/CarouselPro";
import { CarouselBasic } from "@/app/components/CarouselBasic";
import { CarouselPremium } from "@/app/components/CarouselPremium";
import { GridCompanyBasic } from "@/app/components/GridCompanyBasic";
import { CarouselProOuterInfo } from "@/app/components/CarouselPro";
import { ModalReel } from "@/app/components/ModalReel";
import type { Company, Sector, Country } from "@/app/types";
import { useState, useEffect } from "react";
import { Tag } from "@/app/utils/Tag";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import {
  removeSector,
  setInitialSectors,
  setInitialCountries,
  removeCountry
} from "@/lib/features/searchSlice";

interface HomePageProps {
  companiesBasic: Company[];
  companiesPro: Company[];
  companiesPremium: Company[];
  sectors: Sector[];
  countries: Country[];
}

export default function HomePage({
  companiesBasic,
  companiesPro,
  companiesPremium,
  sectors,
  countries,
}: HomePageProps) {
  const [premiumCompanies, setPremiumCompanies] = useState<Company[]>();
  const [proCompanies, setProCompanies] = useState<Company[]>();
  const [basicCompanies, setBasicCompanies] = useState<Company[]>();
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    reel: "",
    url: "",
  });

  const searchValue = useAppSelector((state) => state.searchReducer.value);
  const selectedSectors = useAppSelector(
    (state) => state.searchReducer.selectedSectors
  );
  const selectedCountry = useAppSelector(
    (state) => state.searchReducer.selectedCountry
  );

  const dispatch = useAppDispatch();

  const transformData = (data: any[]): Company[] => {
    const dataFormat = data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      slug: item.attributes.slug,
      plan: item.attributes.plan.data.attributes,
      background: item.attributes.background,
      reel: item.attributes.youtubeReelId,
      logoLight:
        "http://localhost:1337" +
        item.attributes.logoLight?.data.attributes.url,
      cover:
        "http://localhost:1337" + item.attributes.cover?.data.attributes.url,
      sectors: item.attributes.categories.data.map((cat: any) => ({
        name: cat.attributes.name,
        slug: cat.attributes.slug,
      })),
      tags: item.attributes.tags.data.map((tag: any) => ({
        name: tag.attributes.name,
        slug: tag.attributes.slug,
      })),
      countries: item.attributes.countries.data.map((country: any) => ({
        name: country.attributes.name,
        slug: country.attributes.slug,
      })),
    }));

    return dataFormat;
  };

  const transformDataSectors = (data: any[]): Sector[] => {
    const dataFormat = data.map((sector) => ({
      id: sector.attributes.slug,
      name: sector.attributes.name,
      slug: sector.attributes.slug,
    }));

    return dataFormat;
  };

  const transformDataCountries = (data: any[]): Country[] => {
    return data.map((country) => ({
      id: country.attributes.slug,
      name: country.attributes.name,
      slug: country.attributes.slug, // Asegúrate de que cada país tenga un slug
    }));
  };

  const handleToggleModal = () => setOpenModal(!openModal);
  const handleOpenModal = (reel: string, url: string) => {
    setDataModal({
      reel: reel,
      url: url,
    });
    setOpenModal(true);
  };

  useEffect(() => {
    setPremiumCompanies(transformData(companiesPremium));
    setProCompanies(transformData(companiesPro));
    setBasicCompanies(transformData(companiesBasic));
  }, [companiesBasic, companiesPremium, companiesPro]);

  useEffect(() => {
    dispatch(setInitialSectors(transformDataSectors(sectors)));
    dispatch(setInitialCountries(transformDataCountries(countries)));
  }, [dispatch, sectors, countries]);

  const filterCompanies = (companies?: Company[]) => {
    if (!companies) return [];

    return companies.filter((company) => {
      const matchesSearchValue =
        company.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        company.sectors?.some((sector) =>
          sector.name.toLowerCase().includes(searchValue.toLowerCase())
        ) ||
        company.tags?.some((tag) =>
          tag.name.toLowerCase().includes(searchValue.toLowerCase())
        );

      const matchesSectorsFilter =
        selectedSectors.length === 0 ||
        company.sectors?.some((sector) =>
          selectedSectors.some(
            (filterSector) => filterSector.slug === sector.slug
          )
        );

      const matchesCountryFilter =
        !selectedCountry ||
        company.countries?.some(
          (country) => country.slug === selectedCountry.slug
        );

      return matchesSearchValue && matchesSectorsFilter && matchesCountryFilter;
    });
  };

  const filteredPremiumCompanies = filterCompanies(premiumCompanies);
  const filteredProCompanies = filterCompanies(proCompanies);
  const filteredBasicCompanies = filterCompanies(basicCompanies);

  return (
    <div className="px-3 lg:pl-10 pb-10">
      {/* Modal Reel */}
      {openModal && (
        <ModalReel
          reel={dataModal.reel}
          url={dataModal.url}
          handleClose={handleToggleModal}
        />
      )}

      <SearchBar />
      <div className="my-4"></div>
      <FilterByLetter />
      <hr className="my-4 border-[#2D2D2D]" />

      <div className="flex items-center gap-3 mb-5">
        {selectedSectors.length > 0 &&
          selectedSectors.map((sector) => (
            <Tag
              text={sector.name}
              key={sector.slug}
              filter="sector"
              handleClose={() => dispatch(removeSector(sector))}
            />
          ))}

        {selectedCountry && (
          <Tag 
            text={selectedCountry.name} 
            filter="location" 
            handleClose={() => dispatch(removeCountry())}  
          />
        )}
      </div>

      {/**
       * PREMIUM LEVEL
       */}
      {filteredPremiumCompanies && filteredPremiumCompanies.length > 0 && (
        <div className="lg:w-[90%] mx-auto text-center space-y-4 my-16">
          <h1 className="font-bold text-3xl text-white mb-16">
            Empresas más relevantes
          </h1>
          <CarouselPremium
            handleOpen={handleOpenModal}
            slides={filteredPremiumCompanies}
          />
        </div>
      )}

      {/**
       * PRO LEVEL
       */}
      {filteredProCompanies && filteredProCompanies.length > 0 && (
        <div className="lg:w-[90%] mx-auto space-y-4">
          <h5 className="text-[#C7C7DF]">También puede interesarte</h5>

          <div className=" hidden lg:block">
            <CarouselPro slides={filteredProCompanies} />
          </div>

          <div className=" lg:hidden">
            <CarouselProOuterInfo slides={filteredProCompanies} />
          </div>
        </div>
      )}

      {/**
       * BASIC LEVEL
       */}
      {filteredBasicCompanies && filteredBasicCompanies.length > 0 && (
        <div className="mt-10 lg:w-[90%] mx-auto space-y-4">
          <h5 className="text-[#C7C7DF]">
            Otras empresas que pueden interesarte
          </h5>

          <div className=" hidden lg:block">
            <CarouselBasic slides={filteredBasicCompanies} />
          </div>

          <div className=" lg:hidden">
            <GridCompanyBasic items={filteredBasicCompanies} />
          </div>
        </div>
      )}
    </div>
  );
}
