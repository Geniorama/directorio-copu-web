import React from 'react'
import IconSearch from '../../../../public/img/search.svg'
import useIsMobile from '@/app/hooks/useIsMobile'

export default function SearchBar() {
  const isMobile = useIsMobile()

  return (
    <div className='flex gap-3 bg-secondary-color p-3 rounded-full'>
        <img src={IconSearch.src} alt="" />
        <input className='bg-transparent w-full outline-none' type="search" placeholder={isMobile ? 'Buscar...' : 'Busca las empresas más relevantes del sector creativo'} />
    </div>
  )
}
