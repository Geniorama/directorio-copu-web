"use client"

import SingleCompanyPage from "@/app/views/SingleCompanyPage/SingleCompanyPage"
import { useState } from "react"

export default function Company() {
  const [plan, setPlan] = useState({})
  const [active, setActive] = useState(true)
  const [section, setSection] = useState('inicio')

  function handleTab(name: string){
    setSection(name)
  }

  return (
    <SingleCompanyPage
      section={section}
      handleTab={handleTab}
    />
  )
}
