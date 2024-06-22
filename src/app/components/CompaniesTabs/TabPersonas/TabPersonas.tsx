import React from "react";

const team = [
  {
    name: "Sebastián Buriticá",
    position: "Creative director",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sebastián Buriticá",
    position: "Creative director",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sebastián Buriticá",
    position: "Creative director",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Doe",
    position: "Creative director",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Doe",
    position: "Creative director",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TabPersonas() {
  return (
    <article>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 mt-10 max-w-[900px] mx-auto">
        {team.map(({name, position, avatar}, i) => (
          <div className="text-center space-y-6" key={i}>
            <img className=" max-w-[176px] mx-auto w-full aspect-square object-cover object-top rounded-full" src={avatar} alt="" />
            <div className="space-y-2 text-[#C7C7DF]">
                <h5 className=" leading-4 font-bold">{name}</h5>
                <p className=" leading-4 text-sm">{position}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
