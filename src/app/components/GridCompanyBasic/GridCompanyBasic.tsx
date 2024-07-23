import { CardCompanyBasic } from "../CardCompanyBasic"
import type { Company } from "@/app/types"

type GridCompanyBasicProps = {
    items: Company[]
}

export default function GridCompanyBasic({items}: GridCompanyBasicProps) {
  return (
    <div className=" grid grid-cols-2 gap-4">
        {items.map((company, i) => (
            <CardCompanyBasic 
                key={i}
                hoverBgColor={company.background}
                title={company.name}
                cover={company.logoLight}
                slug={company.slug}
            />
        ))}
    </div>
  )
}
