import React from "react";
import Stack from "../../../../../UI/Layout/Stack";
import Search from "./../../../../../UI/Table/TableSearch";
import Checkbox from "./../../../../../UI/Checkbox/Checkbox";

const BlacklistOption = ({ triggerClose }) => {
  return (
    <Stack>
      <Search />
      <Checkbox Label="No Trade" />
      <Checkbox Label="Liq Only" />
    </Stack>
  );
};

export default BlacklistOption;
