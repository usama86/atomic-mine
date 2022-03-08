import React from "react";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Button from "../../../UI/Button/Button";
import SearchUser from "./../PageUtils/SearchUser";
//AccountPages
import OrderTable from "./../PageUtils/OrderTable";
import Modal from "../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";

function Application() {
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
          label: "AML",
          value: "1",
          component: <OrderTable type="AML" column={column} row={row} />,
        },
        {
          label: "CIP",
          value: "2",
          component: <OrderTable type="CIP" column={column} row={row} />,
        },
        {
          label: "Volant Suspended",
          value: "3",
          component: (
            <OrderTable type="Volant Suspended" column={column} row={row} />
          ),
        },
        {
          label: "Additional Info",
          value: "4",
          component: (
            <OrderTable type="Additional Info" column={column} row={row} />
          ),
        },
        {
          label: "3210/407",
          value: "5",
          component: <OrderTable type="3210/407" column={column} row={row} />,
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
      <Stack direction="column" alignItems="flex-start" gap={2}>
        <Modal
          closeDependancy={searchVal.accountNumber}
          width="80vw"
          content={<SearchUser getRow={selectRowHandler} />}
        >
          <Button>Select User</Button>
        </Modal>
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
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "acceptReject",
    headerName: "Accept/Reject",
    flex: 1,
  },
];
const row = [
  {
    id: 0,
    account: "12534",
    name: "Bella",
    acceptReject: "true",
  },
  {
    id: 0,
    account: "13452",
    name: "Brockley",
    acceptReject: "false",
  },
  {
    id: 0,
    account: "14523",
    name: "Brandom",
    acceptReject: "true",
  },
];

export default Application;
