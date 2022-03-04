import React from "react";
import { SnackbarProvider } from "notistack";
// GUIDE
// const { enqueueSnackbar } = useSnackbar();

// const handleClick = () => {
//   enqueueSnackbar("I love snacks.");
// };

// const handleClickVariant = (variant) => () => {
//   // variant could be success, error, warning, info, or default
//   enqueueSnackbar("This is a success message!", { variant });
// };

export default function IntegrationNotistack({ children }) {
  return (
    <SnackbarProvider
      autoHideDuration={600}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
}
