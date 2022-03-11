import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckboxComp = ({ onlyCheckbox, Label, ...otherProps }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      {onlyCheckbox ? (
        <Checkbox
          {...otherProps}
          checked={checked}
          onChange={(e) => setChecked((prevState) => !prevState)}
        />
      ) : (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...otherProps}
                checked={checked}
                onChange={(e) => setChecked((prevState) => !prevState)}
              />
            }
            label={Label}
          />
        </FormGroup>
      )}
    </>
  );
};

CheckboxComp.propTypes = {
  onlyCheckbox: PropTypes.bool,
  Label: PropTypes.string,
};

CheckboxComp.defaultProps = {
  onlyCheckbox: false,
  Label: "Default Label",
};
export default CheckboxComp;
