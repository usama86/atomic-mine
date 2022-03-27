import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import { getFields } from "./getFields";
import orders from "../../../../Constants/mock_data_expiration_autoLiquidation.json";

const AutoLiquidation = () => {
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
          component: (
            <OrderTable
              type={"Pending"}
              column={getFields("Pending", "Exercise")}
              row={orders}
            />
          ),
        },
        {
          label: "Archive",
          value: "2",
          component: (
            <OrderTable
              type={"Archived"}
              column={getFields("Archived", "Exercise")}
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

export default AutoLiquidation;
