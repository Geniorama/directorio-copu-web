"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import ArrowUpWhite from '../../../../public/img/arrow_drop_down.svg'

interface SelectProps {
  options: { code: string; name: string }[];
}

export default function Select(props: SelectProps) {
  const [value, setValue] = useState("");
  const [openList, setOpenList] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(props.options);
  const selectRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLLIElement>) {
    const text = e.currentTarget.innerText;
    setValue(text);
    setOpenList(false);
  }

  function handleClickInput() {
    setOpenList(!openList);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setValue(text);

    const filtered = props.options.filter((option) =>
      option.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  }

  function isValidCountry(name: string) {
    return props.options.some((option) => option.name === name);
  }

  useEffect(() => {
    setFilteredOptions(props.options);

    // Click outside
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
  }, [props.options, selectRef]);

  return (
    <div className="text-xs relative" ref={selectRef}>
      <div className="relative flex items-center">
        <input
          type="text"
          className={`border p-3 w-full outline-none focus:border-primary-color ${
            value.length > 0 && isValidCountry(value)
              ? "bg-primary-color border-primary-color text-secondary-color font-bold"
              : "bg-secondary-color-light border-white text-[#cccccc]"
          }`}
          placeholder="Elige un país"
          value={value}
          onClick={handleClickInput}
          onChange={(e) => handleChange(e)}
        />

        <span className="absolute right-2">
          <img className={`w-[15px] ${openList || isValidCountry(value) && 'brightness-0'}`} src={ArrowUpWhite.src} alt="" />
        </span>
      </div>
      {openList && filteredOptions && filteredOptions.length > 0 && (
        <ul className="bg-[#080809] max-h-[200px] overflow-y-scroll custom-scroll mt-1 absolute w-full">
          {filteredOptions.map((option) => (
            <li
              key={option.code}
              onClick={(e) => handleClick(e)}
              className="p-3 hover:bg-secondary-color border-b border-[#2D2D2D] cursor-pointer option"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
