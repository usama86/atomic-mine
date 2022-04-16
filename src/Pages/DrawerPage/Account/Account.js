import React from "react";
import Tabs from "../../../UI/Tabs/Tabs";
import Stack from "../../../UI/Layout/Stack";
import Box from "../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import SearchUser from "./../PageUtils/SearchUser";
import Typography from "./../../../UI/Typography/Typography";
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
import Alert from "../../../UI/Alert/Alert";
import { useSnackbar } from "notistack";
// import data from "../../../Constants/mock_data.json";
import Api from "../../../Services/AccountApi";

function Account() {
  const { enqueueSnackbar } = useSnackbar();
  const [searchVal, setSearchVal] = React.useState({
    accountNumber: "",
    contact: "",
    email: "",
    id: "",
    name: "",
    social: "",
    ssn: "",
  });
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("1");

  React.useEffect(() => {
    async function fetchData() {
      let getApprovedAccounts = await Api.getApprovedAccount();
      setData(getApprovedAccounts.data.data);
    }
    fetchData();
  }, []);

  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Balances",
          value: "1",
          component: <Balance ssn={searchVal.ssn} />,
        },
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
  const selectRowHandler = (e) => {
    setSearchVal(e.row);
    console.log(e.row);
    enqueueSnackbar(
      `Selected user ${e.row.ssn} - ${e.row.kyc_info?.first_name} ${e.row.kyc_info?.last_name}`,
      {
        variant: "success",
      }
    );
  };
  return (
    <Stack spacing={6}>
      <Stack direction="row" gap={2} sx={{ width: "100%" }}>
        <SearchUser data={data} getRow={selectRowHandler} />
      </Stack>
      <Typography variant="h5">
        {searchVal.ssn} - {searchVal.kyc_info?.first_name.toUpperCase()}{" "}
        {searchVal.kyc_info?.last_name.toUpperCase()}
      </Typography>
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
