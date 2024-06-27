import React from 'react'
import { SearchBar } from '@/app/components/SearchBar'
import { FilterByLetter } from '@/app/components/FilterByLetter'
import { CarouselPro } from '@/app/components/CarouselPro'

export default function HomePage() {
  return (
    <div className='px-3 pl-10'>
      <SearchBar />
      <div className='my-4'></div>
      <FilterByLetter />
      <hr className='my-4 border-[#2D2D2D]'/>
      <div className='w-[90%] mx-auto space-y-4'>
        <h5 className='text-[#C7C7DF]'>También puede interesarte</h5>
        <CarouselPro />
      </div>

      <div className='mt-10 w-[90%] mx-auto space-y-4'>
        <h5 className='text-[#C7C7DF]'>Otras empresas que pueden interesarte</h5>
        <CarouselPro />
      </div>
    </div>
  )
}
