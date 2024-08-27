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
        <main className="lg:min-h-[calc(100vh_-_130px)] flex pt-12 lg:pt-2 pb-1">
          <aside className="hidden lg:block w-[230px] md:h-[calc(80vh)]  2xl:h-[calc(100vh_-_150px)] overflow-y-scroll custom-scroll">
            <Sidebar />
          </aside>
          <div className="mt-14 lg:mt-0 w-screen overflow-x-hidden lg:w-[87%] lg:max-h-[80vh] 2xl:max-h-[83vh] lg:overflow-y-scroll custom-scroll">
            {props.children}
          </div>
        </main>
      <Footer />
    </>
  );
}
