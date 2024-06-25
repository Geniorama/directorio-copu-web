"use client"

import LogoCopu from '../../../../../public/img/logo-copu.svg';
import Link from 'next/link';
import { Switch } from '@/app/components/Switch';
import { Button } from '@/app/utils/Button';
import WpIcon from '../../../../../public/img/wp-icon.svg';
import MenuIcon from '../../../../../public/img/menu-icon.svg';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()

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
    <header className="bg-secondary-color-light text-text-light p-3">
        <div className='flex justify-between items-center'>
            <Link className='text-lg flex gap-2 items-center' href={'/'}>
                <span>Directorio de</span>
                <img src={LogoCopu.src} alt="Logo Copu" />
            </Link>
            
            <button id='button-open-menu' onClick={handleMenu} className='lg:hidden'>
                <img src={MenuIcon.src} alt="" />
            </button>

            <nav className='text-xs hidden lg:flex gap-20 items-center'>
                <ul className='flex gap-20 items-center'>
                    <li><Link href={'/que-es'} className={`hover:text-primary-color transition ${pathname === '/que-es' ? 'text-primary-color' : 'text-white' }`}>Qué es el directorio</Link></li>
                    <li><Link href={'/planes'} className={`hover:text-primary-color transition ${pathname === '/planes' ? 'text-primary-color' : 'text-white' }`}>Planes</Link></li>
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
