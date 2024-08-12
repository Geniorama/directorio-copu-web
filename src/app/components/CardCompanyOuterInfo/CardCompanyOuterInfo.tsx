import { Button } from "@/app/utils/Button";
import type { Company } from "@/app/types";
import IconPlay from "../../../../public/img/btn-play.svg";

type CardCompanyOuterInfoProps = Company & {
    handleOpen?: (reel: string, url: string, name: string, slogan?: string, sectors?: Company['sectors']) => void;
    exactlyMatch?: boolean
}

export default function CardCompanyOuterInfo({
  id,
  name,
  sectors,
  slug,
  tags,
  cover,
  handleOpen,
  reel,
  logoDark,
  logoLight,
  slogan,
  exactlyMatch
}: CardCompanyOuterInfoProps) {
  return (
    <div>
      <div className={` rounded-lg overflow-hidden w-full aspect-video ${exactlyMatch && ' border-2 border-primary-color'}`}>
        <img className="w-full h-full object-cover" src={cover} alt="" />
      </div>

      <div className="py-4 text-left">
        <div className="space-y-1 text-[#C7C7DF]">
          <h2 className="font-bold text-2xl leading-5">{name}</h2>
          <p className="text-sm">
            {sectors?.slice(0,3).map((item) => item.name).join(", ")}
          </p>
          <p className="text-xs">{tags?.slice(0,3).map((item) => item.name).join(", ")}</p>
        </div>

        <div className="inline-flex mt-4 space-x-3">
          <Button href={`/empresas/${slug}`}>Ir al perfil</Button>

          {reel && handleOpen && (
            <Button 
              icon={<img src={IconPlay.src} alt="play video" />}
              color="secondary"
              onClick={()=>handleOpen(reel, `/empresas/${slug}`, name, slogan, sectors)}  
              >
              Reproducir Reel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
