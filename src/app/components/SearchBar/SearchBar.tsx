"use client";

import React from "react";
import IconSearch from "../../../../public/img/search.svg";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { filterSearch } from "@/lib/features/searchSlice";
import { useRouter } from 'next/navigation';

type SearchBarProps = {
  placeholder?: string;
  backgroundColor?: string
}

export default function SearchBar({placeholder, backgroundColor}: SearchBarProps) {
  const searchValue = useAppSelector((state) => state.searchReducer.value);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSearch(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      router.push(`/?s=${searchValue}`);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${backgroundColor ? backgroundColor : 'bg-secondary-color'} p-3 rounded-full`}>
      <img src={IconSearch.src} alt="" />
      <input
        defaultValue={searchValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyDown}
        className="bg-transparent w-full outline-none text-lg"
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
