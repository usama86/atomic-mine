import React from "react";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import TextField from "../../../../../UI/TextField/TextFieldComp";
import { useSnackbar } from "notistack";
import Api from "../../../../../Services/RiskMonitorApi";
import Constants from "../../../../../Constants/Constants";

const AddNew = ({ setRandom }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [account, setAccount] = React.useState("");
  const [code, setCode] = React.useState("");
  const [orderID, setOrderID] = React.useState("");

  const clickBtnHandler = async (e) => {
    let addTSEvt = await Api.addTSEvt({
      code: code,
      account: account,
      order_id: orderID,
    });
    if (addTSEvt.data.result.success) {
      enqueueSnackbar(addTSEvt.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
    setRandom(`${Math.random()}`);
    enqueueSnackbar(`Added Successfully!`, {
      variant: "success",
    });
  };
  return (
    <Stack justifyContent="space-between" gap="16px" alignItems="center">
      <TextField
        fullWidth
        size="small"
        isdefault={true}
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        label="Account"
      />
      <TextField
        fullWidth
        size="small"
        isdefault={true}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        label="Code"
      />
      <TextField
        fullWidth
        size="small"
        isdefault={true}
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
        label="OrderID"
      />

      <Button onClick={clickBtnHandler}>Done</Button>
    </Stack>
  );
};
export default AddNew;
