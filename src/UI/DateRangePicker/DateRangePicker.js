import React from "react";
import DateRangePickerComp from "@wojtekmaj/react-daterange-picker";

const DateRangePicker = ({ getDates }) => {
  const [value, setValue] = React.useState([new Date(), new Date()]);
  const handleChange = (e) => {
    getDates(e);
    setValue(e);
  };
  return (
    <div>
      <DateRangePickerComp onChange={handleChange} value={value} />
    </div>
  );
};

export default DateRangePicker;

DateRangePicker.defaultProps = {
  getDates: (e) => {
    console.log("no props given", e);
  },
};
