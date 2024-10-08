"use client";

import { useAppSelector, useAppDispatch } from "@/lib/hooks/hooks";
import { filterSearch } from "@/lib/features/searchSlice";

export default function NotFound() {
  const allSectors = useAppSelector((state) => state.searchReducer.allSectors);
  const dispatch = useAppDispatch();

  return (
    <div className="lg:h-[60vh] flex flex-col gap-4 justify-center items-center p-5 text-center">
      <p className=" text-lg lg:text-2xl font-light lg:text-[35px] max-w-[1200px] lg:leading-10 mb-10 lg:mb-0">
        No se ha podido encontrar ningún resultado para esta búsqueda. ¿Tal vez
        probar con alguno de estos temas?
      </p>

      <ul className="flex gap-12 max-w-[900px] flex-wrap text-center justify-center flex-col lg:flex-row">
        {allSectors &&
          allSectors.length > 0 &&
          allSectors.slice(0, 5).map((sector) => (
            <li onClick={() => dispatch(filterSearch(sector.name))} key={sector.slug}>
              <span className="text-xl lg:text-2xl underline font-light cursor-pointer hover:opacity-70 transition">{sector.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
