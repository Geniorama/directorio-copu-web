"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import ArrowUpWhite from '../../../../public/img/arrow_drop_down.svg'
import type { Country, City } from "@/app/types";

interface SelectProps {
  selectedCountry: Country;
  onSelect: (city: City) => void;
}

export default function SelectCity({ selectedCountry, onSelect }: SelectProps) {
  const [value, setValue] = useState("");
  const [openList, setOpenList] = useState(false);
  const [cities, setCities] = useState<City[]>();
  const [allCities, setAllCities] = useState<City[]>();
  const selectRef = useRef<HTMLDivElement>(null);
  

  function isValidCity(name: string) {
    return cities?.some((city) => city.name === name);
  }

  function handleClick(e: React.MouseEvent<HTMLLIElement>) {
    const text = e.currentTarget.innerText;
    const selectedCity = cities?.find(city => city.name === text)
    if (selectedCity) {
      setValue(text);
      onSelect(selectedCity);
    }
    setOpenList(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setValue(text);

    const filtered = allCities?.filter((option) =>
      option.name.toLowerCase().includes(text.toLowerCase())
    );
    setCities(filtered);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setOpenList(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[selectRef])


  useEffect(()=>{
    if(selectedCountry){
        const countrySlug = selectedCountry.slug
        const apiUrl = `https://copu-directorio-dashboard-c4049c4424ba.herokuapp.com/api/cities?filters[country][slug][$eq]=${countrySlug}&sort=name:asc`

        const fetchCities = async () => {
            const res = await fetch(apiUrl)
            const data = await res.json()
            console.log(data.data)
            const dataFormat = data.data.map((city:any )=> ({
                name: city.attributes.name,
                slug: city.attributes.slug
            }))

            setAllCities(dataFormat);
            setCities(dataFormat);
            setValue("");
        }
        fetchCities();
    }
    
  },[selectedCountry])
  

  return (
    <div className="text-xs relative" ref={selectRef}>
      <div className="relative flex items-center">
        <input
          type="text"
          className={`border p-3 w-full outline-none focus:border-primary-color ${
            value.length > 0 && isValidCity(value)
              ? "bg-primary-color border-primary-color text-secondary-color font-bold"
              : "bg-secondary-color-light border-white text-[#cccccc]"
          }`}
          placeholder="Elige una ciudad"
          value={value}
          onClick={() => setOpenList(!openList)}
          onChange={(e) => handleChange(e)}
        />

        <span className="absolute right-2">
          <img className={`w-[15px] ${openList || isValidCity(value) && 'brightness-0'}`} src={ArrowUpWhite.src} alt="" />
        </span>
      </div>
      {openList && cities && cities.length > 0 && (
        <ul className="bg-[#080809] max-h-[200px] overflow-y-scroll custom-scroll mt-1 absolute w-full">
          {cities.map((option) => (
            <li
              key={option.slug}
              className="p-3 hover:bg-secondary-color border-b border-[#2D2D2D] cursor-pointer option"
              onClick={(e) => handleClick(e)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
