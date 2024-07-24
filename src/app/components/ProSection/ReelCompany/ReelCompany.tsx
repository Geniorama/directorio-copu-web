import type { Company } from "@/app/types";

type ReelCompanyProps = {
    reel?: Company['reel']
}

export default function ReelCompany({reel}:ReelCompanyProps) {
  return (
    <>
      {reel && reel !== "" && (
        <div className="mt-10 md:mt-20">
          <h3 className="text-[#C7C7DF] font-bold text-xl md:text-2xl">Reel</h3>
          <div className="mt-10 md:my-7">
            <iframe
              className="w-full aspect-video self-stretch md:min-h-96"
              src={`https://www.youtube.com/embed/${reel}`}
              frameBorder="0"
              title="Product Overview Video"
              aria-hidden="true"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
