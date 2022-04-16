import React from "react";
import { StyledTextField } from "./TextFieldComp.style";
import TextField from "@mui/material/TextField";
const TextFieldComp = ({ isdefault, ...props }) => {
  if (isdefault) {
    return <TextField {...props} />;
  }
  return <StyledTextField {...props} />;
};

export default React.memo(TextFieldComp);

TextFieldComp.defaultProps = {
  isdefault: false,
};
