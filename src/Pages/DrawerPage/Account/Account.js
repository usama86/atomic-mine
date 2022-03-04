import React from "react";
import Search from "../../../UI/SearchField/Search";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";

import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
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

function Account() {
  const [searchVal, setSearchVal] = React.useState("");
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
        { label: "Cash Ledger", value: "10", component: <CashLedger /> },
        { label: "Bank Link", value: "11", component: <BankLink /> },
        { label: "Docs", value: "12", component: <Docs /> },
        { label: "Options", value: "13", component: <Options /> },
        { label: "Personal Info", value: "14", component: <PersonalInfo /> },
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeSearchVal = (e) => {
    setSearchVal(e.id);
    console.log(e.name);
  };

  return (
    <Stack spacing={6}>
      <Stack direction="row">
        <Search
          size="small"
          searchVal={searchVal}
          getSearchedValue={onChangeSearchVal}
        />
      </Stack>
      {searchVal && (
        <Tabs scrollButtons={true} variant="scrollable" value={value}>
          <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
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
}

export default Account;
