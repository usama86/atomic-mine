import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";

const UnlinkModel = ({
  triggerClose,
  LinkVal,
  onChangeLink,
  onSaveLink,
  ssn,
  postNotesReq,
}) => {
  const onChange = (e) => {
    onChangeLink(e);
  };
  const [notes, setNotes] = React.useState("");
  return (
    <Stack gap={2}>
      <Typography variant="h6">Unlink</Typography>
      <Checkbox
        Label="Unlink"
        onChange={onChange}
        checked={LinkVal === "Unlink" ? false : true}
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
            onSaveLink();
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

export default UnlinkModel;
