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

export const AddNew = ({ setRandom }) => {
  const [date, setDate] = React.useState(new Date());
  const clickBtnHandler = (e) => {
    setRandom(`${Math.random()}`);
  };
  return (
    <Stack justifyContent="space-between" gap="16px" alignItems="center">
      <TextField fullWidth size="small" isdefault={true} label="Account" />
      <TextField fullWidth size="small" isdefault={true} label="Position" />
      <TextField fullWidth size="small" isdefault={true} label="Quantity" />
      <DatePicker
        value={date}
        setValue={(e) => setDate(e)}
        textFieldProps={{ size: "small", fullWidth: true }}
        isdefault={true}
        label="Time Stamp"
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
        row={orders}
      />
    </Box>
  );
};

const AutoLiquidation = () => {
  const [random, setRandom] = React.useState("");
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
              column={getFields("Archived", "Early")}
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

export default AutoLiquidation;
