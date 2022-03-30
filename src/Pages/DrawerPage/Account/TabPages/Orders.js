import React from "react";

// import Grid from "../../../../UI/Layout/Grid";
// import data from "../../../../Constants/dummy_orders.json";
// import SearchableTable from "../../../../UI/Table/SearchableTable";
// import Card from "../../../../UI/Card/Card";
import Stack from "../../../../UI/Layout/Stack";
import Button from "../../../../UI/Button/Button";
// import { useSnackbar } from "notistack";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import OrderTable from "./../../PageUtils/OrderTable";
import orders from "../../../../Constants/mock_data_orders.json";
import { compareAsc } from "date-fns";
import DateRangePicker from "../../../../UI/DateRangePicker/DateRangePicker";

const Orders = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(orders);
  }, []);
  const datesHandler = (dates) => {
    let temp = [...data];
    if (dates) {
      const filtered = temp.filter((each) => {
        let consider_fillTime = new Date(each.fill_time);
        let consider_placeTime = new Date(each.place_time);
        const fillTimeTest =
          compareAsc(consider_fillTime, dates[0]) === 1 &&
          compareAsc(consider_fillTime, dates[1]) === -1;
        const placeTimeTest =
          compareAsc(consider_placeTime, dates[0]) === 1 &&
          compareAsc(consider_placeTime, dates[1]) === -1;
        return fillTimeTest || placeTimeTest;
      });
      setData([...filtered]);
    }
    if (!dates) {
      setData(orders);
    }
  };
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Open",
          value: "1",
          component: (
            <OrderTable
              type={"Open"}
              column={getFields("Open")}
              row={data.filter((order) => order["status"] === "open")}
            />
          ),
        },
        {
          label: "Filled",
          value: "2",
          component: (
            <OrderTable
              type={"Filled"}
              column={getFields("Filled")}
              row={data.filter((order) => order["status"] === "filled")}
            />
          ),
        },
        {
          label: "Cancelled",
          value: "3",
          component: (
            <OrderTable
              type={"Cancelled"}
              column={getFields("Cancelled")}
              row={data.filter((order) => order["status"] === "cancelled")}
            />
          ),
        },
        {
          label: "Rejected",
          value: "4",
          component: (
            <OrderTable
              type={"Rejected"}
              column={getFields("Rejected")}
              row={data.filter((order) => order["status"] === "rejected")}
            />
          ),
        },
      ],
    },
  ];
  return (
    <Stack direction="column" alignItems="flex-start" gap={2}>
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
              <DateRangePicker getDates={(e) => datesHandler(e)} />
              {val.component}
            </TabPanel>
          ))}
        </>
      </Tabs>
    </Stack>
  );
};

const getFields = (type) => {
  if (type === "Open")
    return [
      {
        field: "symbol",
        flex: 1,
        headerName: "Symbol",
      },
      {
        field: "quantity",
        flex: 0.6,
        headerName: "Quantity",
      },
      {
        field: "place_time",
        flex: 0.7,
        headerName: "Place Time",
        type: "dateTime",
      },
      {
        field: "fill_time",
        flex: 0.7,
        headerName: "Fill Time",
        type: "dateTime",
      },
      {
        field: "fillPrice",
        flex: 0.7,
        headerName: "Fill Price",
      },
      {
        field: "placedBy",
        flex: 0.7,
        headerName: "Placed by",
      },
      {
        field: "executive_broker",
        flex: 1,
        headerName: "Exec Broker",
      },
      {
        field: "cancel-btn",
        flex: 1,
        headerName: "Cancel",
        preventSearch: true,
        renderCell: (params) => <Button isdefault={true}>Cancel</Button>,
      },
    ];

  if (type === "Filled")
    return [
      {
        field: "symbol",
        flex: 1,
        headerName: "Symbol",
      },
      {
        field: "quantity",
        flex: 0.6,
        headerName: "Quantity",
      },
      {
        field: "place_time",
        flex: 1,
        headerName: "Place Time",
        type: "dateTime",
      },
      {
        field: "fill_time",
        flex: 1,
        headerName: "Fill Time",
        type: "dateTime",
      },
      {
        field: "fillPrice",
        flex: 0.7,
        headerName: "Fill Price",
      },
      {
        field: "placedBy",
        flex: 0.7,
        headerName: "Placed by",
      },
      {
        field: "executive_broker",
        flex: 1,
        headerName: "Exec Broker",
      },
      // {
      //   field: "close-btn",
      //   flex: 1,
      //   headerName: "Close",
      //   renderCell: (params) => <Button isdefault={true}>Close</Button>,
      // },
    ];

  if (type === "Cancelled")
    return [
      {
        field: "symbol",
        flex: 1,
        headerName: "Symbol",
      },
      {
        field: "quantity",
        flex: 0.6,
        headerName: "Quantity",
      },
      {
        field: "place_time",
        flex: 1,
        headerName: "Place Time",
        type: "dateTime",
      },
      {
        field: "fill_time",
        flex: 1,
        headerName: "Fill Time",
        type: "dateTime",
      },
      {
        field: "fillPrice",
        flex: 0.7,
        headerName: "Fill Price",
      },
      {
        field: "placedBy",
        flex: 0.7,
        headerName: "Placed by",
      },
      {
        field: "executive_broker",
        flex: 1,
        headerName: "Exec Broker",
      },
      {
        field: "reason",
        flex: 1.4,
        headerName: "Reason",
      },
    ];
  if (type === "Rejected")
    return [
      {
        field: "symbol",
        flex: 1,
        headerName: "Symbol",
      },
      {
        field: "quantity",
        flex: 0.6,
        headerName: "Quantity",
      },
      {
        field: "place_time",
        flex: 1,
        headerName: "Place Time",
        type: "dateTime",
      },
      {
        field: "fill_time",
        flex: 1,
        headerName: "Fill Time",
        type: "dateTime",
      },
      {
        field: "fillPrice",
        flex: 0.7,
        headerName: "Fill Price",
      },
      {
        field: "placedBy",
        flex: 0.7,
        headerName: "Placed by",
      },
      {
        field: "executive_broker",
        flex: 1,
        headerName: "Exec Broker",
      },
      {
        field: "reason",
        flex: 1.4,
        headerName: "Reason",
      },
    ];
};

export default Orders;
