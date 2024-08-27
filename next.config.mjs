/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/tyc',
          destination: 'https://s3.copu.media/TERMINOS%20Y%20CONDICIONES%20DIRECTORIO%20BY%20COPU.pdf', // Reemplaza con la URL a la que deseas redirigir.
          permanent: true, // true si deseas que sea una redirección 301 (permanente).
        },

        {
            source: '/habeasdata',
            destination: 'https://s3.copu.media/AUTORIZACION%20PARA%20EL%20TRATAMIENTO%20DE%20DATOS%20DIRECTORIO%20COPU.pdf', // Reemplaza con la URL a la que deseas redirigir.
            permanent: true, // true si deseas que sea una redirección 301 (permanente).
          },
      ];
    },
  };
  
  export default nextConfig;
  