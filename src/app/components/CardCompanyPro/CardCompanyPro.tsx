import { Button } from "@/app/utils/Button"

interface CardCompanyProProps {
    name?: string;
    area?: string;
    href?: string;
    tags?: string;
    bgImage?: string;
}

export default function CardCompanyPro({name, area, href, tags, bgImage}: CardCompanyProProps) {
  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className="aspect-video rounded-2xl text-[#C7C7DF] flex items-end bg-cover bg-no-repeat overflow-hidden relative">
        <div className=" flex justify-between items-end gap-10 w-full p-3">
            <div>
                <h2 className="font-bold text-2xl leading-5">Geniorama</h2>
                <p className="text-lg">Desarrollo web</p>
                <p className="text-xs">
                    Advertising, Marketing Digital
                </p>
            </div>

            <div>
                <Button href={href}>
                    Ir al perfil
                </Button>
            </div>
        </div>
    </div>
  )
}
