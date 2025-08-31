import { PlansPage } from "@/app/views/PlansPage"
import { getClient } from "@/lib/apollo-client"
import { GetPlans } from "@/app/api/queries"
import { Metadata } from "next"
import favicon from '../../../../public/favicon-directorio.png'

async function loadData() {
  try {
    const {data} = await getClient().query({
      query: GetPlans
    })
    return data.plans.data
  } catch (error) {
    console.error('Error loading plans:', error)
    return []
  }
}

export const metadata: Metadata = {
  title: "Planes Directorio | Directorio Copu",
  description: "Conoce los planes de suscripción",
  icons: {icon: favicon.src}
};

export default async function Plans() {
  const plans = await loadData()
  
  // Si no hay planes, mostrar una página de error o mensaje
  if (!plans || plans.length === 0) {
    return (
      <div className="container mx-auto pt-16 py-10 px-3">
        <div className="py-6 px-5 lg:px-0">
          <div className="max-w-[450px] mx-auto text-center mb-20">
            <h1 className="text-7xl font-bold text-primary-color">Planes</h1>
            <p className="text-sm">
              No se pudieron cargar los planes en este momento. Por favor, intenta más tarde.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <PlansPage
      data={plans}
    />
  )
}
