import { TitleWidget } from "@/app/utils/TitleWidget";
import Icon from "../../../../../public/img/category.svg";
import useFilter from "@/app/hooks/useFilter";

const sectores = [
  {
    id: 1,
    name: "Sector 1",
  },

  {
    id: 2,
    name: "Sector 2",
  },

  {
    id: 3,
    name: "Sector 3",
  },

  {
    id: 4,
    name: "Sector 3",
  },

  {
    id: 5,
    name: "Sector 3",
  },

  {
    id: 6,
    name: "Sector 3",
  },

  {
    id: 7,
    name: "Sector 3",
  },

  {
    id: 8,
    name: "Sector 3",
  },
];

export default function WidgetSectores() {

  const { addSector, sector, addAllSectors } = useFilter()

  return (
    <div>
      <TitleWidget title="Sectores Creativos" icon={<img src={Icon.src} />} />

      <ul className="text-xs mt-4 max-h-[30vh] overflow-y-scroll custom-scroll">
        <li onClick={addAllSectors} className={`py-[2px] cursor-pointer ${sector.includes('all') ? 'text-primary-color font-bold' : 'font-light'}`}>Todos los sectores creativos</li>
        {sectores.map((item) => (
          <li onClick={() => addSector(item.name)} className={`py-[2px] hover:font-bold cursor-pointer transition ${sector.includes(item.name) ? 'text-primary-color font-bold' : 'font-light'}`} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
