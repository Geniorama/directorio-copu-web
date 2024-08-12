import type { Company } from "@/app/types";
import Link from "next/link";

type AccreditationsGridProps = {
  accreditations: Company["accreditations"];
};

export default function AccreditationsGrid({
  accreditations,
}: AccreditationsGridProps) {
  return (
    <>
      {accreditations && (
        <div className="grid grid-cols-3 gap-10 md:gap-20 mt-10 max-w-[460px] mx-auto">
          {accreditations.map((item, i) => (
            <>
              <Link
                href={item.documentUrl ? item.documentUrl : item.url ? item.url : ''}
                target="_blank"
                key={i}
                className="text-center space-y-3"
              >
                <img
                  className="mx-auto w-12"
                  src={item.image.url}
                  alt={item.image.alternativeText}
                  title={item.name}
                />
                <h5 className="text-[#C7C7DF] text-xs">{item.name}</h5>
              </Link>
            </>
          ))}
        </div>
      )}
    </>
  );
}
