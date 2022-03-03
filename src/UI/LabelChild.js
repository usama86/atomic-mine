import React from "react";
import Typography from "./Typography/Typography";
import Grid from "./Layout/Grid";

const LabelChild = ({ label, children }) => {
  return (
    <Grid container>
      <Grid item xsSize={4}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xsSize={4}>
        Hello
      </Grid>
    </Grid>
  );
};

export default LabelChild;
