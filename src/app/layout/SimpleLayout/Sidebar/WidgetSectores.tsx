import { TitleWidget } from "@/app/utils/TitleWidget";
import Icon from "../../../../../public/img/category.svg";

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
  return (
    <div>
      <TitleWidget title="Sectores Creativos" icon={<img src={Icon.src} />} />

      <ul className="text-xs mt-4 max-h-[30vh] overflow-y-scroll custom-scroll">
        <li className="py-[2px]">Todos los sectores creativos</li>
        {sectores.map((item) => (
          <li className="py-[2px]" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
