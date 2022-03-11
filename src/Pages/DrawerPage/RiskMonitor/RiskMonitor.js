import React from "react";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Button from "../../../UI/Button/Button";
import SearchUser from "./../PageUtils/SearchUser";
import Checkbox from "./../../../UI/Checkbox/Checkbox";
//AccountPages
import OrderTable from "./../PageUtils/OrderTable";
import Modal from "../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";

function RiskMonitor() {
  const { enqueueSnackbar } = useSnackbar();
  const [searchVal, setSearchVal] = React.useState({
    accountNumber: "",
    contact: "",
    email: "",
    id: "",
    name: "",
    social: "",
  });
  const [value, setValue] = React.useState("1");

  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Low Equity",
          value: "1",
          component: <OrderTable type="Low Equity" column={column} row={row} />,
        },
        {
          label: "Trade Surveillance",
          value: "2",
          component: (
            <OrderTable type="Trade Surveillance" column={column} row={row} />
          ),
        },
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selectRowHandler = (e) => {
    setSearchVal(e.row);
    enqueueSnackbar(`Selected user ${e.row.name}`, {
      variant: "success",
    });
  };
  return (
    <Stack spacing={6}>
      <Stack direction="row" sx={{ width: "100%" }} gap={2}>
        {/* <Modal
          closeDependancy={searchVal.accountNumber}
          width="80vw"
          content={<SearchUser getRow={selectRowHandler} />}
        >
          <Button>Select User</Button>
        </Modal> */}
        <SearchUser getRow={selectRowHandler} />
      </Stack>

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
    </Stack>
  );
}

const column = [
  {
    field: "account",
    headerName: "Account #",
    flex: 1,
  },
  {
    field: "reason",
    headerName: "Reason",
    flex: 1,
  },
  {
    field: "equity",
    headerName: "Equity",
    flex: 1,
  },
  {
    field: "nav",
    headerName: "NAV",
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  {
    field: "read",
    headerName: "Read",
    flex: 0.2,
    renderCell: (params) => <Checkbox onlyCheckbox />,
  },
];
const row = [
  {
    id: 0,
    account: "12534",
    reason: "reversed",
    equity: "50%",
    nav: "$900",
    read: "yes",
    date: "12/2/2025",
  },
  {
    id: 1,
    account: "14253",
    reason: "reversed",
    equity: "50%",
    nav: "$900",
    read: "yes",
    date: "12/2/2025",
  },
  {
    id: 2,
    account: "53124",
    reason: "reversed",
    equity: "50%",
    nav: "$900",
    read: "yes",
    date: "12/2/2025",
  },
];

export default RiskMonitor;
