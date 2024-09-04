import type { Metadata } from "next";
import { Suspense } from "react";
import "../globals.css";
import { SimpleLayout } from "../layout/SimpleLayout";
import StoreProvider from "../StoreProvider";
import favicon from "../../../public/favicon-directorio.png";
import GTM from "@/lib/GTM";

export const metadata: Metadata = {
  title: "Búsqueda | Directorio Copu",
  description: "La guía de proveedores de las industrias creativas",
  icons: {icon: favicon.src}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`lg:overflow-hidden font-sans`}>
        <GTM id="GTM-WGP2WK5Z" />
        <Suspense>
          <StoreProvider>
            <SimpleLayout>{children}</SimpleLayout>
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
