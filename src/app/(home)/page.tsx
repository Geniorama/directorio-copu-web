"use client"

import { HomePage } from "../views/HomePage";
import { companies } from "../data/companies";

export default function Home() {
  return (
    <HomePage 
      companies={companies}
    />
  )
}
