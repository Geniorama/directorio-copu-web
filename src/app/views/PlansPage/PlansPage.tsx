"use client";

import { CardPlan } from "@/app/components/CardPlan";
import type { Plan } from "@/app/types";
import { useState, useEffect } from "react";

type PlansPageProps = {
  data: Plan[];
};


const colors = [
  {
    code: "#9191A4"
  },

  {
    code: "#FFFFFF"
  },

  {
    code: "#1DEC80"
  }
]

const transformData = (data: any[]): Plan[] => {
  const dataFormat = data.map((item) => ({
    id: item.id,
    name: item.attributes.title,
    description: item.attributes.description,
    price: item.attributes.price,
    link: item.attributes.link,
    slug: item.attributes.slug,
    sufixPrice: "COP/Año + IVA",
    features: item.attributes.features,
    // ...item.attributes,
  }));

  return dataFormat;
};

function handlePlan(route: string) {
  window.open(route);
}

export default function PlansPage({ data }: PlansPageProps) {
  const [plans, setPlans] = useState<Plan[]>();

  useEffect(() => {
    setPlans(transformData(data));
  }, [data]);

  return (
    <div className="container mx-auto pt-16 py-10 px-3">
      <div className="py-6 px-5 lg:px-0">
        <div className="max-w-[450px] mx-auto text-center mb-20">
          <h1 className=" text-7xl font-bold text-primary-color">Planes</h1>
          <p className="text-sm">
            Conoce los planes que tenemos para que tu empresa haga parte del
            directorio más grande de las industrias creativas de la región.
          </p>
        </div>

        <div className="flex-col-reverse flex lg:grid lg:grid-cols-3 gap-10 lg:gap-20">
          {plans &&
            plans.map(
              ({
                name,
                slug,
                description,
                price,
                sufixPrice,
                link,
                features,
              }, i) => {

                return (
                  <div key={slug}>
                    <CardPlan
                      id={slug}
                      slug={slug}
                      name={name}
                      description={description}
                      price={price}
                      features={features}
                      color={colors[i].code}
                      sufixPrice={sufixPrice}
                      handlePlan={() => handlePlan(link ? link : "#")}
                    />
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
