export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'dark' && {
      primary: {
          main: "#121C26",
        },
     secondary:{
         main:"#00B4A4",
     }
      }),
      ...(mode === 'light' && {
        primary: {
            main: "#121C26",
        },
        secondary:{
            main:"#00B4A4",
        }
      }),

      },
      
     
  });