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
        bgColor: "#edf3f8",
        addcardbgColor: "#e6f6eb",
        primary: "#339d89", //vert
        secondary: "#ff880c", //orange
        secondarylith: "rgba(243,197,152,0.11)", //orange
        grayColor: "#d7dade", //gray
        titleGrayColor: "#b8b8b8", //for title
        softwhite: "#8F8F8F", //gray 8F8F8F
      },
    },
  },
  plugins: [],
};
export default config;
