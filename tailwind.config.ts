import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "noticias": "#E5BA00",
        "negocios": "#FF66C4",
        "pensamento": "#699DDA",
        "entretenimento": "#D61E25",
        "esportes": "#2AAB58",
      },
    },
  },
  plugins: [],
};
export default config;
