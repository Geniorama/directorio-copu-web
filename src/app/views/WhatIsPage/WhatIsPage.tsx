import { CardFullWidth } from "@/app/components/CardFullWidth";
import BgWhatIsCopu from "../../../../public/img/cover-what-is.png";
import BgWhatIsCopuMob from "../../../../public/img/cover-what-is-mobile.png";

export default function WhatIsPage() {
  return (
    <div className="p-5 space-y-6">
      <CardFullWidth
        bgImage={BgWhatIsCopu.src}
        bgImageMobile={BgWhatIsCopuMob.src}
        title="¿Qué es COPU?"
        description="COPU es el medio de comunicación más importante sobre marketing y publicidad en Colombia y la región. Con más de XX años de trayectoria, COPU es hoy un referente para las marcas, agencias y profesionales afines que buscan estar conectados con el resto de la industria."
      />

      <CardFullWidth
        bgImage={BgWhatIsCopu.src}
        bgImageMobile={BgWhatIsCopuMob.src}
        title="¿Qué es el directorio?"
        description={`El directorio de COPU es un aplicativo web que agrupa un gran número de empresas de la industria creativa en toda la región. Las compañías listadas aquí, han sido sometidas a un proceso de selección por parte del equipo de COPU asegurando su autenticidad y reconocimiento.<br><br>En este directorio encontrarás productoras audiovisuales, agencias de publicidad, estudios de diseño, agencias digitales, postproductoras, estudios fotográficos, consultoras creativas y estratégicas, agencias de producto y muchas más empresas con distintas propuestas de valor orientadas al marketing, la publicidad y las comunicaciones.`}
      />
    </div>
  );
}
