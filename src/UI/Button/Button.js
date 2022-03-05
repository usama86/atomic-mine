import PropTypes from "prop-types";
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
  isdefault,
  children,
  width,
  ...otherProps
}) {
  if (isdefault) {
    return (
      <Button
        sx={{ color: "white" }}
        width={width}
        variant={variant}
        color={themeColor}
        style={{ ...styleOverrides }}
        {...otherProps}
      >
        {children}
      </Button>
    );
  }
  return (
    <ThemedBtn
      width={width}
      variant={variant}
      color={themeColor}
      sx={{ color: "white" }}
      style={{ ...styleOverrides }}
      {...otherProps}
    >
      {children}
    </ThemedBtn>
  );
}

ButtonComp.propTypes = {
  children: PropTypes.string,
  isdefault: PropTypes.bool,
  styleOverrides: PropTypes.any,
  themeColor: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
};

ButtonComp.defaultProps = {
  variant: "contained",
  children: "No children given",
  themeColor: "primary",
  width: "12rem",
  isdefault: true,
};
