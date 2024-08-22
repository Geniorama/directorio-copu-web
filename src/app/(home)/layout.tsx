import type { Metadata } from "next";
import { Suspense } from "react";
import "../globals.css";
import { SimpleLayout } from "../layout/SimpleLayout";
import StoreProvider from "../StoreProvider";
import favicon from "../../../public/favicon-directorio.png";

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
        <Suspense>
          <StoreProvider>
            <SimpleLayout>{children}</SimpleLayout>
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
