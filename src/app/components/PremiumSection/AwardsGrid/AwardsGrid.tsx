import type { Company } from "@/app/types";

type AwardsGridProps = {
  awards: Company["awards"];
};

export default function AwardsGrid({ awards }: AwardsGridProps) {
  return (
    <>
      {awards && (
        <div className="grid grid-cols-3 gap-10 md:gap-20 mt-10 max-w-[460px] mx-auto">
          {awards.map((item, i) => (
            <div key={i} className="text-center space-y-3">
              <img
                className="mx-auto w-12"
                src={item.image.url}
                alt={item.image.alternativeText}
                title={item.name}
              />
              <h5 className="text-[#C7C7DF] text-xs">{item.name}</h5>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
