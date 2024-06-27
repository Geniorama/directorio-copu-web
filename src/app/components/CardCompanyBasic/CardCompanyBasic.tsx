import type { Company } from "@/app/types";
import Link from "next/link";

interface CardCompanyBasicProps {
    cover?: Company['cover'],
    hoverBgColor?: string,
    slug?: Company['slug'],
    title?: Company['name']
}

export default function CardCompanyBasic({cover, hoverBgColor, title, slug}: CardCompanyBasicProps) {
  return (
    <Link href={slug ? slug : '#'} className=' bg-secondary-color-light p-10 rounded-2xl min-h-[87px] text-center block'>
       <img className="mx-auto w-full h-[18px] object-contain" src={cover} alt={title} /> 
    </Link>
  )
}
