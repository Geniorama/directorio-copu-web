"use client"
import { useState, useEffect, useContext } from "react"

const useFilter = () => {
   const[sector, setSector] = useState<string[]>(["all"])
   const[location, setLocation] = useState('Colombia')
   const[typeCompany, setTypeCompany] = useState([])

   function addSector(value: string){
      const itemExists = sector.findIndex(item => item === value)

      if(itemExists < 0){
         setSector([...sector, value])
      } else {
         const updatedState = sector.filter(item => item !== value)
         setSector(updatedState)
      }
   }
   
   function addAllSectors(){
      setSector(['all'])
   }

   return {
    addSector,
    addAllSectors,
    sector
   }
}

export default useFilter