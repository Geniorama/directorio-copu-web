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
import type { Company, Sector, Country, Type } from "@/app/types";
import { useState, useEffect } from "react";
import { Tag } from "@/app/utils/Tag";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { NotFound } from "@/app/components/NotFound";
import {
  removeSector,
  setInitialSectors,
  setInitialCountries,
  removeCountry,
  setInitialTypes,
  removeType,
} from "@/lib/features/searchSlice";
import {
  transformDataCompanies,
  transformDataSectors,
  transformDataCountries,
  transformDataTypes,
} from "@/app/utils/formatters";
import { CardCompanyPremium } from "@/app/components/CardCompanyPremium";

interface HomePageProps {
  companiesBasic: Company[];
  companiesPro: Company[];
  companiesPremium: Company[];
  sectors: Sector[];
  countries: Country[];
  types: Type[];
}

export default function HomePage({
  companiesBasic,
  companiesPro,
  companiesPremium,
  sectors,
  countries,
  types,
}: HomePageProps) {
  const [premiumCompanies, setPremiumCompanies] = useState<Company[]>();
  const [proCompanies, setProCompanies] = useState<Company[]>();
  const [basicCompanies, setBasicCompanies] = useState<Company[]>();
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState<{
    reel: string;
    url: string;
    name: string;
    slogan?: string;
  }>({
    reel: "",
    url: "",
    name: "",
    slogan: "",
  });

  const searchValue = useAppSelector((state) => state.searchReducer.value);
  const selectedSectors = useAppSelector(
    (state) => state.searchReducer.selectedSectors
  );
  const selectedCountry = useAppSelector(
    (state) => state.searchReducer.selectedCountry
  );
  const selectedTypes = useAppSelector(
    (state) => state.searchReducer.selectedTypes
  );

  const dispatch = useAppDispatch();

  const handleToggleModal = () => setOpenModal(!openModal);
  const handleOpenModal = (
    reel: string,
    url: string,
    name: string,
    slogan?: string
  ) => {
    setDataModal({
      reel,
      url,
      name,
      slogan,
    });
    setOpenModal(true);
  };

  useEffect(() => {
    setPremiumCompanies(transformDataCompanies(companiesPremium));
    setProCompanies(transformDataCompanies(companiesPro));
    setBasicCompanies(transformDataCompanies(companiesBasic));
  }, [companiesBasic, companiesPremium, companiesPro]);

  useEffect(() => {
    dispatch(setInitialSectors(transformDataSectors(sectors)));
    dispatch(setInitialCountries(transformDataCountries(countries)));
    dispatch(setInitialTypes(transformDataTypes(types)));
  }, [dispatch, sectors, countries, types]);

  const filterCompanies = (companies?: Company[]) => {
    if (!companies) return [];

    return companies.filter((company) => {
      // Filter by words in search
      const matchesSearchValue =
        company.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        company.sectors?.some((sector) =>
          sector.name.toLowerCase().includes(searchValue.toLowerCase())
        ) ||
        company.tags?.some((tag) =>
          tag.name.toLowerCase().includes(searchValue.toLowerCase())
        );

      // Filters by sector
      const matchesSectorsFilter =
        selectedSectors.length === 0 ||
        company.sectors?.some((sector) =>
          selectedSectors.some(
            (filterSector) => filterSector.slug === sector.slug
          )
        );

      // Filter by types
      const matchesTypesFilter =
        selectedTypes.length === 0 ||
        selectedTypes.some(
          (filterType) => filterType.slug === company.type?.slug
        );

      // Filter by country
      const matchesCountryFilter =
        !selectedCountry ||
        company.countries?.some(
          (country) => country.slug === selectedCountry.slug
        );

      return (
        matchesSearchValue &&
        matchesSectorsFilter &&
        matchesCountryFilter &&
        matchesTypesFilter
      );
    });
  };

  const filteredPremiumCompanies = filterCompanies(premiumCompanies);
  const filteredProCompanies = filterCompanies(proCompanies);
  const filteredBasicCompanies = filterCompanies(basicCompanies);

  const noResultsFound =
    filteredPremiumCompanies.length === 0 &&
    filteredProCompanies.length === 0 &&
    filteredBasicCompanies.length === 0;

  const totalResults =
    filteredPremiumCompanies.length +
    filteredProCompanies.length +
    filteredBasicCompanies.length;

  return (
    <div className="px-3 lg:pl-10 pb-10">
      {/* Modal Reel */}
      {openModal && (
        <ModalReel
          reel={dataModal.reel}
          url={dataModal.url}
          handleClose={handleToggleModal}
          name={dataModal.name}
          slogan={dataModal.slogan}
        />
      )}

      <SearchBar />
      <div className="my-4"></div>
      <FilterByLetter />
      <hr className="my-4 border-[#2D2D2D]" />

      <div className="flex items-center gap-2 mb-5 flex-wrap">
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

        {selectedTypes &&
          selectedTypes.length > 0 &&
          selectedTypes.map((type) => (
            <Tag
              key={type.slug}
              text={type.title}
              filter="type"
              handleClose={() => dispatch(removeType(type))}
            />
          ))}

        {!noResultsFound && totalResults && (
          <span className="ml-2 mt-2 lg:mt-0 text-sm font-light lg:inline-block block w-full lg:w-auto">
            {totalResults} {totalResults === 1 ? "Resultado" : "Resultados"}
          </span>
        )}
      </div>

      {noResultsFound ? (
        <NotFound />
      ) : (
        <>
          {/**
           * PREMIUM LEVEL
           */}
          {filteredPremiumCompanies && filteredPremiumCompanies.length > 0 && (
            <div className="lg:w-[90%] mx-auto text-center space-y-4 my-16">
              <h1 className="font-bold text-3xl text-white mb-16">
                Empresas más relevantes
              </h1>
              {filteredPremiumCompanies.length === 1 ? (
                <div className="w-full max-w-[741px]">
                  <CardCompanyPremium
                    id={filteredPremiumCompanies[0].id}
                    name={filteredPremiumCompanies[0].name}
                    slug={filteredPremiumCompanies[0].slug}
                    cover={filteredPremiumCompanies[0].cover}
                    sectors={filteredPremiumCompanies[0].sectors}
                    tags={filteredPremiumCompanies[0].tags}
                    logoDark={filteredPremiumCompanies[0].logoDark}
                    logoLight={filteredPremiumCompanies[0].logoLight}
                    reel={filteredPremiumCompanies[0].reel}
                    handleOpen={handleOpenModal}
                  />
                </div>
              ) : (
                <CarouselPremium
                  handleOpen={handleOpenModal}
                  slides={filteredPremiumCompanies}
                />
              )}
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
        </>
      )}
    </div>
  );
}
