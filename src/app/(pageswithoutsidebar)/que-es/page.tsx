import { WhatIsPage } from "@/app/views/WhatIsPage";
import { Metadata } from "next";
import favicon from '../../../../public/favicon-directorio.png'

export const metadata: Metadata = {
  title: "Qué es el directorio | Directorio Copu",
  description: "Conoce más sobre copu ny el directorio de empresas.",
  icons: {icon: favicon.src}
};

export default function WhatIs() {
  return (
    <WhatIsPage />
  )
}
