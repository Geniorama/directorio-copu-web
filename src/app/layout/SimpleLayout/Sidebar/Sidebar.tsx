import React from 'react'
import IconFilter from '../../../../../public/img/tune.svg'
import IconCollapse from '../../../../../public/img/vertical_align_bottom.svg'
import WidgetSectores from './WidgetSectores'
import WidgetUbicacion from './WidgetUbicacion'
import WidgetTipoEmpresa from './WidgetTipoEmpresa'

export default function Sidebar() {
  return (
    <div className='bg-secondary-color-light p-3 h-full'>
        <div className='flex gap-2 justify-between'>
            <button className='flex items-center gap-2'>
                <img src={IconFilter.src} alt="" />
                <span>Filtrar</span>
            </button>

            <button>
                <img src={IconCollapse.src} alt="" />
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
