import React from 'react'
import { ButtonCircle } from '@/app/utils/ButtonCircle'

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


export default function FilterByLetter() {
  return (
    <div className='flex gap-2 items-center text-sm'>
        <span>Filtra por letra</span>
        <div className='flex gap-2'>
            <button className='bg-primary-color p-2 height-[40px] text-text-dark font-bold rounded-full'>Aleatorio</button>
            {abc.map((letter, i) => (
                <ButtonCircle key={i}>{letter}</ButtonCircle>
            ))}
        </div>
    </div>
  )
}
