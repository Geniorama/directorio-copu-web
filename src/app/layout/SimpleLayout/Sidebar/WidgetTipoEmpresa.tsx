"use client"

import React from 'react'
import { TitleWidget } from '@/app/utils/TitleWidget'
import Icon from '../../../../../public/img/group.svg'
import { useState } from 'react'

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
            <button onClick={() => addType('Multinacionales')} className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Multinacionales') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover'}`}>Multinacionales</button>
            <button onClick={() => addType('Medianas')} className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Medianas') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover'}`}>Medianas</button>
            <button onClick={() => addType('Estudios')} className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Estudios') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover'}`}>Estudios</button>
            <button onClick={() => addType('Empresas personales')} className={`transition text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Empresas personales') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light hover:bg-secondary-color-hover hover:border-secondary-color-hover'}`}>Empresas personales</button>
        </div>
    </div>
  )
}
