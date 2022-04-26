import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";

const ApplicationAccept = ({ triggerClose, onAcceptApplication }) => {
  return (
    <Stack gap={2}>
      <Typography variant="h6">Accept</Typography>
      <TextFieldComp isdefault={true} label="Notes" />
      <Checkbox Label="Accepted by Bella" />
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={(e) => {
            onAcceptApplication();
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

export default ApplicationAccept;
