import React from "react";
import { StyledTextField } from "./TextFieldComp.style";
import TextField from "@mui/material/TextField";
const TextFieldComp = ({ value, onChange, ...props }) => {
  return <StyledTextField value={value} onChange={onChange} {...props} />;
};

export default TextFieldComp;
