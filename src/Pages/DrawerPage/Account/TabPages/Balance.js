import LabelChild from "./../../../../UI/LabelChild";
import Stack from "./../../../../UI/Layout/Stack";
import Grid from "./../../../../UI/Layout/Grid";
import Card from "./../../../../UI/Card/Card";
const Balance = () => {
  //9
  return (
    <Card>
      <Grid spacing={6} container>
        <Grid item container xsSize={6}>
          <LabelChild label={"1st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"2st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"3st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"4st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"5st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"6st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"7st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"8st"}>Hi</LabelChild>
        </Grid>
        <Grid item container xsSize={6}>
          <LabelChild label={"9st"}>Hi</LabelChild>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Balance;
