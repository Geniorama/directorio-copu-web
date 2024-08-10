import { TeamGrid } from "../../PremiumSection";
import type { Company } from "@/app/types";

type TabPersonasProps = {
  team: Company['team']
}

export default function TabPersonas({team}: TabPersonasProps) {
  return (
    <article>
      <TeamGrid 
        team={team}
      />
    </article>
  );
}
