import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import Button from "../../../../UI/Button/Button";
import { getFields } from "./getFields";
import Modal from "../../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";
import Api from "../../../../Services/ExpirationApi";
import Stack from "../../../../UI/Layout/Stack";
import TextField from "../../../../UI/TextField/TextFieldComp";
import Constants from "../../../../Constants/Constants";

export const AddNew = ({ setRandom }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [account, setAccount] = React.useState("");
  const [position, setPosition] = React.useState("");
  const clickBtnHandler = async (e) => {
    let postDNE = await Api.setToDNE({
      account: account,
      ticker: position,
    });
    if (postDNE.data.result.success) {
      setAccount("");
      setPosition("");
      enqueueSnackbar(postDNE.data.result.msg, {
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
        label="Account"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <TextField
        fullWidth
        size="small"
        isdefault={true}
        label="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <Button onClick={clickBtnHandler}>Done</Button>
    </Stack>
  );
};

const DNE = () => {
  const [random, setRandom] = React.useState("");
  const [DNE, setDNE] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getDNE = await Api.getDNE();
    setDNE(getDNE);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <OrderTable
        type={"Pending"}
        column={getFields("Pending", "DNE")}
        row={DNE}
        rowID={"account"}
      />
      <Modal
        closeDependancy={random}
        content={<AddNew setRandom={setRandom} />}
      >
        <Button sx={{ position: "absolute", top: 0, right: 0, color: "#fff" }}>
          NEW
        </Button>
      </Modal>
    </Box>
  );
};

export default DNE;
