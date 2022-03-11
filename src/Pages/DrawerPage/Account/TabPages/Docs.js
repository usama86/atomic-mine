import React from "react";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Box from "./../../../../UI/Layout/Box";
import Tabs from "../../../../UI/Tabs/Tabs";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

import Confirm from "./DocTabs/Confirm";
import Agreements from "./DocTabs/Agreements";
import Disclosures from "./DocTabs/Disclosures";
import MonthlyStatements from "./DocTabs/MonthlyStatements";
import Tax from "./DocTabs/Tax";

const data = {
  confirm: [
    "Hello",
    "Hi",
    "Be",
    "hhh",
    "Hello",
    "Hi",
    "Be",
    "hhh",
    "Hello",
    "Hi",
    "Hello",
    "Hi",
    "Hello",
    "Hi",
    "Hello",
    "Be",
    "hhh",
    "Hello",
    "Hi",
    "Be",
    "hhh",
    "Hello",
    "Hi",
    "Be",
    "hhh",
  ],
  monthllyStatements: [
    "Hello",
    "Hi",
    "Bye",
    "ssss",
    "Hi",
    "Bye",
    "hhh",
    "Hello",
    "Hi",
    "Bye",
    "hhh",
    "Hello",
    "Hi",
    "Bye",
    "hhh",
    "hhh",
  ],
  disclosures: ["Hello", "Hi", "Bye", "sssaa"],
  agreements: ["Hello", "Hi", "Bye", "sssaa"],
  tax: ["Hello", "Hi", "Bye", "sssaa"],
};

const Docs = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Confirm",
          value: "1",
          component: <Confirm docs={data.confirm} />,
        },
        {
          label: "Monthly Statements",
          value: "2",
          component: <MonthlyStatements docs={data.monthllyStatements} />,
        },
        {
          label: "Tax",
          value: "3",
          component: <Tax docs={data.tax} />,
        },
        {
          label: "Agreements",
          value: "4",
          component: <Agreements docs={data.agreements} />,
        },
        {
          label: "Disclosures",
          value: "5",
          component: <Disclosures docs={data.disclosures} />,
        },
      ],
    },
  ];
  return (
    <Stack spacing={2}>
      <Card>
        <Tabs height="30rem" value={value}>
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
      </Card>
    </Stack>
  );
};

export default Docs;

// const column = [
//   {
//     field: "confirm",
//     headerName: "Confirm",
//     flex: 1,
//   },
//   {
//     field: "monthlyStatements",
//     headerName: "Monthly Statements",
//     flex: 1,
//   },
//   {
//     field: "tax",
//     headerName: "Tax",
//     flex: 1,
//   },
//   {
//     field: "agreements",
//     headerName: "Agreements",
//     flex: 1,
//   },
//   {
//     field: "disclosures",
//     headerName: "Disclosures",
//     flex: 1,
//   },
// ];
// const row = [
//   {
//     id: 0,
//     confirm: "hello",
//     monthlyStatements: "World",
//     tax: "5$",
//     agreements: "05-02-1990",
//     disclosures: "05-02-1990",
//   },
//   {
//     id: 1,
//     confirm: "hello1",
//     monthlyStatements: "World1",
//     tax: "6$",
//     agreements: "05-02-1991",
//     disclosures: "05-02-1993",
//   },
//   {
//     id: 2,
//     confirm: "hello2",
//     monthlyStatements: "World2",
//     tax: "7$",
//     agreements: "05-02-1992",
//     disclosures: "05-02-1994",
//   },
// ];
