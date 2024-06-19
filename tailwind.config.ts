import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: { min: "0px", max: "599px" },
        tablet: { min: "600px", max: "959px" },
        laptop: { min: "960px", max: "1279px" },
        desktop: { min: "1280px", max: "1919px" },
        fullHd: { min: "1920px" },
      },
      colors: {
        primaryBlue: "#13329E",
        secondaryBlue: "#3572EF",
        tertiaryBlue: "#3C87F8",
      },
    },
  },
  plugins: [],
};
export default config;
