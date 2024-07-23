import React from "react";

type ButtonCircleProps = {
  children: string,
  selected?: boolean,
  onClick?: () => void
}

export default function ButtonCircle({ children, selected, onClick }: ButtonCircleProps) {
  const selectedClasses = selected ? 'bg-primary-color text-text-dark font-bold' : 'bg-secondary-color-light'
  
  return (
    <button onClick={onClick} className={`transition ${selectedClasses} w-[40px] h-[40px] block rounded-full uppercase hover:bg-primary-color hover:text-text-dark hover:font-bold`}>
      {children}
    </button>
  );
}
