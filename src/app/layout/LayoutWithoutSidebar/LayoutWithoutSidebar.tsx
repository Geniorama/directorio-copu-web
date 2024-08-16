import React from "react";
import { Header } from "../SimpleLayout/Header";
import { Footer } from "../SimpleLayout/Footer";

interface LayoutWithoutSidebarProps {
  children: React.ReactNode;
}


export default function LayoutWithoutSidebar({children}: LayoutWithoutSidebarProps) {
  return (
    <>
        <Header />
            <main className="pt-12 lg:pt-0">
                {children}
            </main>
        <Footer />
    </>
  )
}
