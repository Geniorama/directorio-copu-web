import React from "react";
import Link from "next/link";
import IgIcon from "../../../../../public/img/ig.svg";
import BeHanceIcon from "../../../../../public/img/behance.svg";
import {
  DescriptionCompany,
  SocialMediaCompany,
  SpecialitiesCompany,
  ContactInfoCompany,
  MapCompany
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
  specialities?: Company["specialities"];
  map?: Company["map"]
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
  specialities,
  map
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

      <MapCompany 
        map={map}
      />
    </article>
  );
}
