import { getClient } from "../lib/apollo-client";
import { HomePage } from "../views/HomePage";
import { gql } from "@apollo/client";
import { GetCompaniesBasic, GetCompaniesPremium, GetCompaniesPro } from "../api/queries";

async function loadData(){
  const basic = await getClient().query(GetCompaniesBasic);
  const pro = await getClient().query(GetCompaniesPro)
  const premium = await getClient().query(GetCompaniesPremium);

  return {
    companiesBasic: basic.data.companies.data,
    companiesPro: pro.data.companies.data,
    companiesPremium: premium.data.companies.data
  }
}

export default async function Home() {
  const {companiesBasic, companiesPro, companiesPremium} = await loadData()
  
  return(
    <HomePage 
      companiesPro={companiesPro} 
      companiesBasic={companiesBasic}
      companiesPremium={companiesPremium} 
    />
  )
}
