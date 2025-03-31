import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"  // ✅ Added for better coverage
  ],
  safelist: [
    "w-full", "h-full", "px-4", "py-4", "text-center", "hidden", "block",
    "sm:max-w-[50%]", "w-[90%]", "h-screen", "overflow-hidden",
    "sm:w-[60%]", "md:w-[50%]", "lg:w-[40%]" // ✅ Added common variations
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'android': '390px',  // ✅ Custom breakpoint
        'sm': '640px',  // ✅ Default breakpoint order
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};
export default config;
