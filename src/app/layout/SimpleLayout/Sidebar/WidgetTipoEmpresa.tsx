"use client"

import React from 'react'
import { TitleWidget } from '@/app/utils/TitleWidget'
import Icon from '../../../../../public/img/group.svg'
import { useState } from 'react'


const companyTypes = [
  {
    title: 'Multinacional',
    slug: 'multinacional'
  },

  {
    title: 'Mediana',
    slug: 'mediana'
  },

  {
    title: 'Estudio',
    slug: 'estudio'
  },

  {
    title: 'Empresa personal',
    slug: 'empresa-personal'
  }
]

export default function WidgetTipoEmpresa() {
  const [typeCompany, setTypeCompany] = useState<string[]>([])

  function addType(value: string){
    const itemExists = typeCompany.findIndex(item => item === value)

    if(itemExists < 0){
        console.log('No existe')
        setTypeCompany([...typeCompany, value])
    } else {
        console.log('Existe')
        const updatedState = typeCompany.filter(item => item !== value)
        setTypeCompany(updatedState)
    }
    
  }
 
  return (
    <div>
        <TitleWidget
            icon={<img src={Icon.src} />}
            title='Tipo de empresa'
        />

        <div className='text-xs mt-3'>
            {companyTypes.map((companyType, i) => (
              <button key={i} onClick={() => addType(companyType.title)} className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes(companyType.title) ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover'}`}>{companyType.title}</button>
            ))}
        </div>
    </div>
  )
}
