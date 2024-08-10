import type { Company } from "@/app/types";

type TeamGridProps = {
  team: Company["team"];
};

export default function TeamGrid({ team }: TeamGridProps) {
  return (
    <>
      {team && (
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 mt-10 max-w-[900px] mx-auto">
          {team.map((member, i) => (
            <div className="text-center space-y-6" key={i}>
              {member.image?.url && (
                <img
                  className=" max-w-[176px] mx-auto w-full aspect-square object-cover object-top rounded-full"
                  src={member.image.url}
                  alt=""
                />
              )}
              <div className="space-y-2 text-[#C7C7DF]">
                <h5 className=" leading-4 font-bold">{member.name}</h5>
                <p className=" leading-4 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
