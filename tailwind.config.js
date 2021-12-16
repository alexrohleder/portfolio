const plugin = require("tailwindcss/plugin");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],

  plugins: [
    plugin(({ addVariant }) => {
      addVariant("lgp", "@media print, (min-width: 1024px)");
    }),
  ],
};
