import React from 'react'
import { TitleWidget } from '@/app/utils/TitleWidget'
import Icon from '../../../:./../../../public/img/distance.svg'
import { Select } from '@/app/utils/Select'
// import { countries } from '@/app/api/countries'
import { useAppSelector, useAppDispatch } from '@/lib/hooks/hooks'
import { useDispatch } from 'react-redux'
import { setCountry } from '@/lib/features/searchSlice'
import type { Country } from '@/app/types'

export default function WidgetUbicacion() {
  const countries = useAppSelector(state => state.searchReducer.allCountries)
  const selectedCountry = useAppSelector(state => state.searchReducer.selectedCountry)
  const dispatch = useDispatch()

  const handleCountrySelect = (country: Country) => {
    dispatch(setCountry(country));
  };

  return (
    <div>
        <TitleWidget
            icon={<img src={Icon.src} />}
            title='Ubicación'
        />

        <div className='mt-5'>
            {/* Spacing */}
        </div>
        <Select 
            options={countries} 
            onSelect={handleCountrySelect}
            selectedCountry={selectedCountry}
        />
    </div>
  )
}
