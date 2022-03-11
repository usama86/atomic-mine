import React from "react";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import SearchUser from "./../PageUtils/SearchUser";
//AccountPages
import OrderTable from "./../PageUtils/OrderTable";
import Modal from "../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TableNoteField from "../../../UI/Table/TableNoteField";
import IconButton from "@mui/material/IconButton";
import {
  ApplicationAccept,
  ApplicationReject,
} from "./../Account/TabPages/Modals/";

function Application() {
  const { enqueueSnackbar } = useSnackbar();
  // const [searchVal, setSearchVal] = React.useState({
  //   accountNumber: "",
  //   contact: "",
  //   email: "",
  //   id: "",
  //   name: "",
  //   social: "",
  // });

  const [value, setValue] = React.useState("1");
  const [random, setRandom] = React.useState("");
  const acceptHandler = () => {
    setRandom(`${Math.random()}`);
  };
  const column = [
    {
      field: "account",
      headerName: "Account #",
      flex: 0.4,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "decision",
      headerName: "Accept/Reject",
      type: "actions",
      flex: 0.3,
      getActions: (params) => {
        return [
          <Modal
            closeDependancy={random}
            content={<ApplicationAccept triggerClose={acceptHandler} />}
          >
            <IconButton>
              <DoneIcon color="success" />
            </IconButton>
          </Modal>,
          <Modal
            closeDependancy={random}
            content={<ApplicationReject triggerClose={acceptHandler} />}
          >
            <IconButton>
              <CloseIcon color="error" />
            </IconButton>
          </Modal>,
        ];
      },
    },
    {
      field: "notes",
      headerName: "Notes",
      flex: 0.8,
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TableNoteField
              label="Add note"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            />
          </div>
        );
      },
    },
  ];
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
    // setSearchVal(e.row);
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

const row = [
  {
    id: 0,
    account: "12534",
    name: "Bella",
    acceptReject: "true",
  },
  {
    id: 1,
    account: "13452",
    name: "Brockley",
    acceptReject: "false",
  },
  {
    id: 2,
    account: "14523",
    name: "Brandom",
    acceptReject: "true",
  },
];

export default Application;
