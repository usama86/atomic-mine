import React from "react";
import Stack from "../../../../../UI/Layout/Stack";
import Search from "./../../../../../UI/AutoComplete/Autocomplete";
import Checkbox from "./../../../../../UI/Checkbox/Checkbox";

const BlacklistOption = ({ triggerClose }) => {
  return (
    <Stack>
      <Search Label="Blacklist" />
      <Checkbox Label="No Trade" />
      <Checkbox Label="Liq Only" />
    </Stack>
  );
};

export default BlacklistOption;
