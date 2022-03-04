import React from "react";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material/styles";

// GUIDE
// const { enqueueSnackbar } = useSnackbar();

// const handleClick = () => {
//   enqueueSnackbar("I love snacks.");
// };

// const handleClickVariant = (variant) => () => {
//   // variant could be success, error, warning, info, or default
//   enqueueSnackbar("This is a success message!", { variant });
// };

const StyledSnackBar = styled(SnackbarProvider)(({ theme }) => ({
  "&.SnackbarItem-variantSuccess": {
    backgroundColor: theme.palette.primary.main,
  },
  "&.SnackbarItem-variantWarning": {
    backgroundColor: theme.palette.warning.main,
  },
  "&.SnackbarItem-variantInfo": {
    backgroundColor: theme.palette.info.main,
  },
  "&.SnackbarItem-variantError": {
    backgroundColor: theme.palette.error.main,
  },
}));

export default function IntegrationNotistack({ children }) {
  return (
    <StyledSnackBar
      autoHideDuration={600}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={3}
    >
      {children}
    </StyledSnackBar>
  );
}
