import LogoBito from '../../../../../public/img/logo-bito.svg'
import LogoGeniorama from '../../../../../public/img/logo-geniorama.svg'
import Link from 'next/link'
import LogoFb from '../../../../../public/img/logo-fb.svg'

export default function Footer() {
  return (
    <footer className='bg-secondary-color-light text-xs p-3 flex justify-between'>
      <div className='md:w-1/3'>
        <p className='flex gap-1'>
          <span>Designed by</span>
          <img src={LogoBito.src} alt="" />
          <span>&</span>
          <img src={LogoGeniorama.src} alt="" />
        </p>
      </div>

      <div className='md:w-1/3'>
        <ul className='flex justify-center gap-3'>
          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>

          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>

          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>

          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>

          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>

          <li>
            <Link href={"/"} target='blank'>
              <img className='w-4' src={LogoFb.src} alt="" />
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex gap-20 md:w-1/3 justify-end'>
        <Link href={"/contacto"}>Contacto</Link>
        <p>2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}
