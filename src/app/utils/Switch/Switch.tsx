"use client"

import React from 'react';
import { useState, useEffect } from 'react';

export default function Switch() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const textOn = document.getElementById('on-state')?.innerText
    const textOff = document.getElementById('off-state')?.innerText
    const badge = document.getElementById('badge-switch')

    if(badge && textOn && textOff){
        if(on){
            badge.style.right = '5px'
            badge.innerText = textOn
            
        } else {
            badge.style.right = '185px'
            badge.innerText = textOff
            setTimeout(()=>{
                location.href = "https://copu.media"
                console.log('redireccionando')
            }, 300)
        }
    }
    
  }, [on])

  function handleClick(){
    setOn(!on)
  }

  return (
    <div onClick={handleClick} className='text-xs cursor-pointer bg-secondary-color-light p-1 flex font-bold rounded-full relative text-center'>
        <div id='badge-switch' className='transition-all px-8 py-1 rounded-full bg-primary-color text-primary-color absolute whitespace-nowrap right-[5px] w-[180px]'>
            {/* <span className='opacity-0 whitespace-nowrap text-primary-color'>Directorio Copu</span> */}
        </div>
        <div id='off-state' className='px-8 py-1 rounded-full relative w-[180px]'>
            <span className={`${on ? 'text-text-light' : 'text-text-dark'}`}>Web Copu</span>
        </div>
        <div id='on-state' className='px-8 py-1 rounded-full relative whitespace-nowrap w-[180px]'>
            <span className={`${on ? 'text-text-dark' : 'text-text-light'}`}>Directorio Copu</span>
        </div>
    </div>
  )
}
