/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tyc",
        destination:
          "https://s3.copu.media/Terminos%20y%20condiciones_Tratamiento%20de%20datos_compressed.pdf", // Reemplaza con la URL a la que deseas redirigir.
        permanent: true, // true si deseas que sea una redirección 301 (permanente).
      },

      {
        source: "/habeasdata",
        destination:
          "https://s3.copu.media/Terminos%20y%20condiciones_Tratamiento%20de%20datos_compressed.pdf", // Reemplaza con la URL a la que deseas redirigir.
        permanent: true, // true si deseas que sea una redirección 301 (permanente).
      },
    ];
  },
};

export default nextConfig;
