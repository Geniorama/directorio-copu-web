import React from "react";
import { Header } from "../SimpleLayout/Header";
import { Footer } from "../SimpleLayout/Footer";

interface CompanyLayoutProps {
  children: React.ReactNode;
}


export default function CompanyLayout(props: CompanyLayoutProps) {
  return (
    <>
        <Header />
            <main className="container mx-auto pt-28 lg:pt-10 py-10 px-3">
                {props.children}
            </main>
        <Footer />
    </>
  )
}
