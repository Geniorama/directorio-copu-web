"use client";

import { HeadingCompany } from "@/app/components/BasicSection";
import { TabInicio } from "@/app/components/CompaniesTabs/TabInicio";
import { TabAcreditaciones } from "@/app/components/CompaniesTabs/TabAcreditaciones";
import { TabContacto } from "@/app/components/CompaniesTabs/TabContacto";
import { TabPersonas } from "@/app/components/CompaniesTabs/TabPersonas";
import { TabPremios } from "@/app/components/CompaniesTabs/TabPremios";
import LogoCopu from "../../../../public/img/logo-copu.svg";
import { ButtonTab } from "@/app/utils/ButtonTab";
import { useState, useEffect } from "react";
import type { Company, Plan } from "@/app/types";
import { transformDataCompany } from "@/app/utils/formatters";
import LoadingAnimated from "@/app/utils/Icons/LoadingAnimated";
interface SingleCompanyPageProps {
  data: any;
}

export default function SingleCompanyPage({ data }: SingleCompanyPageProps) {
  const [section, setSection] = useState("inicio");
  const [dataCompany, setDataCompany] = useState<Company>();
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<Plan>();

  useEffect(() => {
    if (data) {
      setDataCompany(transformDataCompany(data));
    }

    if (data.attributes.plan) {
      setPlan(data.attributes.plan.data.attributes);
    }
  }, [data]);

  useEffect(() => {
    if (dataCompany) {
      setTimeout(() => setLoading(false), 3000)
    }
  }, [dataCompany]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-[80vh] w-full text-center transition">
        <LoadingAnimated />
      </div>
    );
  }

  function handleTab(name: string) {
    setSection(name);
  }

  if (dataCompany) {
    return (
      <div>
        <HeadingCompany
          cover={dataCompany.cover && dataCompany.cover}
          imgProfile={dataCompany.logoLight ? dataCompany.logoLight : dataCompany.logoDark ? dataCompany.logoDark : ""}
          bgImageProfileColor={dataCompany.logoLight ? "bg-[#000000]" : "bg-[#D9D9D9]"}
          name={dataCompany.name}
          slogan={dataCompany.slogan}
          categories={dataCompany.sectors?.map((sector) => sector.name)}
        />

        <div className="flex justify-center items-center gap-3 mt-10 mb-7 flex-wrap">
          <ButtonTab
            active={section === "inicio"}
            onClick={() => handleTab("inicio")}
          >
            Inicio
          </ButtonTab>
          {plan && plan.slug !== "basico" && (
            <ButtonTab
              active={section === "contacto"}
              onClick={() => handleTab("contacto")}
            >
              Contacto
            </ButtonTab>
          )}

          {plan && plan.slug === "premium" && (
            <>
              <ButtonTab
                active={section === "personas"}
                onClick={() => handleTab("personas")}
              >
                Personas
              </ButtonTab>
              <ButtonTab
                active={section === "premios"}
                onClick={() => handleTab("premios")}
              >
                Premios
              </ButtonTab>
              <ButtonTab
                active={section === "acreditaciones"}
                onClick={() => handleTab("acreditaciones")}
              >
                Acreditaciones
              </ButtonTab>
            </>
          )}
        </div>

        <div>
          {section === "inicio" && (
            <TabInicio
              description={dataCompany.description}
              reel={dataCompany.reel}
              clients={dataCompany.clients}
              work={dataCompany.work}
            />
          )}
          {section === "contacto" && (
            <TabContacto
              description={dataCompany.description}
              socialMedia={dataCompany.socialMedia}
              tags={dataCompany.tags}
              webSite={dataCompany.webSite}
              emails={dataCompany.emails}
              phones={dataCompany.phones}
              countries={dataCompany.countries}
              nit={dataCompany.nit}
              sectors={dataCompany.sectors}
              specialities={dataCompany.specialities}
            />
          )}
          {section === "personas" && <TabPersonas />}
          {section === "premios" && <TabPremios />}
          {section === "acreditaciones" && <TabAcreditaciones />}
        </div>

        <div className="text-center mt-32">
          <p className="text-[10px]">Empresa certificada por</p>
          <img className="mx-auto mt-4" src={LogoCopu.src} alt="Logo Copu" />
        </div>
      </div>
    );
  }
}
