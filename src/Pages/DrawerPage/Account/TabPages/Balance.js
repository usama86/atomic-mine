import React from "react";
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
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";
import { PositionClose } from "./../../Account/TabPages/Modals/";
import Typography from "./../../../../UI/Typography/Typography";
import Modal from "../../../../UI/Modal/Modal";
import IconButton from "@mui/material/IconButton";
import GFVData from "./../../../../Constants/mock_data_gfv.json";

const GFVTableCols = [
  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "trade_date",
    headerName: "Trade Date",
    type: "date",
    flex: 1,
  },
  {
    field: "order",
    headerName: "Order",
    flex: 1,
  },
  {
    field: "expires",
    headerName: "Expires",
    type: "date",
    flex: 1,
  },
];

const Balance = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [random, setRandom] = React.useState("");
  const acceptHandler = () => {
    setRandom(`${Math.random()}`);
  };
  const column = [
    {
      field: "stockposition",
      headerName: "Stock Position",
      flex: 1,
    },
    {
      field: "underlying_price",
      headerName: "Underlying Price",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
    },
    {
      field: "daysToExpiration",
      headerName: "Days to expiration",
      flex: 1,
    },
    {
      field: "costBasis",
      headerName: "Cost Basis",
      flex: 0.5,
    },
    {
      field: "cmv",
      headerName: "Current Market Value",
      flex: 1,
    },
    {
      field: "pl",
      headerName: "P/L",
      flex: 0.5,
    },
    {
      field: "close-btn",
      flex: 1,
      headerName: "CLOSE",
      renderCell: (params) => (
        <Modal
          closeDependancy={random}
          content={<PositionClose triggerClose={acceptHandler} />}
        >
          <Button isdefault={true}>CLOSE</Button>
        </Modal>
      ),
    },
  ];

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
              <LabelChild
                Icons
                labelXsSize={10}
                childrenXsSize={2}
                label={"GFVs/Margin Calls"}
                sxChild={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                22$
                <Modal
                  width="50vw"
                  height="30vw"
                  content={
                    <>
                      <Typography variant="h6">GFVs</Typography>
                      <Table rows={GFVData} columns={GFVTableCols} />
                    </>
                  }
                >
                  <IconButton>
                    <AiOutlineInfoCircle size={23} />
                  </IconButton>
                </Modal>
              </LabelChild>
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

const row = [
  {
    id: 0,
    underlying_price: "4.00",
    quantity: "8",
    stockposition: "hello",
    daysToExpiration: "World",
    costBasis: "5$",
    cmv: "05-02-1990",
    pl: "05-02-1990",
  },
  {
    id: 1,
    underlying_price: "4.00",
    quantity: "8",
    stockposition: "hello1",
    daysToExpiration: "World1",
    costBasis: "6$",
    cmv: "05-02-1991",
    pl: "05-02-1993",
  },
  {
    id: 2,
    underlying_price: "4.00",
    quantity: "8",
    stockposition: "hello2",
    daysToExpiration: "World2",
    costBasis: "7$",
    cmv: "05-02-1992",
    pl: "05-02-1994",
  },
];
