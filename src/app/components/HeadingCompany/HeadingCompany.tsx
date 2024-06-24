import React from 'react'

interface HeadingCompanyProps {
    cover: string,
    imgProfile: string,
    name: string,
    slogan?: string,
    categories?: string[]
}

export default function HeadingCompany(props: HeadingCompanyProps) {
  return (
    <div>
        <div>
          <img src={props.cover} className='w-full h-[113px] md:h-[40vh] object-contain rounded-3xl' alt="" />
        </div>
        <div className='text-center md:mt-[-90px]'>
          <img className='w-[170px]  md:w-[180px] aspect-square object-cover rounded-full mx-auto' src={props.imgProfile} alt="" />

          <div className='my-3 text-[#C7C7DF]'>
            <h1 className='font-bold text-2xl'>{props.name}</h1>
            {props.slogan && (
              <p className='text-lg'>{props.slogan}</p>
            )}

            {props.categories && props.categories.map((item: string, i: number) => (
              <span className='text-xs' key={i}>{item}, </span>
            ))}
          </div>
        </div>
    </div>
  )
}
