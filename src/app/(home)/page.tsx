import { getClient } from "@/lib/apollo-client";
import { HomePage } from "../views/HomePage";
import {
  GetCompaniesBasic,
  GetCompaniesPremium,
  GetCompaniesPro,
  GetSectors,
  GetCountries,
  GetTypes
} from "@/app/api/queries";

const contexDefault = {
  fetchOptions:{
    next: { revalidate: 5 }
  }
}

function shuffleArray(array:any) {
  const arrayCopy = [...array]; // Hacer una copia del array
  return arrayCopy.sort(() => Math.random() - 0.5);
}

async function loadData() {
  const basic = await getClient().query({
    query: GetCompaniesBasic,
    context: contexDefault,
    variables: {
      limit: 100,
      offset: 0,
    }
  });
  const pro = await getClient().query({
    query: GetCompaniesPro,
    context: contexDefault,
    variables: {
      limit: 100,
      offset: 0,
    }
  });
  const premium = await getClient().query({
    query: GetCompaniesPremium,
    context: contexDefault,
    variables: {
      limit: 100,
      offset: 0,
    }
  });
  const sectors = await getClient().query({
    query: GetSectors,
    context: contexDefault
  });
  const countries = await getClient().query({
    query: GetCountries,
    context: contexDefault
  });
  const types = await getClient().query({
    query: GetTypes,
    context: contexDefault
  });

  console.log("basic", (basic.data.companies.data).length);

  const shuffledPremium = shuffleArray(premium.data.companies.data);
  const shuffledPro = shuffleArray(pro.data.companies.data)
  const shuffledBasic = shuffleArray(basic.data.companies.data)

  return {
    companiesBasic: shuffledBasic,
    companiesPro: shuffledPro,
    companiesPremium: shuffledPremium,
    sectors: sectors.data.categories.data,
    countries: countries.data.countries.data,
    types: types.data.types.data,
  };
}

export default async function Home() {
  
  const {
    companiesBasic,
    companiesPro,
    companiesPremium,
    sectors,
    countries,
    types,
  } = await loadData();

  return (
    <HomePage
      companiesPro={companiesPro}
      companiesBasic={companiesBasic}
      companiesPremium={companiesPremium}
      sectors={sectors}
      countries={countries}
      types={types}
    />
  );
}
