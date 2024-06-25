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
            <main>
                {children}
            </main>
        <Footer />
    </>
  )
}
