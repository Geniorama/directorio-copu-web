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
        <main className="lg:min-h-[calc(100vh_-_110px)] flex pt-5 pb-1">
          <aside className="hidden lg:block w-[13%] h-[calc(100vh_-_115px)]">
            <Sidebar />
          </aside>
          <div className="mt-14 lg:mt-0 w-screen overflow-x-hidden lg:w-[87%] lg:max-h-[88vh] lg:overflow-y-scroll">
            {props.children}
          </div>
        </main>
      <Footer />
    </>
  );
}
