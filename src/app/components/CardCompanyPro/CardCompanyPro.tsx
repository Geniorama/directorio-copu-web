import { Button } from "@/app/utils/Button";
import type { Company } from "@/app/types";

export default function CardCompanyPro({
  name,
  sectors,
  slug,
  tags,
  cover,
}: Company) {
  console.log('cover', cover)
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className="aspect-video rounded-2xl text-[#C7C7DF] bg-[#18181B] flex items-end bg-cover bg-no-repeat overflow-hidden relative"
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
      <div className=" flex justify-between items-end gap-10 w-full p-3 relative">
        <div className="space-y-1 text-[#C7C7DF]">
          <h2 className="font-bold text-2xl leading-5">{name}</h2>
          <p className="text-sm">
            {sectors?.map((item) => item.name).join(", ")}
          </p>
          <p className="text-xs">{tags?.map((item) => item.name).join(", ")}</p>
        </div>

        <div>
          <Button href={`/empresas/${slug}`}>Ir al perfil</Button>
        </div>
      </div>
    </div>
  );
}
