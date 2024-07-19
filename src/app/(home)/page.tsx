import { HomePage } from "../views/HomePage";

async function fetchCompanies(){
  const response = await fetch('http://localhost:1337/api/companies',{
    cache: "no-store"
  })
  const data = await response.json();

  return data
}



export default async function Home() {
  const data = await fetchCompanies()
  console.log(data)
  return (
    <HomePage 
      companies={data.data}
    />
  )
}


