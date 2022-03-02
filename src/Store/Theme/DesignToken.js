const black = "#121C26";
const green = "#00B4A4";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      secondary: {
        main: black,
      },
      primary: {
        main: green,
      },
    }),
    ...(mode === "light" && {
      secondary: {
        main: black,
      },
      primary: {
        main: green,
      },
    }),
  },
});
