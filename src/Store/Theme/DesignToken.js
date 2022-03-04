const black = "#121C26";
const green = "#00B4A4";
const white = "#fff";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      // black: {
      //   main: black,
      // },
      primary: {
        main: green,
      },
      // appBarFontColor: {
      //   main: "#fff",
      // },
    }),
    ...(mode === "light" && {
      // black: {
      //   main: white,
      // },
      primary: {
        main: green,
      },
      // appBarFontColor: {
      //   main: green,
      // },
      // logInBackground: black,
    }),
  },
});
