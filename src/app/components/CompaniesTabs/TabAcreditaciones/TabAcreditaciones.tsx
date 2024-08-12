import type { Company } from "@/app/types";
import AccreditationsGrid from "../../PremiumSection/AccreditationsGrid/AccreditationsGrid";

type TabAcreditacionesProps = {
  accreditations: Company["accreditations"];
};

export default function TabAcreditaciones({
  accreditations,
}: TabAcreditacionesProps) {
  return (
    <article>
      <AccreditationsGrid accreditations={accreditations} />
    </article>
  );
}
