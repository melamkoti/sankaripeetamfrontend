/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anek: ["Anek Telugu", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};

{
  /* <p class="font-inter">This text uses Inter font</p>
<p class="font-mulish">This text uses Mulish font</p>
<p class="font-tiro">This text uses Tiro Telugu font</p> */
}
