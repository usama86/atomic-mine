import React from "react";
import { StyledTextField } from "./TextFieldComp.style";
const TextFieldComp = ({ value, onChange, ...props }) => (
  <StyledTextField value={value} onChange={onChange} {...props} />
);

export default TextFieldComp;
