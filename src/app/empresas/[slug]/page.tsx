import SingleCompanyPage from "@/app/views/SingleCompanyPage/SingleCompanyPage"
import { getClient } from "@/lib/apollo-client"
import { GetCompanyBySlug } from "@/app/api/queries"

type CompanyProps = {
  params: {slug:string}
}

async function loadData(slug: string) {
   const res = await getClient().query({
    query: GetCompanyBySlug,
    variables: { slug },
    fetchPolicy: 'no-cache'
   })

   return res.data.companies.data[0]
} 

export default async function Company({params}:CompanyProps) {
  const data = await loadData(params.slug)
  return (
    <SingleCompanyPage
      data={data}
    />
  )
}
