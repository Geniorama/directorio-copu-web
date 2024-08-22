import Link from "next/link";
import type { Company } from "@/app/types";
import { simplifyURL } from "@/app/utils/formatters";

type ContactInfoCompanyProps = {
  webSite?: Company["webSite"];
  emails?: Company["emails"];
  phones?: Company["phones"];
  nit?: Company["nit"];
  sectors?: Company["sectors"];
  cols?: string;
  cities?: Company["cities"];
};

export default function ContactInfoCompany({
  webSite,
  emails,
  phones,
  nit,
  sectors,
  cols,
  cities,
}: ContactInfoCompanyProps) {
  return (
    <div className={`max-w-[315px] mx-auto`}>
      <div className="grid grid-cols-2 gap-5">
        {webSite && (
          <div>
            <h5 className="text-[#D9D7D7] font-bold text-sm">Sitio web</h5>
            <Link
              className="text-[#C7C7DF] text-xs underline leading-7"
              href={webSite ? webSite : "#"}
              target="_blank"
            >
              {simplifyURL(webSite)}
            </Link>
          </div>
        )}

        {sectors && sectors.length > 0 && (
          <div>
            <h5 className="text-[#D9D7D7] font-bold text-sm">
              {sectors.length > 1 ? "Sectores" : "Sector"}
            </h5>
            <p className="text-[#C7C7DF] text-xs leading-7">
              {sectors.map((sector) => sector.name).join(", ")}
            </p>
          </div>
        )}
      </div>

      {phones && phones.length > 0 && (
        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">Celular</h5>
          <ul>
            {phones.map((phone, i) => (
              <li key={i}>
                {phone.name && (
                  <span className="text-[#C7C7DF] text-xs leading-7">{phone.name}: </span>
                )}
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={phone.link ? phone.link : "#"}
                  target="_blank"
                >
                  {phone.phoneNumber}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content right */}
      {emails && emails.length > 0 && (
        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">
            {emails.length > 1 ? "Correos" : "Correo"}
          </h5>
          <ul>
            {emails.map((email, i) => (
              <li key={i}>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={`mailto:${email.email}`}
                  target="_blank"
                >
                  {email.email}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-5">
        {nit && (
          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">NIT</h5>
            <p className="text-[#C7C7DF] text-xs leading-7">{nit}</p>
          </div>
        )}

        {cities && cities.length > 0 && (
          <div className="mt-10">
            <h5 className="text-[#D9D7D7] font-bold text-sm">
              {cities.length > 1 ? "Sedes" : "Sede"}
            </h5>
            <p className="text-[#C7C7DF] text-xs leading-7">
              {cities
                .map((city) => `${city.name} - ${city.country.name}`)
                .join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
