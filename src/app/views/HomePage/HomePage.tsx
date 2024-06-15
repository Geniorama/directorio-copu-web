import React from 'react'
import { SearchBar } from '@/app/components/SearchBar'
import { FilterByLetter } from '@/app/components/FilterByLetter'



export default function HomePage() {
  return (
    <div className='px-3 pl-10'>
      <SearchBar />
      <div className='my-4'></div>
      <FilterByLetter />
      <hr className='my-4 border-[#2D2D2D]'/>
    </div>
  )
}
