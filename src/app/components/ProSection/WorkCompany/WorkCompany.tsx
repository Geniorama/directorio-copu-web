import type { Company } from "@/app/types";

type WorkCompanyProps = {
    work?: Company['work']
}

export default function WorkCompany({work}: WorkCompanyProps) {
  return (
    <>
      {work && work.length > 0 && (
        <>
          <div className="mt-16 md:mt-32">
            <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl mb-16 md:mb-28">
              Trabajo destacado
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {work.length > 0 &&
              work.map((item, i) => (
                <div key={i}>
                  <img
                    className="w-full aspect-square object-cover"
                    src={item.url}
                    alt={item.name}
                    title={item.name}
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}
