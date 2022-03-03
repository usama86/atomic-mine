import React from "react";
import Typography from "./Typography/Typography";
import Grid from "./Layout/Grid";

const LabelChild = ({ label, children }) => {
  return (
    <>
      <Grid item xs={11}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={1}>
        {children}
      </Grid>
    </>
  );
};

export default LabelChild;
