import React from "react";

export default function ButtonCircle({ children }: { children: string }) {
  return (
    <button className="bg-secondary-color-light w-[40px] h-[40px] block rounded-full uppercase hover:bg-secondary-color">
      {children}
    </button>
  );
}
