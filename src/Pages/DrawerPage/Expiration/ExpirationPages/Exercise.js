import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import { getFields } from "./getFields";
import Api from "../../../../Services/ExpirationApi";

const Exercise = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [pending, setPending] = React.useState([]);
  const [archive, setArchive] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getPending = await Api.getAutoExercisesPending();
    let getArchive = await Api.getAutoExercisesComplete();
    setPending(getPending);
    setArchive(getArchive);
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
              row={pending}
              rowID={"account"}
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
              row={archive}
              rowID={"account"}
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

export default Exercise;
