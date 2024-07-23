
import { getClient } from "@/lib/apollo-client";
import { HomePage } from "../views/HomePage";
import { GetCompaniesBasic, GetCompaniesPremium, GetCompaniesPro, GetSectors, GetCountries} from "@/app/api/queries";

async function loadData(){
  const basic = await getClient().query(GetCompaniesBasic);
  const pro = await getClient().query(GetCompaniesPro)
  const premium = await getClient().query(GetCompaniesPremium);
  const sectors = await getClient().query(GetSectors);
  const countries = await getClient().query(GetCountries);
  

  return {
    companiesBasic: basic.data.companies.data,
    companiesPro: pro.data.companies.data,
    companiesPremium: premium.data.companies.data,
    sectors: sectors.data.categories.data,
    countries: countries.data.countries.data
  }
}

export default async function Home() {
  const {companiesBasic, companiesPro, companiesPremium, sectors, countries} = await loadData()
  
  return(
    <HomePage 
      companiesPro={companiesPro} 
      companiesBasic={companiesBasic}
      companiesPremium={companiesPremium}
      sectors={sectors}
      countries={countries}
    />
  )
}
