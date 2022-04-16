import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import StackFunc from "../Layout/Stack";

const Loader = () => {
  return (
    <StackFunc sx={{ width: "100%" }} alignItems="center">
      <CircularProgress />
    </StackFunc>
  );
};

export default Loader;
