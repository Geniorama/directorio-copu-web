
type SpecialitiesCompanyProps = {
    specialities?: string[]
}

export default function SpecialitiesCompany({specialities}: SpecialitiesCompanyProps) {
  return (
    <>
      {specialities && specialities.length > 0 && (
        <div className="mb-16">
            <h3 className="text-[#D9D7D7] font-bold text-sm">Especialidades</h3>
            <p className="text-xs max-w-[315px] my-5 mx-auto text-[#E9E9E9]">
            {specialities.join(', ')}
            </p>
        </div>
      )}
    </>
  );
}
