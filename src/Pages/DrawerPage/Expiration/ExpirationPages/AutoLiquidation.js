import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import Typography from "./../../../../UI/Typography/Typography";
import Button from "../../../../UI/Button/Button";
import Stack from "../../../../UI/Layout/Stack";
import { getFields } from "./getFields";
import orders from "../../../../Constants/mock_data_expiration_autoLiquidation.json";
import Modal from "../../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";

const ClosePositions = ({ setRandom }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [verify, setVerify] = React.useState(false);
  const clickBtnHandler = (e) => {
    setVerify((prevState) => !prevState);
    if (verify) {
      setRandom(`${Math.random()}`);
      enqueueSnackbar(`Closed all positions successfully!`, {
        variant: "success",
      });
    }
  };
  return (
    <Stack justifyContent="space-between" gap="16px" alignItems="center">
      <Typography variant="body">
        {verify
          ? "Close all?"
          : "Close all positions on auto-liquidation monitor?"}
      </Typography>
      <Button onClick={clickBtnHandler}>Close</Button>
    </Stack>
  );
};

const PendingPage = (props) => {
  const [random, setRandom] = React.useState("");
  return (
    <Box sx={{ position: "relative" }}>
      <OrderTable
        type={"Pending"}
        column={getFields("Pending", "AutoLiquidation")}
        row={orders}
      />
      <Modal
        closeDependancy={random}
        content={<ClosePositions setRandom={setRandom} />}
      >
        <Button sx={{ position: "absolute", top: 0, right: 0, color: "#fff" }}>
          BATCH SUPER
        </Button>
      </Modal>
    </Box>
  );
};

const AutoLiquidation = () => {
  const [value, setValue] = React.useState("1");
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
          component: <PendingPage />,
        },
        {
          label: "Archive",
          value: "2",
          component: (
            <OrderTable
              type={"Archived"}
              column={getFields("Archived", "AutoLiquidation")}
              row={orders}
            />
          ),
        },
      ],
    },
  ];
  return (
    <Tabs value={value}>
      <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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

export default AutoLiquidation;
