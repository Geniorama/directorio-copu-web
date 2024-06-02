import React from 'react'

interface TitleWidgetProps {
    title?: string,
    icon?: React.ReactNode
}

export default function TitleWidget(props:TitleWidgetProps) {
  return (
    <div className='flex items-center gap-2'>
        {props.icon && (
           props.icon 
        )}
        <h5 className='text-xs font-bold'>{props.title}</h5>
    </div>
  )
}
