"use client";

import React from "react";
import { TitleWidget } from "@/app/utils/TitleWidget";
import Icon from "../../../../../public/img/group.svg";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { filterType } from "@/lib/features/searchSlice";

// const companyTypes = [
//   {
//     title: 'Multinacional',
//     slug: 'multinacional'
//   },

//   {
//     title: 'Mediana',
//     slug: 'mediana'
//   },

//   {
//     title: 'Estudio',
//     slug: 'estudio'
//   },

//   {
//     title: 'Empresa personal',
//     slug: 'empresa-personal'
//   }
// ]

export default function WidgetTipoEmpresa() {
  // const [typeCompany, setTypeCompany] = useState<string[]>([])
  const companyTypes = useAppSelector((state) => state.searchReducer.allTypes);
  const selectedTypes = useAppSelector(
    (state) => state.searchReducer.selectedTypes
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <TitleWidget icon={<img src={Icon.src} />} title="Tipo de empresa" />

      <div className="text-xs mt-3">
        {companyTypes.map((companyType, i) => (
          <button
            key={i}
            onClick={() => dispatch(filterType(companyType))}
            className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${
              selectedTypes.some((type) => type.slug === companyType.slug)
                ? "bg-primary-color text-secondary-color font-bold border-primary-color"
                : "bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover"
            }`}
          >
            {companyType.title}
          </button>
        ))}
      </div>
    </div>
  );
}
