import React from "react"
import Link from "next/link"

interface ButtonProps {
    children: React.ReactNode,
    href?: string
    icon?: React.ReactNode
}

export default function Button(props:ButtonProps) {
  return (
    <Link className="bg-primary-color px-3 py-1 rounded-full text-text-dark font-bold flex gap-1 items-center hover:bg-primary-color-hover transition" href={props.href ? props.href : '#'}>
        {props.icon && (
            <span>
                {props.icon}
            </span>
        )}
        <span>
            {props.children}
        </span>
    </Link>
  )
}
