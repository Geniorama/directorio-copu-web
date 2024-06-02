import React from 'react'
import IconSearch from '../../../../public/img/search.svg'

export default function SearchBar() {
  return (
    <div className='flex gap-3 bg-secondary-color p-3 rounded-full'>
        <img src={IconSearch.src} alt="" />
        <input className='bg-transparent w-full outline-none' type="search" placeholder='Busca las empresas más relevantes del sector creativo' />
    </div>
  )
}
