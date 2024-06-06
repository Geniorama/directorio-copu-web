import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary-color": "#1DEC80",
        "primary-color-hover": "#13B762",
        "secondary-color": "#121212",
        "text-dark": "#080809",
        "text-light": "#FFFFFF",
        "secondary-color-light": "#18181B",
        "secondary-color-hover": "#2D2D33"
      }
    },
  },
  plugins: [],
};
export default config;
