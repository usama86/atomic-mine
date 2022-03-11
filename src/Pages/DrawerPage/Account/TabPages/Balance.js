import LabelChild from "./../../../../UI/LabelChild";
import Grid from "./../../../../UI/Layout/Grid";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import TextField from "./../../../../UI/TextField/TextFieldComp";
import UploadButton from "./../../../../UI/UploadButton/UploadButton";
import Table from "./../../../../UI/Table/Table";
import Box from "./../../../../UI/Layout/Box";
import Button from "./../../../../UI/Button/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";

const Balance = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack spacing={2}>
      <Stack direction={matches ? "column" : "row"} spacing={2}>
        <Card>
          <Grid sx={{ padding: "1rem" }} spacing={4} container>
            <Grid item container xs={12}>
              <LabelChild label={"Net account value"}>2$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Buying Power"}>3$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Settled"}>7$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Unsettled"}>9$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Pending deposit"}>15$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Provisional Cash"}>22$</LabelChild>
            </Grid>
          </Grid>
        </Card>
        <Card>
          <Grid sx={{ padding: "1rem" }} spacing={4} container>
            <Grid item container xs={12}>
              <LabelChild label={"Risk flag"}>33$</LabelChild>
            </Grid>
            <Grid item container xs={12}>
              <LabelChild label={"Good faith violation"}>22$</LabelChild>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Notes"
                fullWidth
                size="small"
                variant="outlined"
                isdefault={true}
              />
            </Grid>
            <Grid item container xs={12}>
              <Stack
                sx={{ width: "100%" }}
                justifyContent="flex-end"
                direction="row"
                gap="1rem"
              >
                <UploadButton
                  sx={{ color: "white" }}
                  size="small"
                  labelStyle={{ alignSelf: "flex-end", margin: 0 }}
                />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    enqueueSnackbar(Constants.Save_Changes_Success, {
                      variant: "success",
                    });
                  }}
                  sx={{ color: "white" }}
                  size="small"
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Stack>
      <Box sx={{ height: "20rem" }}>
        <Table columns={column} rows={row} />
      </Box>
    </Stack>
  );
};

export default Balance;

const column = [
  {
    field: "stockposition",
    headerName: "Stock Position",
    flex: 1,
  },
  {
    field: "datetoexpiry",
    headerName: "Date to expiry",
    flex: 1,
  },
  {
    field: "costbases",
    headerName: "Cost bases",
    flex: 1,
  },
  {
    field: "cmv",
    headerName: "Current Market Value",
    flex: 1,
  },
  {
    field: "pl",
    headerName: "P/L",
    flex: 1,
  },
];
const row = [
  {
    id: 0,
    stockposition: "hello",
    datetoexpiry: "World",
    costbases: "5$",
    cmv: "05-02-1990",
    pl: "05-02-1990",
  },
  {
    id: 1,
    stockposition: "hello1",
    datetoexpiry: "World1",
    costbases: "6$",
    cmv: "05-02-1991",
    pl: "05-02-1993",
  },
  {
    id: 2,
    stockposition: "hello2",
    datetoexpiry: "World2",
    costbases: "7$",
    cmv: "05-02-1992",
    pl: "05-02-1994",
  },
];
