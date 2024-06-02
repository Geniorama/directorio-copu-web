import React from 'react'
import { TitleWidget } from '@/app/utils/TitleWidget'
import Icon from '../../../:./../../../public/img/distance.svg'
import { Select } from '@/app/utils/Select'
import { countries } from '@/app/api/countries'

const options = [
    {
        value: 'AR',
        name: 'Argentina'
    },

    {
        value: 'CO',
        name: 'Colombia'
    }
]

export default function WidgetUbicacion() {
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
        />
    </div>
  )
}
