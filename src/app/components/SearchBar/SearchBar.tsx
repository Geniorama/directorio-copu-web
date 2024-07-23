'use client'

import React from 'react'
import IconSearch from '../../../../public/img/search.svg'
import useIsMobile from '@/lib/hooks/useIsMobile'
import { useAppSelector, useAppDispatch } from '@/lib/hooks/hooks'
import { filterSearch } from '@/lib/features/searchSlice'


export default function SearchBar() {
  const isMobile = useIsMobile()
  const searchValue = useAppSelector(state => state.searchReducer.value)
  const dispatch = useAppDispatch()

  return (
    <div className='flex gap-3 bg-secondary-color p-3 rounded-full'>
        <img src={IconSearch.src} alt="" />
        <input defaultValue={searchValue} onChange={(e)=>dispatch(filterSearch(e.target.value))} className='bg-transparent w-full outline-none' type="search" placeholder={isMobile ? 'Buscar...' : 'Busca las empresas más relevantes del sector creativo'} />
    </div>
  )
}
