export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      secondary: {
        main: "#121C26",
      },
      primary: {
        main: "#00B4A4",
      },
    }),
    ...(mode === "light" && {
      secondary: {
        main: "#121C26",
      },
      primary: {
        main: "#00B4A4",
      },
    }),
  },
});
