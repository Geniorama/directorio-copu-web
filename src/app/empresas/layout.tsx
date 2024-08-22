import { CompanyLayout } from "@/app/layout/CompanyLayout";
import "../globals.css";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";
import favicon from "../../../public/favicon-directorio.png";

export const metadata: Metadata = {
  title: 'Company | Directorio Copu',
  icons: {icon: favicon.src}
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="es">
      <body>
        <StoreProvider>
          <CompanyLayout>{props.children}</CompanyLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
