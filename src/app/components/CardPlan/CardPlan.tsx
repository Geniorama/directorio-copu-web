import { MouseEventHandler } from "react";
import type { Plan } from "@/app/types";
import { formatCurrency } from "@/app/helpers";


type CardPlanProps = Plan & {
    color?: string;
    handlePlan?: MouseEventHandler<HTMLButtonElement>;
}

export default function CardPlan({color, name, description, sufixPrice, features, price, handlePlan}:CardPlanProps) {

  return (
    <div style={{borderColor: color}} className={`p-8 border-2 rounded-2xl space-y-4 text-xs text-[#E9E9E9] relative overflow-hidden pt-14`}>
      <div style={{backgroundColor: color}} className="absolute left-0 top-0 w-full h-[40px]"></div>
      <h5 style={{color: color}} className={`text-4xl font-bold mt-10`}>{name}</h5>
      <p>{description}</p>
      <div className=" space-y-2">
        <p className=" space-x-1">
          {price && (
            <span className="text-2xl font-bold">{formatCurrency(price, 'es-CO', 'COP')}</span>
          )}
          <span>{sufixPrice}</span>
        </p>
        <button onClick={handlePlan} style={{backgroundColor: color}} className={`w-full p-2 rounded-md text-secondary-color font-bold hover:opacity-[70%] transition`}>Quiero este plan</button>
      </div>
      <div className=" space-y-4">
        <p className="font-bold">
          ¿Que podrá mostrar tu empresa con este plan?
        </p>
        <ul className=" list-disc pl-5 leading-5">
          {features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
