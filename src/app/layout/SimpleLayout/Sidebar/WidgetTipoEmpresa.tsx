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
            <button onClick={() => addType('Multinacionales')} className={`text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Multinacionales') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light'}`}>Multinacionales</button>
            <button onClick={() => addType('Medianas')} className={`text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Medianas') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light'}`}>Medianas</button>
            <button onClick={() => addType('Estudios')} className={`text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Estudios') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light'}`}>Estudios</button>
            <button onClick={() => addType('Empresas personales')} className={`text-left w-full border p-3 rounded-full mb-2 outline-none ${typeCompany.includes('Empresas personales') ? 'bg-primary-color text-secondary-color font-bold border-primary-color' : 'bg-secondary-color-light'}`}>Empresas personales</button>
        </div>
    </div>
  )
}
