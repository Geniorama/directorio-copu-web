import React from "react"
import Link from "next/link"

interface ButtonProps {
    children: React.ReactNode
    href?: string
    icon?: React.ReactNode
    target?: string
    color?: string
    onClick?: () => void
}

export default function Button({children, href, icon, target, color, onClick}:ButtonProps) {
   const colors = color === 'secondary' ? 'bg-white hover:bg-[#848484]' : 'bg-primary-color hover:bg-primary-color-hover'

  return (
    <Link href={href ? href : '#'} onClick={onClick} target={target} className={`justify-center ${colors} text-center whitespace-nowrap px-4 py-1 rounded-full text-text-dark font-bold flex gap-1 items-center transition`} >
        {icon && (
            <span>
                {icon}
            </span>
        )}
        <span>
            {children}
        </span>
    </Link>
  )
}
