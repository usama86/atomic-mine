import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckboxComp = ({ ...otherProps }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      {...label}
      {...otherProps}
      checked={checked}
      onChange={(e) => setChecked((prevState) => !prevState)}
    />
  );
};

export default CheckboxComp;
