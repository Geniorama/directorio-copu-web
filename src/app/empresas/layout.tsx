import { CompanyLayout } from "@/app/layout/CompanyLayout"
import './../globals.css'
interface LayoutProps {
    children: React.ReactNode;
}
  
export default function Layout(props: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CompanyLayout>
          {props.children}
        </CompanyLayout>
      </body>
    </html>
  )
}
