import { HeadingCompany } from "@/app/components/HeadingCompany";
import { TabInicio } from "@/app/components/CompaniesTabs/TabInicio";
import { TabAcreditaciones } from "@/app/components/CompaniesTabs/TabAcreditaciones";
import { TabContacto } from "@/app/components/CompaniesTabs/TabContacto";
import { TabPersonas } from "@/app/components/CompaniesTabs/TabPersonas";
import { TabPremios } from "@/app/components/CompaniesTabs/TabPremios";
import LogoCopu from '../../../../public/img/logo-copu.svg';
import { ButtonTab } from "@/app/utils/ButtonTab";
import LogoBito from '../../../../public/img/logo-bito.jpg';
import CoverBito from '../../../../public/img/cover-bito.png';

interface SingleCompanyPageProps {
  section: string;
  handleTab: (name: string) => void
}

export default function SingleCompanyPage({ section, handleTab }:SingleCompanyPageProps) {
  return (
    <div>
        <HeadingCompany 
            cover={CoverBito.src}
            imgProfile={LogoBito.src}
            name='Company Name'
            slogan='Creative acelerator'
            categories={['UX/UI',  'Product Design', 'Branding']}
        />
        
        <div className="flex justify-center items-center gap-3 mt-10 mb-7 flex-wrap">
          <ButtonTab 
            active={section === 'inicio'}
            onClick={() => handleTab('inicio')}>
            Inicio
          </ButtonTab>
          <ButtonTab 
            active={section === 'contacto'}
            onClick={() => handleTab('contacto')}>
            Contacto
          </ButtonTab>
          <ButtonTab 
            active={section === 'personas'}
            onClick={() => handleTab('personas')}>
            Personas
          </ButtonTab>
          <ButtonTab 
            active={section === 'premios'}
            onClick={() => handleTab('premios')}>
            Premios
          </ButtonTab>
          <ButtonTab 
            active={section === 'acreditaciones'}
            onClick={() => handleTab('acreditaciones')}>
            Acreditaciones
          </ButtonTab>
        </div>

        <div>
          {section === "inicio" && <TabInicio />}
          {section === "contacto" && <TabContacto />}
          {section === "personas" && <TabPersonas />}
          {section === "premios" && <TabPremios />}
          {section === "acreditaciones" && <TabAcreditaciones />}
        </div>

        <div className="text-center mt-32">
          <p className="text-[10px]">Empresa certificada por</p>
          <img className="mx-auto mt-4" src={LogoCopu.src} alt="Logo Copu" />
        </div>
    </div>
  )
}
