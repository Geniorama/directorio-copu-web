import { PlansPage } from "@/app/views/PlansPage"
import { getClient } from "@/lib/apollo-client"
import { GetPlans } from "@/app/api/queries"
import { Metadata } from "next"
import favicon from '../../../../public/favicon-directorio.png'

async function loadData() {
  const {data} = await getClient().query(GetPlans)
  return data.plans.data
}

export const metadata: Metadata = {
  title: "Planes Directorio | Directorio Copu",
  description: "Conoce los planes de suscripción",
  icons: {icon: favicon.src}
};

export default async function Plans() {
  const plans = await loadData()
  return (
    <PlansPage
      data={plans}
    />
  )
}
