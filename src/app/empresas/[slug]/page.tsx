import SingleCompanyPage from "@/app/views/SingleCompanyPage/SingleCompanyPage";
import { getClient } from "@/lib/apollo-client";
import { GetCompanyBySlug } from "@/app/api/queries";
import type { Metadata, ResolvingMetadata } from "next";

type CompanyProps = {
  params: { slug: string };
};

const contexDefault = {
  fetchOptions: {
    next: { revalidate: 10 },
    // cache: 'no-store'
  },
};

async function loadData(slug: string) {
  const res = await getClient().query({
    query: GetCompanyBySlug,
    variables: { slug },
    fetchPolicy: "no-cache",
    context: contexDefault,
  });

  return res.data.companies.data[0];
}

// Define la función para generar metadata dinámica
// export async function generateMetadata(
//   { params }: CompanyProps,
//   _: ResolvingMetadata
// ): Promise<Metadata> {
//   const data = await loadData(params.slug);
//   console.log(data)
//   return {
//     title: data?.name || "Company Page",
//     description: data?.description || "Default description for the company page",
//     // Agrega otros metadatos si es necesario
//   };
// }

export default async function Company({ params }: CompanyProps) {
  const data = await loadData(params.slug);
  return <SingleCompanyPage data={data} />;
}
