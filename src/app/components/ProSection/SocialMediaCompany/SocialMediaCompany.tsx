import type { Company } from "@/app/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faXTwitter, faThreads, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const iconMapping: { [key: string]: any } = {
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
    xTwitter: faXTwitter,
    linkedIn: faLinkedinIn,
    pinterest: faPinterest,
    threads: faThreads
};


type SocialMediaCompanyProps = {
    socialMedia?: Company['socialMedia']
}


export default function SocialMediaCompany({socialMedia}: SocialMediaCompanyProps) {
  return (
    <>
    {socialMedia && socialMedia.length > 0 && (
        <ul className="flex gap-10 justify-center items-center my-16">
            {socialMedia.map((item:any, i) => (
            <li key={i}>
                <Link target="_blank" href={item.url ? item.url : ''}>
                    {item.icon && iconMapping[item.icon] && (
                        <FontAwesomeIcon fontSize={'30px'} icon={iconMapping[item.icon]} />
                    )}
                </Link>
            </li>
            ))}
        </ul>
    )}
    </>
  );
}
