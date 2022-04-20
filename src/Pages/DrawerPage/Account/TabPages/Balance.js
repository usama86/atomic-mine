import React from "react";
import LabelChild from "./../../../../UI/LabelChild";
import Grid from "./../../../../UI/Layout/Grid";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import Box from "./../../../../UI/Layout/Box";
import Button from "./../../../../UI/Button/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PositionClose } from "./../../Account/TabPages/Modals/";
import Typography from "./../../../../UI/Typography/Typography";
import Modal from "../../../../UI/Modal/Modal";
import IconButton from "@mui/material/IconButton";
import GFVData from "./../../../../Constants/mock_data_gfv.json";
import Api from "../../../../Services/AccountApi";
import AddNotes from "./AddNotes";
import Loader from "../../../../UI/Loader/Loader";
import { useSnackbar } from "notistack";

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

const defaultBalanceData = {
  id: "",
  account: "",
  market_value: ".93",
  unsettled_cash: "",
  settled_cash: "",
  provisional_cash: "",
  pending_deposit: "",
  temp_cash_withheld: "",
  buying_power: "",
  net_acct_value: "",
  gross_acct_value: "",
  amt_of_unsettled_cash_used_to_fund_new_long_positions: "",
};

const Balance = (ssn) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loader, setLoader] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [random, setRandom] = React.useState("");
  const [balanceData, setBalanceData] = React.useState(defaultBalanceData);

  const [position, setPosition] = React.useState([]);

  const [gfvs, setGfvs] = React.useState([]);

  const acceptHandler = () => {
    setRandom(`${Math.random()}`);
  };
  const [riskFlag, setRiskFlag] = React.useState("");

  const fetchData = async () => {
    let getBalanceData = await Api.getBalance(ssn);
    if (getBalanceData.status === 200) {
      setBalanceData(getBalanceData.data.data);
    } else {
      enqueueSnackbar(`Failed to get Balance data`, {
        variant: "error",
      });
      setBalanceData(defaultBalanceData);
    }
    let getPosition = await Api.ViewPositions(ssn);
    // if (getPosition.length === 0)
    //   enqueueSnackbar(`Failed to get Positions`, {
    //     variant: "error",
    //   });
    setPosition(getPosition);
    ///NEED TO SET IT UP WITH RISKFLAG AND GETGFVS
    let getRiskFlag = await Api.getTags(ssn);
    if (getRiskFlag.status === 200) setRiskFlag(getRiskFlag.data.result[0]);
    else {
      enqueueSnackbar("Failed to get tags", {
        variant: "error",
      });
      setRiskFlag("");
    }
    let getGFVs = await Api.getGFVs(ssn);
    setGfvs(getGFVs.data.data[ssn.ssn]);

    setLoader(false);
  };

  React.useEffect(() => {
    setLoader(true);
    fetchData();
  }, [ssn]);

  const getPlValue = (params) => {
    let total = params.row.returns_total;
    let change = params.row.percent_change_total;

    if (!total) total = 0;
    if (!change) change = 0;
    let val = Number(total) + Number(change);
    return val;
  };

  const getExpirationDate = (params) => {
    if (/\d/.test(params.row.ticker)) {
      let [ticker, stock, expdate, cp, strike] = params.row.ticker.match(
        "([A-Z]+)([0-9]+)([C|P])([0-9]+)"
      );
      let str = expdate + "";
      str =
        str.substring(0, 2) +
        "/" +
        str.substring(2, 4) +
        "/" +
        str.substring(4, 6);
      return str;
    } else return "";
  };
  const column = [
    {
      field: "ticker",
      headerName: "Stock Position",
      flex: 1,
    },
    {
      field: "last_price",
      headerName: "Underlying Price",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "Quantity",
      flex: 0.5,
    },
    {
      field: "daysToExpiration",
      headerName: "Days to expiration",
      valueGetter: getExpirationDate,
      flex: 1,
    },
    {
      field: "cost_basis",
      headerName: "Cost Basis",
      flex: 0.5,
    },
    {
      field: "last_price",
      headerName: "Current Market Value",
      flex: 1,
    },
    {
      field: "pl",
      headerName: "P/L",
      valueGetter: getPlValue,
      flex: 0.5,
    },
    {
      field: "close-btn",
      flex: 1,
      headerName: "CLOSE",
      renderCell: (params) => (
        <Modal
          closeDependancy={random}
          content={
            <PositionClose
              triggerClose={acceptHandler}
              ticker={params.row.ticker}
            />
          }
        >
          <Button isdefault={true}>CLOSE</Button>
        </Modal>
      ),
    },
  ];

  return (
    <Stack spacing={2}>
      {!loader ? (
        <React.Fragment>
          <Stack direction={matches ? "column" : "row"} spacing={2}>
            <Card>
              <Grid sx={{ padding: "1rem" }} spacing={4} container>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Net account value"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.net_acct_value}$
                  </LabelChild>
                </Grid>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Buying Power"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.buying_power}$
                  </LabelChild>
                </Grid>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Settled"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.settled_cash}$
                  </LabelChild>
                </Grid>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Unsettled"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.unsettled_cash}$
                  </LabelChild>
                </Grid>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Pending deposit"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.pending_deposit}$
                  </LabelChild>
                </Grid>
                <Grid item container xs={12}>
                  <LabelChild
                    label={"Provisional Cash"}
                    labelXsSize={9}
                    childrenXsSize={3}
                  >
                    {balanceData.provisional_cash}$
                  </LabelChild>
                </Grid>
              </Grid>
            </Card>
            <Card>
              <Grid sx={{ padding: "1rem" }} spacing={4} container>
                <Grid item container xs={12}>
                  <LabelChild label={"Risk flag"}>
                    {riskFlag === "High Risk" ? "High" : ""}
                  </LabelChild>
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
                    {gfvs === undefined || gfvs.length === 0 ? "0$" : ""}
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
                <AddNotes ssn={ssn} />
              </Grid>
            </Card>
          </Stack>
          <Box sx={{ height: "20rem" }}>
            <Table columns={column} rows={position} rowID="ticker" />
          </Box>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default React.memo(Balance);
