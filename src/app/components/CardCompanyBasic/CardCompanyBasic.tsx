"use client"

import type { Company } from "@/app/types";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface CardCompanyBasicProps {
    cover?: Company['cover'],
    hoverBgColor?: string,
    slug?: Company['slug'],
    title?: Company['name']
}

export default function CardCompanyBasic({cover, hoverBgColor, title, slug}: CardCompanyBasicProps) {
  const myRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(()=> {
    const element = myRef.current
    if(element && hoverBgColor){
      element.addEventListener('mouseover', ()=>{
        element.style.background = hoverBgColor
      })

      element.addEventListener('mouseleave', ()=> {
        element.style.background = "#18181b"
      })
    }
  }, [hoverBgColor])
  return (
    <Link ref={myRef} href={slug ? slug : '#'} className={`bg-secondary-color-light p-5 rounded-2xl h-[87px] text-center block card-company-basic transition flex items-center justify-center`}>
       <img className="mx-auto w-full object-contain max-h-full grayscale" src={cover} alt={title} /> 
    </Link>
  )
}
