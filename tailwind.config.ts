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
      backgroundColor: {
        theme: "rgb(39, 35, 37)",
      },
      width: {
        pickImage: "45%",
      },
      maxWidth: {
        pickImage: "500px",
      },
      animation: {
        blink: "blink 1s linear infinite",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }: any) {
      const size = "5rem";
      const navWidth = "40rem";
      const newUtilities = {
        ".header-height": {
          height: size,
        },
        ".header-height-padding": {
          padding: size,
        },
        ".navigation-width": {
          width: navWidth,
        },
        ".navigation-padding": {
          "padding-left": navWidth,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]); // バリアントの適用
    },
  ],
};
export default config;
