import SingleCompanyPage from "@/app/views/SingleCompanyPage/SingleCompanyPage";
import { getClient } from "@/lib/apollo-client";
import { GetCompanyBySlug } from "@/app/api/queries";

type CompanyProps = {
  params: { slug: string };
};

const contexDefault = {
  fetchOptions: {
    // next: { revalidate: 5 },
    cache: 'no-store'
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

export default async function Company({ params }: CompanyProps) {
  const data = await loadData(params.slug);
  return <SingleCompanyPage data={data} />;
}
