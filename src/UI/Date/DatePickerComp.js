import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextFieldComp from "../TextField/TextFieldComp";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DatePickerComp = ({ value, setValue, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextFieldComp isdefault={true} {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;
