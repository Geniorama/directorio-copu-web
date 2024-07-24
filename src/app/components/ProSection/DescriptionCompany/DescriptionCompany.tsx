import type { Company } from "@/app/types"

type DescriptionCompanyProps = {
    description?: Company['description']
}

export default function DescriptionCompany({description}:DescriptionCompanyProps) {
  return (
    <>
        {description && description !== "" && (
            <p className="my-5 text-xs max-w-[315px] mx-auto text-[#E9E9E9] leading-5">
            {description}
            </p>
        )}
    </>
  )
}
