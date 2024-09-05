import { WhatIsPage } from "@/app/views/WhatIsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qué es el directorio | Directorio Copu",
  description: "Conoce más sobre copu ny el directorio de empresas.",
};

export default function WhatIs() {
  return (
    <WhatIsPage />
  )
}
