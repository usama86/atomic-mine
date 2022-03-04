import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import DatePicker from "../../../../../UI/Date/DatePickerComp";
const ChangeProvCash = () => {
  const [expiration, setExpiration] = React.useState(null);
  return (
    <Stack gap={2}>
      <Typography variant="h6">Change Provisional Cash</Typography>
      <TextFieldComp isdefault={true} label="New" />
      <DatePicker
        label="Expiration"
        value={expiration}
        setValue={(e) => setExpiration(e)}
      />
      <Stack direction="row" justifyContent="center">
        <Button sx={{ color: "white" }} isdefault={true}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default ChangeProvCash;
