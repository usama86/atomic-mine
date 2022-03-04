import React from "react";
import Switch from "../../../../../UI/Switch/Switch";

import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Stack from "../../../../../UI/Layout/Stack";
import Box from "../../../../../UI/Layout/Box";
import Button from "../../../../../UI/Button/Button";

const RestrictTrading = () => {
  const [value, setValue] = React.useState(false);
  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="error.main" variant="h6">
          Restrict Trading
        </Typography>
        <Switch
          value={value}
          onChanged={(e) => setValue((prevState) => !prevState)}
        />
      </Stack>
      <Box>
        <TextFieldComp fullWidth isdefault={true} size="small" label="Notes" />
      </Box>
      <Stack alignItems="center">
        <Button sx={{ color: "white" }}>Save</Button>
      </Stack>
    </Stack>
  );
};

export default RestrictTrading;
