import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";
import Search from "./../../../../../UI/AutoComplete/Autocomplete";

const ApplicationReject = ({ triggerClose }) => {
  return (
    <Stack gap={2}>
      <Typography variant="h6">Reject</Typography>
      <TextFieldComp isdefault={true} label="Notes" />
      <Search Label="Rejected Because" />
      <Stack direction="row" justifyContent="space-between">
        <Button sx={{ color: "white" }} isdefault={true}>
          BlackList
        </Button>
        <Button
          onClick={(e) => {
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
