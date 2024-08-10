import type { Company } from "@/app/types"
import { AwardsGrid } from "../../PremiumSection"

type TabPremiosProps = {
    awards: Company['awards']
}

export default function TabPremios({awards}:TabPremiosProps) {
  return (
    <article>
        <AwardsGrid awards={awards} />
    </article>
  )
}
