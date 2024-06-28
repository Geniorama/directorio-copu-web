import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout(props: SimpleLayoutProps) {
  return (
    <>
      <Header />
        <main className="min-h-[calc(100vh_-_110px)] flex pt-3 pb-1">
          <aside className="w-[13%] h-[calc(100vh_-_115px)]">
            <Sidebar />
          </aside>
          <div className="w-[87%] max-h-[88vh] overflow-y-scroll">
            {props.children}
          </div>
        </main>
      <Footer />
    </>
  );
}
