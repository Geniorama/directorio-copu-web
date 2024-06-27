import React from 'react'

interface CardCompanyBasicProps {
    image?: string;
    hoverBgColor?: string;
}

export default function CardCompanyBasic({image, hoverBgColor}: CardCompanyBasicProps) {
  return (
    <div className=' bg-secondary-color-light p-10 rounded-3xl'>
       <img src="" alt="" /> 
    </div>
  )
}
