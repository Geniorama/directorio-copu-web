"use client";

import React from "react";
import IconSearch from "../../../../public/img/search.svg";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { useRouter, usePathname } from 'next/navigation';

type SearchBarProps = {
  placeholder?: string;
  backgroundColor?: string
}

export default function SearchBar({placeholder, backgroundColor}: SearchBarProps) {
  const searchValue = useAppSelector((state) => state.searchReducer.value);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(pathname === "/"){
      const inputValue = (e.target as HTMLInputElement).value;
      router.push(`/?s=${inputValue}`);
    }
  };

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (pathname !== "/" && e.key === 'Enter') {
      e.preventDefault();
      const inputValue = (e.target as HTMLInputElement).value;
      router.push(`/?s=${inputValue}`);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${backgroundColor ? backgroundColor : 'bg-secondary-color'} p-3 rounded-full`}>
      <img src={IconSearch.src} alt="" />
      <input
        defaultValue={searchValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="bg-transparent w-full outline-none text-lg"
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
