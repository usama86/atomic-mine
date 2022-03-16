import React from "react";
import Box from "./../../../../../UI/Layout/Box";
import Stack from "./../../../../../UI/Layout/Stack";

const InfoApplication = (props) => {
  return (
    <Stack>
      <Box>Name: {props.name}</Box>
      <Box>Acc: {props.account}</Box>
    </Stack>
  );
};

export default InfoApplication;
