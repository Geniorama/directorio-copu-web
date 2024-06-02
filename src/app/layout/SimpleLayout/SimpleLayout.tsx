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
      <main className="min-h-[calc(100vh_-_80px)] flex pt-3">
        <aside className="w-2/12">
          <Sidebar />
        </aside>
        <div>
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
