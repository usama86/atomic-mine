import React from "react";

import Grid from "../../../../UI/Layout/Grid";
import data from "../../../../Constants/dummy_orders.json";
import SearchableTable from "../../../../UI/Table/SearchableTable";
// import Card from "../../../../UI/Card/Card";
import Stack from "../../../../UI/Layout/Stack";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import { useSnackbar } from "notistack";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import OrderTable from "./../../PageUtils/OrderTable";

import Constants from "../../../../Constants/Constants";

const fields = [
  { field: "symbol", flex: 0.5, headerName: "Symbol" },
  { field: "date", flex: 1, headerName: "Date" },
];

const Orders = () => {
  const [selectedRow, setSelectedRow] = React.useState({
    date: "",
    id: 0,
    isCancelled: false,
    isFilled: false,
    isOpen: false,
    isRejected: false,
    symbol: "",
  });
  const [value, setValue] = React.useState("1");
  const { enqueueSnackbar } = useSnackbar();
  const selectOrderHandler = (e) => {
    enqueueSnackbar(`Order ${e.row.symbol} selected!`, {
      variant: "success",
    });
    setSelectedRow({ ...e.row });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Open",
          value: "1",
          component: <OrderTable type={"Open"} column={column} row={row} />,
        },
        {
          label: "Filled",
          value: "2",
          component: <OrderTable type={"Filled"} column={column} row={row} />,
        },
        {
          label: "Cancelled",
          value: "3",
          component: (
            <OrderTable type={"Cancelled"} column={column} row={row} />
          ),
        },
        {
          label: "Rejected",
          value: "4",
          component: <OrderTable type={"Rejected"} column={column} row={row} />,
        },
      ],
    },
  ];
  return (
    <Stack direction="column" alignItems="flex-start" gap={2}>
      <Modal
        closeDependancy={selectedRow.symbol}
        width="80vw"
        content={
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SearchableTable
                selectRowHandler={selectOrderHandler}
                rows={data}
                columns={fields}
              />
            </Grid>
          </Grid>
        }
      >
        <Button>{Constants.Select_Order}</Button>
      </Modal>
      {selectedRow.symbol}
      {selectedRow.symbol && (
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
      )}
    </Stack>
  );
};

const column = [
  {
    field: "contract",
    headerName: "Contract",
    flex: 1,
  },
  {
    field: "placeTime",
    headerName: "Place Time",
    flex: 1,
  },
  {
    field: "fillTime",
    headerName: "Fill time",
    flex: 1,
  },
  {
    field: "exceutingBroker",
    headerName: "Executing Broker",
    flex: 1,
  },
  {
    field: "information",
    headerName: "Information",
    flex: 1,
  },
  {
    field: "close",
    headerName: "Close",
    flex: 1,
  },
];
const row = [
  {
    id: 0,
    contract: "hello",
    placeTime: "World",
    fillTime: "5$",
    exceutingBroker: "05-02-1990",
    information: "05-02-1990",
    close: "yes",
  },
  {
    id: 1,
    contract: "hello1",
    placeTime: "World1",
    fillTime: "6$",
    exceutingBroker: "05-02-1991",
    information: "05-02-1993",
    close: "yes",
  },
  {
    id: 2,
    contract: "hello2",
    placeTime: "World2",
    fillTime: "7$",
    exceutingBroker: "05-02-1992",
    information: "05-02-1994",
    close: "yes",
  },
];
export default Orders;
