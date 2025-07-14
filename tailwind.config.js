/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        ponnala: ['Ponnala', 'sans-serif'], // Note: Ponnala might need verification
        tiro: ['Tiro Telugu', 'serif'],
      },
    },
  },
  plugins: [],
};


{/* <p class="font-inter">This text uses Inter font</p>
<p class="font-mulish">This text uses Mulish font</p>
<p class="font-tiro">This text uses Tiro Telugu font</p> */}