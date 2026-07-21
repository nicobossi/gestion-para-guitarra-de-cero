import { defineConfig } from "@pandacss/dev";
import { colorsToken } from './src/globals/styles/tokens/colors';
import { gradientsToken } from './src/globals/styles/tokens/gradients';
import { durationsToken } from './src/globals/styles/tokens/durations';
import { fade } from './src/globals/styles/animations/fade';
import { globals } from './src/globals/styles/globals';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: fade,
      tokens: {
        colors: colorsToken,
        gradients: gradientsToken,
        durations: durationsToken,
      }
    },
  },

  // Globals Styles
  globalCss: globals,

  // The output directory for your css system
  outdir: "styled-system",
});
