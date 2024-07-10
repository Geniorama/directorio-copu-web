import { TitleWidget } from "@/app/utils/TitleWidget";
import Icon from "../../../../../public/img/category.svg";
import useFilter from "@/app/hooks/useFilter";
import { sectors } from "@/app/data/sectors";

export default function WidgetSectores() {

  const { addSector, sector, addAllSectors } = useFilter()

  return (
    <div>
      <TitleWidget title="Sectores Creativos" icon={<img src={Icon.src} />} />

      <ul className="text-xs mt-4 max-h-[30vh] overflow-y-scroll custom-scroll">
        <li onClick={addAllSectors} className={`py-1 cursor-pointer ${sector.includes('all') ? 'text-primary-color font-bold' : 'font-light'}`}>Todos los sectores creativos</li>
        {sectors.map((item) => (
          <li onClick={() => addSector(item.name)} className={`py-1 hover:font-bold cursor-pointer transition ${sector.includes(item.name) ? 'text-primary-color font-bold' : 'font-light'}`} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
