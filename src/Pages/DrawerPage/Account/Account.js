import React from "react";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Button from "../../../UI/Button/Button";
import SearchUser from "./SearchUser";
//AccountPages
import Balance from "./TabPages/Balance";
import RiskManagement from "./TabPages/RiskManagement";
import Orders from "./TabPages/Orders";
import Funds from "./TabPages/Funds";
import CashLedger from "./TabPages/CashLedger";
import BankLink from "./TabPages/BankLink";
import Docs from "./TabPages/Docs";
import Options from "./TabPages/Options";
import PersonalInfo from "./TabPages/PersonalInfo";
import Modal from "../../../UI/Modal/Modal";
import Alert from "../../../UI/Alert/Alert";
import { useSnackbar } from "notistack";

function Account() {
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
        { label: "Balances", value: "1", component: <Balance /> },
        { label: "Risk Management", value: "2", component: <RiskManagement /> },
        { label: "Orders", value: "3", component: <Orders /> },
        { label: "Funds", value: "4", component: <Funds /> },
        { label: "Cash Ledger", value: "5", component: <CashLedger /> },
        { label: "Bank Link", value: "6", component: <BankLink /> },
        { label: "Docs", value: "7", component: <Docs /> },
        { label: "Options", value: "8", component: <Options /> },
        { label: "Personal Info", value: "9", component: <PersonalInfo /> },
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showUsers = (e) => {
    e.preventDefault();
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
          <Button onClick={showUsers}>Select User</Button>
        </Modal>
      </Stack>
      {searchVal.accountNumber !== "" ? (
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
      ) : (
        <Alert
          title="No User Selected!"
          severity="info"
          message="Please select a user!"
        />
      )}
    </Stack>
  );
}

export default Account;
