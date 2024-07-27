import { Button } from "@/app/utils/Button"
import type { Company } from "@/app/types";

export default function CardCompanyOuterInfo({name, sectors, slug, tags, cover}: Company) {
  return (
    <div>
        <div className=" rounded-lg overflow-hidden">
            <img src={cover} alt="" />
        </div>

       <div className="py-4 text-left">
            <div className="space-y-1 text-[#C7C7DF]">
                <h2 className="font-bold text-2xl leading-5">{name}</h2>
                <p className="text-sm" >{sectors?.map((item) => item.name).join(', ')}</p>
                <p className="text-xs">
                    {tags?.map((item) => item.name).join(', ')}
                </p>
            </div>

            <div className="inline-flex mt-4 space-x-3">
                <Button href={`/empresas/${slug}`}>
                    Ir al perfil
                </Button>

                <Button color="secondary" href={`/empresas/${slug}`}>
                    Reproducir Reel
                </Button>
            </div>
        </div> 
    </div>
  )
}
