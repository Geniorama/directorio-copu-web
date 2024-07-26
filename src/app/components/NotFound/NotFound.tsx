"use client";

import { useAppSelector } from "@/lib/hooks/hooks";

export default function NotFound() {
  const allSectors = useAppSelector((state) => state.searchReducer.allSectors);

  return (
    <div className="h-[60vh] flex flex-col gap-4 justify-center items-center p-5 text-center">
      <p className="font-light text-[35px] max-w-[1200px]">
        No se ha podido encontrar ningún resultado para esta búsqueda. ¿Tal vez
        probar con alguno de estos temas?
      </p>

      <ul className="flex gap-12">
        {allSectors &&
          allSectors.length > 0 &&
          allSectors.map((sector) => (
            <li key={sector.slug}>
              <span className="text-2xl underline font-light cursor-pointer hover:opacity-70 transition">{sector.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
