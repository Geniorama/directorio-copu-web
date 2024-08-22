import LayoutWithoutSidebar from "../layout/LayoutWithoutSidebar/LayoutWithoutSidebar";
import "./../globals.css";
import { Suspense } from "react";
import favicon from "../../../public/favicon-directorio.png";


export const metadata = {
  title: "Directorio copu",
  description: "La guía de proveedores de las industrias creativas",
  icons: {icon: favicon.src}
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="custom-scroll font-sans">
        <Suspense>
          <LayoutWithoutSidebar>{children}</LayoutWithoutSidebar>
        </Suspense>
      </body>
    </html>
  );
}
