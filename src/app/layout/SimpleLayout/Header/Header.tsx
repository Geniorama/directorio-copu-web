"use client"

import LogoCopu from '../../../../../public/img/logo-copu.svg';
import Link from 'next/link';
import { Switch } from '@/app/utils/Switch';
import { Button } from '@/app/utils/Button';
import WpIcon from '../../../../../public/img/wp-icon.svg';
import MenuIcon from '../../../../../public/img/menu-icon.svg';
import { useState, useEffect } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const buttonOpen = document.getElementById('button-open-menu')
    if(buttonOpen){
       if(openMenu){
            buttonOpen.classList.add('hidden')
            buttonOpen.classList.remove('block')
       } else {
            buttonOpen.classList.add('block')
            buttonOpen.classList.remove('hidden')
       }
    }
  }, [openMenu])

  function handleMenu(){
    setOpenMenu(!openMenu)
  }

  return (
    <header className="bg-text-dark text-text-light p-3">
        <div className='flex justify-between items-center'>
            <div className="text-lg flex gap-2 items-center">
                <span>Directorio de</span>
                <img src={LogoCopu.src} alt="" />
            </div>
            
            <button id='button-open-menu' onClick={handleMenu} className='lg:hidden'>
                <img src={MenuIcon.src} alt="" />
            </button>

            <nav className='text-xs hidden lg:flex gap-20 items-center'>
                <ul className='flex gap-20 items-center'>
                    <li><Link href={'#'}>Qué es el directorio</Link></li>
                    <li><Link href={'#'}>Planes</Link></li>
                    <li>
                        <Button
                            icon={<img src={WpIcon.src} alt='whatsapp' />}
                            href='/contacto'
                            >
                            Contacto
                        </Button>
                    </li>
                </ul>
                <Switch />
            </nav>
        </div>

        {openMenu && (
            <div className='h-screen'>
                <h1 onClick={handleMenu}>Close menu</h1>
            </div>
        )}
    </header>
  )
}
