"use client";

import React from "react";
import IconSearch from "../../../../public/img/search.svg";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { filterSearch } from "@/lib/features/searchSlice";
import { useEffect, useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  backgroundColor?: string
}

export default function SearchBar({placeholder, backgroundColor}: SearchBarProps) {
  const searchValue = useAppSelector((state) => state.searchReducer.value);
  const [searchInputValue, setSearchInputValue] = useState(searchValue)

  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const searchParams = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchInputValue(inputValue)
    dispatch(filterSearch(inputValue));
  };

  useEffect(() => {
    if(searchParams.get('s')){
      const query = searchParams.get("s");
      if (query && pathname === "/") {
        dispatch(filterSearch(query));
      }
    }
  }, [dispatch, pathname, searchParams])

  useEffect(() => {
    setSearchInputValue(searchValue)
  },[searchValue])

  return (
    <div className={`flex items-center gap-3 ${backgroundColor ? backgroundColor : 'bg-secondary-color'} p-3 rounded-full h-[55px]`}>
      <img src={IconSearch.src} alt="" />
      <input
        onChange={(e) => handleChange(e)}
        className="bg-transparent w-full outline-none text-lg"
        type="search"
        placeholder={placeholder}
        value={searchInputValue}
      />
    </div>
  );
}
