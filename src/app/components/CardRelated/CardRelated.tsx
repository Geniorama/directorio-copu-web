import { Button } from "@/app/utils/Button";

interface CardRelatedProps {
  cover?: string;
  title?: string;
  link?: { text?: string, href?: string, target?: string };
}

export default function CardRelated({ cover, link, title }: CardRelatedProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
      }}
      className=" bg-slate-800 bg-cover bg-no-repeat p-8 rounded-lg aspect-video flex items-center relative overflow-hidden"
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.7) 50%, rgba(0,0,0,0) 100%)",
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Layer opacity */}
      </div>
      <div className="relative max-w-[250px]">
        <h6 className="text-3xl font-bold">{title}</h6>
        {link && (
          <div className=" inline-block mt-2">
            <Button target={link.target} href={link?.href}>{link?.text}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
