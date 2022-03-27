import React from "react";
import AutoLiquidation from "./ExpirationPages/AutoLiquidation";
import Exercise from "./ExpirationPages/Exercise";
import DNE from "./ExpirationPages/DNE";
import Early from "./ExpirationPages/Early";
import Tabs from "../../../UI/Tabs/Tabs";
import Box from "../../../UI/Layout/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";

const Expiration = () => {
  const [value, setValue] = React.useState("1");

  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Auto Liquidation",
          value: "1",
          component: <AutoLiquidation />,
        },
        { label: "Exercise", value: "2", component: <Exercise /> },
        { label: "DNE", value: "3", component: <DNE /> },
        { label: "Early", value: "4", component: <Early /> },
      ],
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

export default Expiration;
