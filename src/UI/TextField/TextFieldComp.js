import React from "react";
import { StyledTextField } from "./TextFieldComp.style";
import TextField from "@mui/material/TextField";
const TextFieldComp = ({ isdefault, value, onChange, ...props }) => {
  if (isdefault) {
    return <TextField value={value} onChange={onChange} {...props} />;
  }
  return <StyledTextField value={value} onChange={onChange} {...props} />;
};

export default TextFieldComp;

TextFieldComp.defaultProps = {
  isdefault: false,
};
