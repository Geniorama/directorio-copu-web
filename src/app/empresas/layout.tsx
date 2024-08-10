import { CompanyLayout } from "@/app/layout/CompanyLayout";
import "../globals.css";
import StoreProvider from "../StoreProvider";

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
