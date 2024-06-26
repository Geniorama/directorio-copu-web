import React from "react"
import Link from "next/link"

interface ButtonProps {
    children: React.ReactNode
    href?: string
    icon?: React.ReactNode
    target?: string
}

export default function Button({children, href, icon, target}:ButtonProps) {
  return (
    <Link target={target} className="bg-primary-color px-3 py-1 rounded-full text-text-dark font-bold flex gap-1 items-center hover:bg-primary-color-hover transition" href={href ? href : '#'}>
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
