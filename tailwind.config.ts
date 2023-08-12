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
        greetingUnderline: "rgb(154, 40, 206)",
        workShadow: "rgba(101, 97, 97, 0.517)",
        aboutWork: "rgba(44, 42, 42, 0.9)",
      },
      boxShadow: {
        greetingUnderline: "0 0 10px rgba(233, 228, 240, 0.898)",
        skillBar: "0 0 4px rgba(233, 228, 240, 0.898)",
        homeWork: "0 0 1rem -0.2rem rgba(248, 246, 246, 0.898)",
      },
      width: {
        pickImage: "45%",
        skillLevel: "10%",
      },
      maxWidth: {
        pickImage: "500px",
      },
      fontSize: {
        greeting: "10rem",
        homeSeparator: "9rem",
        "2.5xl": "1.65rem",
        "3.5xl": "2.05rem",
        "4.5xl": "2.6rem",
        "5.5xl": "3.4rem",
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
