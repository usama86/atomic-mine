import React from "react";
import Switch from "../../../../../UI/Switch/Switch";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Stack from "../../../../../UI/Layout/Stack";
import Box from "../../../../../UI/Layout/Box";
import Button from "../../../../../UI/Button/Button";

const RestrictTrading = ({
  triggerClose,
  label,
  value,
  changeValueHandler,
}) => {
  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{label}</Typography>
        <Switch
          value={value}
          onChanged={(e, val) => changeValueHandler(e, val, label)}
        />
      </Stack>
      <Box>
        <TextFieldComp fullWidth isdefault={true} label="Notes" />
      </Box>
      <Stack alignItems="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            changeValueHandler(null, value, "save");
            triggerClose();
          }}
          sx={{ color: "white" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default RestrictTrading;
