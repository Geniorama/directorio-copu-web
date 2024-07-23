import { TitleWidget } from "@/app/utils/TitleWidget";
import Icon from "../../../../../public/img/category.svg";
// import { sectors } from "@/app/data/sectors";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { filterSector } from "@/lib/features/searchSlice";
import { resetSectors } from "@/lib/features/searchSlice";

export default function WidgetSectores() {
  const dispatch = useAppDispatch()
  const sectors = useAppSelector(state => state.searchReducer.allSectors)
  const selectedSectors = useAppSelector(state => state.searchReducer.selectedSectors)

  // Ordenar los sectores alfabéticamente por el nombre
  const sortedSectors = [...sectors].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <TitleWidget title="Sectores Creativos" icon={<img src={Icon.src} />} />

      <ul className="text-xs mt-4 max-h-[30vh] overflow-y-scroll custom-scroll">
        <li onClick={() => dispatch(resetSectors())} className={`py-1 cursor-pointer ${selectedSectors.length === 0 ? 'text-primary-color font-bold' : 'font-light'}`}>Todos los sectores creativos</li>
        {sortedSectors.length > 0 && sortedSectors.map((item) => (
          <li onClick={() => dispatch(filterSector(item))} className={`py-1 hover:font-bold cursor-pointer transition ${selectedSectors.some(sector => sector.slug === item.slug) ? 'text-primary-color font-bold' : 'font-light'}`} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
