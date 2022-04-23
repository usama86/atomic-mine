import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextFieldComp from "../TextField/TextFieldComp";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DatePickerComp = ({
  value,
  setValue,
  label,
  isdefault,
  textFieldProps,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        open={open}
        label={label}
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextFieldComp isdefault={true} {...params} {...textFieldProps} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;

DatePickerComp.defaultProps = {
  isdefault: false,
};
