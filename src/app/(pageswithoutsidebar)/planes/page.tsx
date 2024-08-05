import { PlansPage } from "@/app/views/PlansPage"
import { getClient } from "@/lib/apollo-client"
import { GetPlans } from "@/app/api/queries"

async function loadData() {
  const {data} = await getClient().query(GetPlans)
  return data.plans.data
}

export default async function Plans() {
  const plans = await loadData()
  console.log(plans)
  return (
    <PlansPage
      data={plans}
    />
  )
}
