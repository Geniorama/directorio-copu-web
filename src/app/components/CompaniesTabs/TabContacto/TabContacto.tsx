import React from "react";
import Link from "next/link";
import IgIcon from "../../../../../public/img/ig.svg";
import BeHanceIcon from "../../../../../public/img/behance.svg";
import {
  DescriptionCompany,
  SocialMediaCompany,
  SpecialitiesCompany,
  ContactInfoCompany,
} from "../../ProSection";
import type { Company } from "@/app/types";

type TabContactoProps = {
  description?: Company["description"];
  socialMedia?: Company["socialMedia"];
  tags?: Company["tags"];
  webSite?: Company["webSite"];
  emails?: Company["emails"];
  phones?: Company["phones"];
  countries?: Company["countries"];
  sectors?: Company["sectors"];
  nit?: Company["nit"];
  specialities?: Company["specialities"]
};

export default function TabContacto({
  description,
  socialMedia,
  tags,
  webSite,
  emails,
  phones,
  countries,
  sectors,
  nit,
  specialities
}: TabContactoProps) {
  return (
    <article className="text-center">
      <DescriptionCompany description={description} />

      <SocialMediaCompany socialMedia={socialMedia} />

      <SpecialitiesCompany specialities={specialities} />

      <ContactInfoCompany
        nit={nit}
        countries={countries}
        emails={emails}
        webSite={webSite}
        phones={phones}
        sectors={sectors}
        
      />

      <div>
        <h3 className="text-[#D9D7D7] font-bold text-sm mt-20 mb-5">
          Dirección
        </h3>
        <iframe
          className=" aspect-video"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.483685653877!2d-74.05167582411718!3d4.685680395289287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b13908c43e5%3A0x297d5fcc7fb6ff29!2sCasa%20Spotify%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1719071349283!5m2!1ses!2sco"
          width="100%"
          height="auto"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
}
