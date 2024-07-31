"use client";

import { useState } from "react";
import IconFilter from "../../../../../public/img/tune.svg";
import IconCollapse from "../../../../../public/img/vertical_align_bottom.svg";
import WidgetSectores from "./WidgetSectores";
import WidgetUbicacion from "./WidgetUbicacion";
import WidgetTipoEmpresa from "./WidgetTipoEmpresa";
import CloseIcon from "../../../../../public/img/btn-close.svg";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { resetFilters } from "@/lib/features/searchSlice";

type SidebarProps = {
  handleSidebar?: () => void;
};

export default function Sidebar({ handleSidebar }: SidebarProps) {
  const [displaySidebar, setDisplaySidebar] = useState(true)
  const isMobile = useIsMobile();
  const selectedSectors = useAppSelector(
    (state) => state.searchReducer.selectedSectors
  );
  const selectedTypes = useAppSelector(
    (state) => state.searchReducer.selectedTypes
  );
  const selectedCountry = useAppSelector(
    (state) => state.searchReducer.selectedCountry
  );

  const dispatch = useAppDispatch();
  const activeSomeFilters =
    selectedSectors.length > 0 ||
    selectedTypes.length > 0 ||
    selectedCountry !== null;

  const countFilters =
    selectedSectors.length + selectedTypes.length + (selectedCountry ? 1 : 0);

  const handleToggleSidebar = () => {
    setDisplaySidebar(!displaySidebar)
  }

  return (
    <div className={`p-3 h-full transition ${displaySidebar ? 'bg-secondary-color-light p-3 w-full' : 'w-[160px]'}`}>
      <div className="flex gap-2 justify-between">
        <button className="flex items-center text-2xl lg:text-lg  gap-2">
          <img src={IconFilter.src} alt="" />
          <span className="leading-4">Filtrar</span>
          {countFilters !== null && countFilters > 0 && (
            <span className=" text-[8px] inline-flex items-center justify-center leading-4 text-text-dark bg-primary-color w-[14px] h-[14px] rounded-full font-bold">
              {countFilters}
            </span>
          )}
        </button>

        <div className=" hidden lg:block">
          <button
            onClick={handleToggleSidebar}
            className={`w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-secondary-color-hover ${!displaySidebar && 'rotate-180'}`}
          >
            <img src={IconCollapse.src} alt="" />
          </button>
        </div>

        <div className=" lg:hidden">
          <button
            onClick={handleSidebar}
            className={`w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-secondary-color-hover`}
          >
            <img src={CloseIcon.src} alt="" />
          </button>
        </div>
      </div>
      {displaySidebar && (
        <>
          <hr className="border-1 mt-3 mb-5 border-[#2D2D2D]" />
          <WidgetSectores />
          <hr className="border-1 my-5 border-[#2D2D2D]" />
          <WidgetUbicacion />
          <hr className="border-1 my-5 border-[#2D2D2D]" />
          <WidgetTipoEmpresa />
    
          <hr className="border-1 my-5 border-[#2D2D2D] block lg:hidden" />
    
          <div className="flex gap-3 lg:hidden">
            <button
              onClick={() => dispatch(resetFilters())}
              disabled={!activeSomeFilters}
              className=" bg-[#2D2D33] text-white font-light px-6 py-4 rounded-full w-1/2 disabled:text-black"
            >
              Restaurar
            </button>
            <button
              onClick={handleSidebar}
              className=" bg-primary-color text-text-dark font-bold px-6 py-4 rounded-full w-1/2 disabled:bg-[#2D2D33]"
            >
              {!activeSomeFilters ? "Cerrar" : "Aplicar"}
            </button>
          </div>
        </>
      )}
      
    </div>
  );
}
