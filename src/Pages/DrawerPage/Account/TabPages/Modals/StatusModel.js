import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";

const Status = ({
  triggerClose,
  status,
  onChangeStatus,
  onSaveStatus,
  ssn,
  postNotesReq,
}) => {
  const [notes, setNotes] = React.useState("");
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
      <TextFieldComp
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        isdefault={true}
        label="Notes"
      />
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            onSaveStatus();
            if (notes !== "") {
              postNotesReq(ssn, notes);
              setNotes("");
            }
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
