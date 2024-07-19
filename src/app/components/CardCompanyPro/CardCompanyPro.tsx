import { Button } from "@/app/utils/Button"
import type { Company } from "@/app/types";

export default function CardCompanyPro({name, sectors, slug, tags, cover}: Company) {
  return (
    <div style={{backgroundImage: `url(${cover})`}} className="aspect-video rounded-2xl text-[#C7C7DF] flex items-end bg-cover bg-no-repeat overflow-hidden relative">
        <div className=" flex justify-between items-end gap-10 w-full p-3">
            <div className="space-y-1 text-[#C7C7DF]">
                <h2 className="font-bold text-2xl leading-5">{name}</h2>
                <p className="text-xs" >{sectors?.map((item) => item.name).join(', ')}</p>
                <p className="text-[6px]">
                    {tags?.map((item) => item.title).join(', ')}
                </p>
            </div>

            <div>
                <Button href={slug}>
                    Ir al perfil
                </Button>
            </div>
        </div>
    </div>
  )
}
