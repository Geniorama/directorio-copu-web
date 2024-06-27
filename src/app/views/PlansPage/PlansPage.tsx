"use client";

import { CardPlan } from "@/app/components/CardPlan";
import { formatCurrency } from "../../helpers/index";
import { useEffect, useState } from "react";

const plans = [
  {
    title: "Básico",
    description: "Para empresas que quieran estar presentes en el directorio.",
    price: 200000,
    sufixPrice: "COP/Año + IVA",
    link: "#",
    features: [
      "Visualización de nombre y logo",
      "Sitio Web",
      "Hasta 2 etiquetas de categorías (Las etiquetas son palabras claves que los usuarios buscan en el directorio. Podrás usarlas para que encuentren más fácil tu empresa.)",
    ],
    color: "#9191A4",
  },

  {
    title: "Pro",
    description:
      "Para empresas que busquen mostrar su trabajo y sus credenciales.",
    price: 1200000,
    sufixPrice: "COP/Año + IVA",
    link: "#",
    features: [
      "Visualización de nombre y logo",
      "Visualización de NIT",
      "Dirección de la empresa",
      "Contacto de Whatsapp",
      "Teléfono de ventas",
      "Sitio web",
      "Descripción de la empresa. (Texto de 400 caracteres para que cuentes sobre los servicios de tu empresa, el tipo de compañía y otra información relevante)",
      "Hasta 10 etiquetas de categorías (Las etiquetas son palabras claves que los usuarios buscan en el directorio. Podrás usarlas para que encuentren más fácil tu empresa.)",
      "5 entradas por evento a Congreso Adictos, Marketing Dealers, Movimiento CLIC y COPU Pary. (Entradas VIP exclusivas para la COPU Pary)",
      "Descuento del 5% en Rueda de Negocios Hand-Shakers",
      "1 publicación de ofertas laborales de tu empresa en las redes de COPU",
    ],
    color: "#FFFFFF",
  },

  {
    title: "Premium",
    description:
      "Para empresas que busquen mostrar su trabajo y sus credenciales.",
    price: 1200000,
    sufixPrice: "COP/Año + IVA",
    link: "#",
    features: [
      "Visualización de nombre y logo",
      "Visualización de NIT",
      "Listado de directivos o contactos del área de ventas (Hasta cuatro contactos con nombres, teléfonos, correos electrónicos y botón a Whatsapp)",
      "Dirección y geolocalización en Google Maps",
      "Sitio web",
      "Descripción de la empresa. (Texto de 700 caracteres para que cuentes sobre los servicios de tu empresa, el tipo de compañía y otra información relevante)",
      "Video Reel de credenciales",
      "Foto grupal de la empresa",
      "Hasta 20 etiquetas de categorías (Las etiquetas son palabras claves que los usuarios buscan en el directorio. Podrás usarlas para que encuentren más fácil tu empresa.)",
      "Posts en las cuentas de COPU",
      "10 entradas por evento a Congreso Adictos, Marketing Dealers, Movimiento CLIC y COPU Pary. (Entradas VIP exclusivas para la COPU Pary)",
      "10% de descuento en la Rueda de Negocios Hand-Shakers, Congreso Más Cartagena y Festival El Dorado",
      "Descuentos especiales en Shutterstock y Adobe",
      "Descuentos en cursos seleccionados en Nogma y EAN X",
      "Descuento especial en afiliación a la IAB",
      "Hasta 3 publicaciones de ofertas laborales de tu empresa en las redes de COPU",
      "Acceso a grupo de Whatsapp de COPU con directivos y empresarios de marketing y publicidad.",
    ],
    color: "#1DEC80",
  },
];

interface PlansPageProps {
  handlePlan: (route: string) => void;
}

export default function PlansPage({ handlePlan }: PlansPageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function detectMobile() {
      console.log(window.innerWidth);
      if (screen.width <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    if (document.readyState === "complete") {
      detectMobile();
    } else {
      window.addEventListener("load", detectMobile);
    }

    window.addEventListener("resize", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
      window.removeEventListener("load", detectMobile);
    };
  }, [isMobile, setIsMobile]);
  return (
    <div className="container mx-auto py-10 px-3">
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 items-center py-6 px-12 lg:px-0">
        <div className="lg:pr-16 order-1">
          <h1 className=" text-7xl font-bold text-primary-color">Planes</h1>
          <p className="text-sm">
            Conoce los planes que tenemos para que tu empresa haga parte del
            directorio más grande de las industrias creativas de la región.
          </p>
        </div>
        {plans.map(
          (
            { color, title, description, price, sufixPrice, link, features },
            i
          ) => (
            <div
              style={{ order: isMobile ? -i + plans.length : i + 1 }}
              key={i}
            >
              <CardPlan
                id={title}
                color={color}
                name={title}
                description={description}
                price={parseInt(formatCurrency(price, "es-CO", "COP"))}
                features={features}
                sufixPrice={sufixPrice}
                handlePlan={() => handlePlan(link)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
