"use client"

import { PlansPage } from "@/app/views/PlansPage"

export default function Plans() {
  
  function handlePlan(route:string){
    window.open(route)
  }

  return (
    <PlansPage
      handlePlan={handlePlan}
    />
  )
}
