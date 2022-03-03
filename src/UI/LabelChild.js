import React from "react";
import Typography from "./Typography/Typography";
import Grid from "./Layout/Grid";

const LabelChild = ({ label, children }) => {
  return (
    <>
      <Grid item xsSize={4}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xsSize={4}>
        {children}
      </Grid>
    </>
  );
};

export default LabelChild;
