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
        <main className="min-h-[calc(100vh_-_80px)] flex pt-3 pb-1">
          <aside className="w-2/12 min-w-[248px] h-[calc(100vh_-_100-px)]">
            <Sidebar />
          </aside>
          <div className="grow">
            {props.children}
          </div>
        </main>
      <Footer />
    </>
  );
}
