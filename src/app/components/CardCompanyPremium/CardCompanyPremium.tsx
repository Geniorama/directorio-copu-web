import type { Company } from "@/app/types";
import { Button } from "@/app/utils/Button";
import IconPlay from "../../../../public/img/btn-play.svg";


type CardCompanyPremiumProps = Company & {
  handleOpen: (reel: string, url: string) => void;
}

export default function CardCompanyPremium({
  name,
  logoLight,
  cover,
  slug,
  reel,
  tags,
  sectors,
  handleOpen
}: CardCompanyPremiumProps) {
  
  const firstSectorName = sectors && sectors.length >= 1 && sectors[0].name
  return (
    <>
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="relative flex flex-col justify-between p-6 bg-cover bg-no-repeat w-full aspect-video rounded-3xl overflow-hidden"
      >
        <div
          style={{
            background:
              "linear-gradient(202deg, rgba(0, 0, 0, 0.00) 56.14%, rgba(0, 0, 0, 0.84) 84.01%)",
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Layer opacity */}
        </div>
        <div className="flex justify-end text-right relative">
          {logoLight && (
            <img
              className="w-40 max-h-[50px] object-cover"
              src={logoLight}
              alt=""
            />
          )}
        </div>

        <div className="flex justify-between items-end relative">
          <div className="text-left text-[#C7C7DF]">
            <h2 className="text-4xl font-bold">{name}</h2>
            <h5 className="text-xl">
              {firstSectorName}
            </h5>
            <p className="text-sm">
              {tags?.map((tag) => tag.name).join(", ")}
            </p>
          </div>

          <div className="w-44 space-y-2">
            <Button href={`/empresas/${slug}`}>Ir al perfil</Button>
            {reel && (
              <Button
                icon={<img src={IconPlay.src} alt="play video" />}
                color="secondary"
                onClick={()=>handleOpen(reel, `/empresas/${slug}`)}
              >
                Reproducir Reel
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
