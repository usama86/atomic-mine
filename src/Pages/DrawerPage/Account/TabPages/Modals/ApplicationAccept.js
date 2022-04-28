import React from "react";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Checkbox from "../../../../../UI/Checkbox/Checkbox";

const ApplicationAccept = ({ ssn, triggerClose, onAcceptApplication }) => {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <Stack gap={2}>
      <Typography variant="h6">Accept</Typography>
      <TextFieldComp
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isdefault={true}
        label="Notes"
      />
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked((prevState) => !prevState)}
        Label="Accepted by Bella"
      />
      <Stack direction="row" justifyContent="center">
        <Button
          disabled={!checked}
          onClick={async (e) => {
            e.preventDefault();
            onAcceptApplication(value, ssn);
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
