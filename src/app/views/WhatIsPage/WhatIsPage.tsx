import { CardFullWidth } from "@/app/components/CardFullWidth";
import BgWhatIsCopu from "../../../../public/img/cover-what-is.png";
import BgWhatIsCopuMob from "../../../../public/img/cover-what-is-mobile.png";
import { CardRelated } from "@/app/components/CardRelated";
import CoverCardRelated from "../../../../public/img/cover-card-related.png"
import CoverDescubre from "../../../../public/img/cover-card-related_descubre.png"
import CoverEnjoy from "../../../../public/img/cover-card-related_enjoy.png"
import BgCopu from "../../../:./../../public/img/back-copu.png";
import LogoCopu from "../../../../public/img/logo-copu.svg";

export default function WhatIsPage() {
  return (
    <div className="p-5 space-y-12 lg:space-y-6">
      <CardFullWidth
        bgImage={BgCopu.src}
        bgImageMobile={LogoCopu.src}
        title="¿Qué es COPU?"
        description="COPU es el medio de comunicación y plataforma líder en Colombia para conectar, informar y potenciar a la industria creativa, publicitaria y de marketing en Colombia. Desde noticias, contenidos y eventos, hasta este Directorio especializado, a través de nuestro entendimiento dentro del negocio, bajo el contacto con miles de compañías, y la referencia, testimonio y experiencia comercial, centralizamos los recursos y oportunidades en un solo lugar, facilitando la visibilidad y las conexiones entre agencias, marcas, productoras, estudios, consultoras y todo tipo de proveedores."
      />

      <CardFullWidth
        bgImage={BgCopu.src}
        bgImageMobile={LogoCopu.src}
        title="¿Qué es el directorio?"
        description={`El Directorio COPU es el nodo central de la industria creativa, publicitaria y de marketing en Colombia. Aquí puedes buscar y registrar productoras audiovisuales, agencias de publicidad, estudios de diseño, agencias digitales, postproductoras, estudios fotográficos, consultoras estratégicas, y muchas más. Este directorio centraliza proveedores y oportunidades, facilitando la visibilidad y conexión con las mejores empresas del sector.<br/><br/>
        ¿Buscas proveedores para tu compañía? ¿O buscas clientes para la tuya?
        <br/><br/>
        Sé parte de DirCOPU, La Guía de Proveedores de las Industrias Creativas.  
        `}
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
          link={{text: 'Habla con nosotros', href: 'https://wa.link/y5v35j', target: '_blank'}}
          title="¿Tienes dudas?"
        />
      </div>
    </div>
  );
}
