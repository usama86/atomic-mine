import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";

const Status = ({ triggerClose, status, onChangeStatus }) => {
  const onChange = (e) => {
    onChangeStatus(e);
  };
  return (
    <Stack gap={2}>
      <Typography variant="h6">Status</Typography>
      <Checkbox
        Label="Freeze"
        onChange={onChange}
        checked={status === "Active" ? false : true}
      />
      <TextFieldComp isdefault={true} label="Notes" />
      <Stack direction="row" justifyContent="center">
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

export default Status;
