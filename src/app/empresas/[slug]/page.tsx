import SingleCompanyPage from "@/app/views/SingleCompanyPage/SingleCompanyPage";
import { getClient } from "@/lib/apollo-client";
import { GetCompanyBySlug } from "@/app/api/queries";
import { Metadata } from "next";
import favicon from '../../../../public/favicon-directorio.png'

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

export async function generateMetadata({ params }: CompanyProps): Promise<Metadata> {
  const data = await loadData(params.slug);

  if (!data) {
    return {
      title: "Company not found | Directorio Copu",
      description: "No se encontró la empresa solicitada.",
      icons: {icon: favicon.src}
    };
  }

  return {
    title: `${data.attributes.name} | Directorio Copu`,
    description: data.attributes.description || "Descripción de la empresa no disponible.",
    icons: {icon: favicon.src}
  };
}

export default async function Company({ params }: CompanyProps) {
  const data = await loadData(params.slug);
  return <SingleCompanyPage data={data} />;
}
