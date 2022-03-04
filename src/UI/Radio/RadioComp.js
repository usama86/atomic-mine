import PropTypes from "prop-types";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ControlledRadioButtonsGroup({
  hasLabel,
  options,
  direction,
  label,
  value,
  setValue,
}) {
  return (
    <FormControl>
      {hasLabel && (
        <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      )}
      <RadioGroup
        row={direction === "row"}
        sx={{ justifyContent: "space-evenly" }}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

ControlledRadioButtonsGroup.propTypes = {
  direction: PropTypes.string,
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array,
  setValue: PropTypes.func,
  value: PropTypes.string,
};

ControlledRadioButtonsGroup.defaultProps = {
  hasLabel: true,
  options: [
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Male",
      value: "male",
    },
  ],
  direction: "row",
  label: "no label given",
  value: "",
  setValue: (e) => console.log("Not given", e),
};
