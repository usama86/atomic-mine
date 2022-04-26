import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Search from "./../../../../../UI/AutoComplete/Autocomplete";

const ApplicationReject = ({ triggerClose, onRejectApplication }) => {
  const [value, setValue] = React.useState("");
  return (
    <Stack gap={2}>
      <Typography variant="h6">Reject</Typography>
      <TextFieldComp
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isdefault={true}
        label="Notes"
      />
      <Search Label="Rejected Because" />
      <Stack direction="row" justifyContent="space-between">
        <Button sx={{ color: "white" }} isdefault={true}>
          BlackList
        </Button>
        <Button
          onClick={(e) => {
            onRejectApplication(value);
            e.preventDefault();
            triggerClose();
          }}
          sx={{ color: "white" }}
          isdefault={true}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default ApplicationReject;
