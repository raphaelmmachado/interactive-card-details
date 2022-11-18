/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "340px",
      xs: "475px",
      // => @media (min-width: 475px) {...}
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      vlg: "1124px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      red: "hsl(0, 100%, 66%)",
      violete: {
        100: "hsl(270, 3%, 87%)",
        400: "hsl(279, 6%, 55%)",
        900: "hsl(278, 68%, 11%)",
      },
      inpt_border: {
        from: "hsl(249, 99%, 64%)",
        to: "hsl(278, 94%, 30%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
