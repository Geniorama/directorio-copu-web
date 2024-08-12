import IconClose from '../../../../public/img/btn-close.svg'
import { YouTubeVideo } from '@/app/utils/YouTubeVideo'
import Link from 'next/link'
import type { Company } from '@/app/types'

type ModalReelProps = {
    name: Company['name']
    reel: Company['reel'],
    slogan?: Company['slogan']
    url: string,
    sectors?: Company['sectors']
    handleClose: () => void
}

export default function ModalReel({reel, handleClose, url, name, slogan, sectors}:ModalReelProps) {
  console.log(sectors)
  return (
    <div>
      <div className="fixed z-[2000] w-screen bg-[rgba(0,0,0)] left-0 top-0 h-screen overflow-hidden max-h-screen grid place-items-center p-4">
          <div className="w-full max-w-[900px]">
            <div className="text-right mb-2">
              <button
                onClick={handleClose}
                className="w-[50px] h-[50px] bg-[#32323B] inline-grid place-items-center rounded-full"
              >
                <img src={IconClose.src} alt="" />
              </button>
            </div>
            <div className="mb-8">
              <YouTubeVideo videoId={reel} />
            </div>

            <div className="text-[#C7C7DF] lg:flex justify-between items-center">
              <div className="lg:text-left mb-10 lg:mb-0">
                <h3 className="text-4xl font-bold">{name}</h3>
                <h5 className="text-xl">{slogan}</h5>
                {sectors && sectors.length > 0 && (
                  <p className="text-sm">
                    {sectors.map(sector => sector.name).join(', ')}
                  </p>
                )}
              </div>

              <div className=" space-x-4">
                <Link
                  href={url}
                  className="bg-primary-color text-center font-bold lg:font-normal text-secondary-color lg:text-[#C7C7DF] lg:bg-secondary-color-light p-5 px-10 rounded-full min-w-40 lg:min-w-52 inline-block"
                >
                  Ir al perfil
                </Link>

                <button 
                  onClick={handleClose}
                  className="bg-secondary-color-light p-5 px-10 rounded-full min-w-40 lg:min-w-52 font-bold lg:font-normal">
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
