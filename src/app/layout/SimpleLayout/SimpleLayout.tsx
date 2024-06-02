import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export default function SimpleLayout(props: SimpleLayoutProps) {
  return (
    <>
        <Header />
        <main>
            {props.children}
        </main>
    </>
  )
}
