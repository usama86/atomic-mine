import PropTypes from "prop-types";
import React from "react";
import Grid from "@mui/material/Grid";

export default function CenteredGrid({ children, xsSize, ...otherProps }) {
  return <Grid {...otherProps}>{children}</Grid>;
}

CenteredGrid.propTypes = {
  children: PropTypes.any,
};
CenteredGrid.defaultProps = {
  children: <div>Default Children</div>,
};
