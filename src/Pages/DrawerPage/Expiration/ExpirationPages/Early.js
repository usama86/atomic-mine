import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import Button from "../../../../UI/Button/Button";
import Stack from "../../../../UI/Layout/Stack";
import { getFields } from "./getFields";
import orders from "../../../../Constants/mock_data_expiration_autoLiquidation.json";
import Modal from "../../../../UI/Modal/Modal";
import TextField from "../../../../UI/TextField/TextFieldComp";
import DatePicker from "../../../../UI/Date/DatePickerComp";
import { useSnackbar } from "notistack";
import Api from "../../../../Services/ExpirationApi";
import Constants from "../../../../Constants/Constants";

export const AddNew = ({ setRandom }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [account, setAccount] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [quantity, setQuantity] = React.useState("");

  const clickBtnHandler = async (e) => {
    setRandom(`${Math.random()}`);
    let postEarly = await Api.requestExercise({
      account: account,
      ticker: position,
      Qty: quantity,
    });
    if (postEarly.data.result.success) {
      setAccount("");
      setPosition("");
      enqueueSnackbar(postEarly.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
    enqueueSnackbar(`Added Successfully!`, {
      variant: "success",
    });
  };
  return (
    <Stack justifyContent="space-between" gap="16px" alignItems="center">
      <TextField
        fullWidth
        size="small"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        isdefault={true}
        label="Account"
      />
      <TextField
        fullWidth
        size="small"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        isdefault={true}
        label="Position"
      />
      <TextField
        fullWidth
        size="small"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        isdefault={true}
        label="Quantity"
      />
      <Button onClick={clickBtnHandler}>Done</Button>
    </Stack>
  );
};

const PendingPage = (props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <OrderTable
        type={"Pending"}
        column={getFields("Pending", "Early")}
        row={props.row}
        rowID={"account"}
      />
    </Box>
  );
};

const Early = () => {
  const [random, setRandom] = React.useState("");
  const [value, setValue] = React.useState("1");
  const [pending, setPending] = React.useState([]);
  const [archive, setArchive] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getPending = await Api.getEarlyExercisesPending();
    let getArchive = await Api.getEarlyExercisesComplete();
    setPending(getPending);
    setArchive(getArchive);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Pending",
          value: "1",
          component: <PendingPage row={pending} />,
        },
        {
          label: "Archive",
          value: "2",
          component: (
            <OrderTable
              type={"Archived"}
              column={getFields("Archived", "Early")}
              row={archive}
              rowID={"account"}
            />
          ),
        },
      ],
    },
  ];
  return (
    <Tabs value={value}>
      <>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
        >
          <Modal
            closeDependancy={random}
            content={<AddNew setRandom={setRandom} />}
          >
            <Button
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                color: "#fff",
                zIndex: 10,
              }}
            >
              New
            </Button>
          </Modal>
          <TabList
            scrollButtons="auto"
            variant="scrollable"
            onChange={handleChange}
          >
            {TabsVal[0].controls.map((val, index) => (
              <Tab label={val.label} key={index} value={val.value} />
            ))}
          </TabList>
        </Box>
        {TabsVal[0].controls.map((val, index) => (
          <TabPanel value={val.value} key={index}>
            {val.component}
          </TabPanel>
        ))}
      </>
    </Tabs>
  );
};

export default Early;
