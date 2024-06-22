import React from "react";

interface ButtonTabProps {
    children: React.ReactNode,
    onClick?: () => void
}

export default function ButtonTab(props: ButtonTabProps) {
  return (
    <button onClick={props.onClick} className=" bg-secondary-color-hover text-[9px] md:text-xs font-bold py-2 px-3 md:px-5 rounded-full hover:text-secondary-color hover:bg-[#E9E9E9] transition">
      {props.children}
    </button>
  );
}
