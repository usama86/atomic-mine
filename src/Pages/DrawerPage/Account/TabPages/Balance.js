import LabelChild from "./../../../../UI/LabelChild";
import Grid from "./../../../../UI/Layout/Grid";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";

const Balance = () => {
  //9
  return (
    <Stack direction="row" spacing={2}>
      <Card>
        <Grid sx={{ padding: "1rem" }} spacing={6} container>
          <Grid item container xs={12}>
            <LabelChild label={"Net account value"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Buying Power"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Settled"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Unsettled"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Pending deposit"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Provisional Cash"}>Hi</LabelChild>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Grid sx={{ padding: "1rem" }} spacing={6} container>
          <Grid item container xs={12}>
            <LabelChild label={"Risk flag"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Good feed violations"}>Hi</LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild label={"Notes"}>Hi</LabelChild>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default Balance;
