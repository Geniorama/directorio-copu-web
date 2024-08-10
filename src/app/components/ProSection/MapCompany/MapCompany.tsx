import type { Company } from "@/app/types";
import styles from "./MapCompany.module.css"

type MapCompanyProps = {
  map?: Company["map"];
};

export default function MapCompany({ map }: MapCompanyProps) {
  return (
    <>
      {map && (
        <div>
          <h3 className="text-[#D9D7D7] font-bold text-sm mt-20 mb-5">
            Dirección
          </h3>
          <div
            className={styles.containerMap} 
            dangerouslySetInnerHTML={{ __html: map }}
           />
        </div>
      )}
    </>
  );
}
