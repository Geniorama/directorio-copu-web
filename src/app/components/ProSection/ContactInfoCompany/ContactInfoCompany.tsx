import Link from "next/link";
import type { Company } from "@/app/types";

type ContactInfoCompanyProps = {
    webSite?: Company['webSite']
    emails?: Company['emails']
    phones?: Company['phones']
    countries?: Company['countries']
    nit?: Company['nit']
}

export default function ContactInfoCompany({webSite, emails, phones, countries, nit}: ContactInfoCompanyProps) {
  return (
    <div className="grid grid-cols-2 max-w-[315px] mx-auto">
      {/* Content left */}
      <div>
        <div>
          <h5 className="text-[#D9D7D7] font-bold text-sm">Sitio web</h5>
          <Link
            className="text-[#C7C7DF] text-xs underline leading-7"
            href={webSite ? webSite : "#"}
            target="_blank"
          >
            {webSite}
          </Link>
        </div>

        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">Celular</h5>
          <ul>
            {phones && phones.length > 0 && phones.map((phone, i) => (
              <li key={i}>
                <Link
                  className="text-[#C7C7DF] text-xs underline leading-7"
                  href={phone.link ? phone.link : '#'}
                  target="_blank"
                >
                  {phone.phoneNumber}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">NIT</h5>
          <p className="text-[#C7C7DF] text-xs leading-7">{nit}</p>
        </div>
      </div>

      {/* Content right */}
      <div>
        <div>
          <h5 className="text-[#D9D7D7] font-bold text-sm">Sector</h5>
          <p className="text-[#C7C7DF] text-xs leading-7">
            Servicios de diseño
          </p>
        </div>

        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">Correos</h5>
          <ul>
            {emails && emails.length > 0 && emails.map((email, i) => (
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

        <div className="mt-10">
          <h5 className="text-[#D9D7D7] font-bold text-sm">Sede</h5>
          {countries && countries.length > 0 && countries.map(country => (
            <p key={country.slug} className="text-[#C7C7DF] text-xs leading-7">{country.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
