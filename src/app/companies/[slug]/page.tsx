import { HeadingCompany } from "@/app/components/HeadingCompany"
import { ButtonTab } from "@/app/utils/ButtonTab"
import TabInicio from "@/app/components/CompaniesTabs/TabInicio/TabInicio"
import LogoCopu from "../../../../public/img/logo-copu.svg"
import { TabContacto } from "@/app/components/CompaniesTabs/TabContacto"
import { TabPersonas } from "@/app/components/CompaniesTabs/TabPersonas"

export default function page() {
  return (
    <div>
        <HeadingCompany 
            cover="https://plus.unsplash.com/premium_photo-1675882505334-382d4cb3d718?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgProfile="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?t=st=1718201504~exp=1718205104~hmac=6968853e65a67db0a6ea6e95c7a898fae5b7170de966f100d258b744e5c67c50&w=1380"
            name='Company Name'
            slogan='Creative acelerator'
            categories={['UX/UI',  'Product Design', 'Branding']}
        />
        
        <div className="flex justify-center items-center gap-1 md:gap-3 mt-10 mb-7">
          <ButtonTab>
            Inicio
          </ButtonTab>
          <ButtonTab>
            Contacto
          </ButtonTab>
          <ButtonTab>
            Personas
          </ButtonTab>
          <ButtonTab>
            Premios
          </ButtonTab>
          <ButtonTab>
            Acreditaciones
          </ButtonTab>
        </div>

        <div>
          {/* <TabInicio /> */}
           {/* <TabContacto /> */}
           <TabPersonas />
        </div>

        <div className="text-center mt-32">
          <p className="text-[10px]">Empresa certificada por</p>
          <img className="mx-auto mt-4" src={LogoCopu.src} alt="" />
        </div>
    </div>
  )
}
