/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mode: "jit",
    extend: {},
    fontFamily: {
      EudoxusSansBold: ["EudoxusSans-Bold", "sans-serif"],
      EudoxusSansExtraBold: ["EudoxusSans-ExtraBold", "sans-serif"],
      EudoxusSansExtraLight: ["EudoxusSans-ExtraLight", "sans-serif"],
      EudoxusSansLight: ["EudoxusSans-Light", "sans-serif"],
      EudoxusSansMedium: ["EudoxusSans-Medium", "sans-serif"],
      EudoxusSansRegular: ["EudoxusSans-Regular", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
