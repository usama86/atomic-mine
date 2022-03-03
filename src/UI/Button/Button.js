import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ThemedBtn = styled(Button)(({ theme, width, size }) => ({
  borderRadius: "30px",
  textTransform: "capitalize",
  padding: "0.8rem 0",
  width: width,
}));

export default function ButtonComp({
  styleOverrides,
  variant,
  themeColor,
  children,
  width,
  ...otherProps
}) {
  return (
    <ThemedBtn
      width={width}
      variant={variant}
      color={themeColor}
      style={{ ...styleOverrides }}
      {...otherProps}
    >
      {children}
    </ThemedBtn>
  );
}

ButtonComp.defaultProps = {
  variant: "contained",
  children: "No children given",
  themeColor: "primary",
  width: "12rem",
};
