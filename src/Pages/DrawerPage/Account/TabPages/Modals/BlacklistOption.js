import React from "react";
import Stack from "../../../../../UI/Layout/Stack";
import Search from "./../../../../../UI/AutoComplete/Autocomplete";
import Checkbox from "./../../../../../UI/Checkbox/Checkbox";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";

const BlacklistOption = ({ triggerClose }) => {
  return (
    <Stack gap={2}>
      <Search Label="Blacklist" />
      <Checkbox Label="No Trade" />
      <Checkbox Label="Liq Only" />
      <TextFieldComp fullWidth isdefault={true} label="Notes" />
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

export default BlacklistOption;
