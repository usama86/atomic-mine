import PropTypes from "prop-types";
import React from "react";
import { Card } from "@mui/material";

const CardStyle = ({ children, width, styleProps, ...otherProps }) => {
  const cardStyles = {
    width: width,
    ...styleProps,
  };
  return (
    <Card sx={cardStyles} {...otherProps}>
      {children}
    </Card>
  );
};

export default CardStyle;

CardStyle.propTypes = {
  children: PropTypes.any.isRequired,
  width: PropTypes.string,
};

CardStyle.defaultProps = {
  width: "100%",
};