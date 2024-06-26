import { CardFullWidth } from "@/app/components/CardFullWidth";
import BgWhatIsCopu from "../../../../public/img/cover-what-is.png";
import BgWhatIsCopuMob from "../../../../public/img/cover-what-is-mobile.png";
import { CardRelated } from "@/app/components/CardRelated";
import CoverCardRelated from "../../../../public/img/cover-card-related.png"
import CoverDescubre from "../../../../public/img/cover-card-related_descubre.png"
import CoverEnjoy from "../../../../public/img/cover-card-related_enjoy.png"

export default function WhatIsPage() {
  return (
    <div className="p-5 space-y-12 lg:space-y-6">
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

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CardRelated 
          cover={CoverDescubre.src}
          link={{text: 'Ir al directorio', href: '/'}}
          title="Descubre más empresas"
        />

        <CardRelated 
          cover={CoverEnjoy.src}
          title="¿Quieres ser parte del directorio?"
          link={{text: 'Mira nuestros planes', href: "/planes"}}
        
        />

        <CardRelated 
          cover={CoverCardRelated.src}
          link={{text: 'Habla con nosotros', href: '/', target: '_blank'}}
          title="¿Tienes dudas?"
        />
      </div>
    </div>
  );
}
