"use client"

import React, { use } from 'react'
import IconFilter from '../../../../../public/img/tune.svg'
import IconCollapse from '../../../../../public/img/vertical_align_bottom.svg'
import WidgetSectores from './WidgetSectores'
import WidgetUbicacion from './WidgetUbicacion'
import WidgetTipoEmpresa from './WidgetTipoEmpresa'
import CloseIcon from '../../../../../public/img/btn-close.svg'
import useIsMobile from '@/app/hooks/useIsMobile'

type SidebarProps = {
  handleSidebar?: () => void
}



export default function Sidebar({handleSidebar}:SidebarProps) {
  const isMobile = useIsMobile()
  
  return (
    <div className='bg-secondary-color-light p-3 h-full'>
        <div className='flex gap-2 justify-between'>
            <button className='flex items-center gap-2'>
                <img src={IconFilter.src} alt="" />
                <span>Filtrar</span>
            </button>

            <button onClick={handleSidebar} className='transition w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-secondary-color-hover'>
                <img src={`${isMobile ? CloseIcon.src : IconCollapse.src}`} alt="" />
            </button>
        </div>
        <hr className='border-1 mt-3 mb-5 border-[#2D2D2D]' />
        <WidgetSectores />
        <hr className='border-1 my-5 border-[#2D2D2D]' />
        <WidgetUbicacion />
        <hr className='border-1 my-5 border-[#2D2D2D]' />
        <WidgetTipoEmpresa />
    </div>
  )
}
