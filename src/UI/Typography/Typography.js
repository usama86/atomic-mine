import React from "react";
import Typography from "@mui/material/Typography";

const TypographyComp = ({ children, ...otherprops }) => {
  return <Typography {...otherprops}>{children}</Typography>;
};

export default TypographyComp;
