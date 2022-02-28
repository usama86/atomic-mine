import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ThemedBtn = styled(Button)({
  borderRadius: "30px",
  textTransform: "capitalize",
  padding: "0.8rem 0",
  width: "12rem",
});
export default function ButtonComp({ children, ...otherProps }) {
  return (
    <ThemedBtn
      variant="contained"
      color="secondary"
      sx={{ color: "white" }}
      //   sx={{ background: theme.palette.secondary.main }}
      {...otherProps}
    >
      {children}
    </ThemedBtn>
  );
}

ButtonComp.defaultProps = {
  children: "No children given",
};
