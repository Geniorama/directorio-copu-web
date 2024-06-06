import React from "react";

export default function ButtonCircle({ children }: { children: string }) {
  return (
    <button className="transition bg-secondary-color-light w-[40px] h-[40px] block rounded-full uppercase hover:bg-primary-color hover:text-text-dark hover:font-bold">
      {children}
    </button>
  );
}
