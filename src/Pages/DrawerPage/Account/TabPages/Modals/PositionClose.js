import React from "react";
import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import Api from "../../../../../Services/AccountApi";
import { useTheme } from "@emotion/react";
import Loader from "../../../../../UI/Loader/Loader";
import { useSnackbar } from "notistack";
import Constants from "../../../../../Constants/Constants";

const PositionClose = ({ triggerClose, ticker, ssn, ...params }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = React.useState(false);
  const [type, setType] = React.useState("MO");
  const [bidAsk, setBidAsk] = React.useState({});
  const [limitValue, setLimitValue] = React.useState("");
  const theme = useTheme();
  const fetchData = async () => {
    let getBidVal = await Api.getBidAsk(ticker);

    setBidAsk(getBidVal.data.data);
    setIsLoading(false);
  };
  React.useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [ticker]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeBid = async () => {
    const formData = {
      account: ssn,
      ticker: params.row.ticker,
      type: type,
      init_price: type === "LO" ? parseInt(limitValue) : "",
    };
    let res = await Api.closePosition(formData);
    if (res.data.result.success) {
      enqueueSnackbar(res.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };

  return (
    <Stack gap={2}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h6">
            Current bid:
            {bidAsk.bid}
          </Typography>
          <Typography variant="h6">Current ask: {bidAsk.ask}</Typography>
        </>
      )}

      <Stack direction="row" gap={3} justifyContent="center">
        <Button
          onClick={() => setType("LO")}
          styleOverrides={
            type === "LO"
              ? { background: theme.palette.primary.main }
              : { background: theme.palette.primary.dark }
          }
        >
          Limit
        </Button>
        <Button
          onClick={() => setType("MO")}
          styleOverrides={
            type === "MO"
              ? { background: theme.palette.primary.main }
              : { background: theme.palette.primary.dark }
          }
        >
          Market
        </Button>
      </Stack>
      <TextFieldComp
        isdefault={true}
        label="Limit Price"
        value={limitValue}
        onChange={(e) => setLimitValue(e.target.value)}
      />
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            triggerClose();
            closeBid();
          }}
          sx={{ color: "white" }}
          isdefault={true}
        >
          Close
        </Button>
      </Stack>
    </Stack>
  );
};

export default PositionClose;
