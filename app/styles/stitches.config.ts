import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      red: "#ff6d6d",
      steel: "#363645",
      black: "#202020",
      white: "#fff",
      grey: "#ccc",
    },
  },
  utils: {},
  prefix: "",
});
