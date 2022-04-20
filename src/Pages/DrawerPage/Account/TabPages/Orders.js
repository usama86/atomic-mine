import React from "react";

// import Grid from "../../../../UI/Layout/Grid";
// import data from "../../../../Constants/dummy_orders.json";
// import SearchableTable from "../../../../UI/Table/SearchableTable";
// import Card from "../../../../UI/Card/Card";
import Stack from "../../../../UI/Layout/Stack";
// import Button from "../../../../UI/Button/Button";
import Dialog from "./../../../../UI/Dialog/Dialog";
import { useSnackbar } from "notistack";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import OrderTable from "./../../PageUtils/OrderTable";
// import orders from "../../../../Constants/mock_data_orders.json";
import { compareAsc } from "date-fns";
import DateRangePicker from "../../../../UI/DateRangePicker/DateRangePicker";
import Api from "../../../../Services/AccountApi";
import Constants from "../../../../Constants/Constants";
import Loader from "../../../../UI/Loader/Loader";
import { getTime } from "../../../../helpers/utils";

const Orders = (ssn) => {
  const { enqueueSnackbar } = useSnackbar();

  const getFields = (type) => {
    if (type === "Open")
      return [
        {
          field: "ticker",
          flex: 1,
          headerName: "Symbol",
        },
        {
          field: "side",
          flex: 1,
          headerName: "Side",
        },
        {
          field: "type",
          flex: 1,
          headerName: "Order Type",
          valueGetter: getType,
        },
        {
          field: "qty",
          flex: 0.6,
          headerName: "Quantity",
        },
        {
          field: "created_on",
          flex: 0.7,
          headerName: "Place Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "filled_on",
          flex: 0.7,
          headerName: "Fill Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "avg_filled_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "placed_by",
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
          renderCell: (params) => (
            <Dialog
              buttonText="Cancel"
              title="Cancel"
              content="Are you sure you want to cancel the order?"
              orderID={params.row.id}
              handleAcceptFunc={handleAcceptFunc}
            />
          ),
        },
      ];

    if (type === "Filled")
      return [
        {
          field: "ticker",
          flex: 1,
          headerName: "Symbol",
        },
        {
          field: "side",
          flex: 1,
          headerName: "Side",
        },
        {
          field: "type",
          flex: 1,
          headerName: "Order Type",
          valueGetter: getType,
        },
        {
          field: "qty",
          flex: 0.6,
          headerName: "Quantity",
        },
        {
          field: "created_on",
          flex: 1,
          headerName: "Place Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "filled_on",
          flex: 1,
          headerName: "Fill Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "avg_filled_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "placed_by",
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
          field: "ticker",
          flex: 1,
          headerName: "Symbol",
        },
        {
          field: "side",
          flex: 1,
          headerName: "Side",
        },
        {
          field: "type",
          flex: 1,
          headerName: "Order Type",
          valueGetter: getType,
        },
        {
          field: "qty",
          flex: 0.6,
          headerName: "Quantity",
        },
        {
          field: "created_on",
          flex: 1,
          headerName: "Place Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "filled_on",
          flex: 1,
          headerName: "Fill Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "avg_filled_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "placed_by",
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
          field: "ticker",
          flex: 1,
          headerName: "Symbol",
        },
        {
          field: "side",
          flex: 1,
          headerName: "Side",
        },
        {
          field: "type",
          flex: 1,
          headerName: "Order Type",
          valueGetter: getType,
        },
        {
          field: "qty",
          flex: 0.6,
          headerName: "Quantity",
        },
        {
          field: "created_on",
          flex: 1,
          headerName: "Place Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "filled_on",
          flex: 1,
          headerName: "Fill Time",
          type: "dateTime",
          valueGetter: getTime,
        },
        {
          field: "avg_filled_price",
          flex: 0.7,
          headerName: "Fill Price",
        },
        {
          field: "placed_by",
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

  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("1");
  const [loading, setLoading] = React.useState(false);
  const fetchData = async () => {
    let orders = [];
    //if (Number(value) === 1) orders = await Api.getOrdersPending(ssn);
    if (Number(value) === 1) orders = await Api.getOrdersPending(ssn);
    else if (Number(value) === 2) orders = await Api.getOrdersFilled(ssn);
    else if (Number(value) === 3) orders = await Api.getOrdersCancelled(ssn);
    else orders = await Api.getOrdersRejected(ssn);

    setData(orders);
    setLoading(false);
  };

  const handleAcceptFunc = async (orderID) => {
    console.log(orderID);
    let cancelOrder = await Api.cancelOrder({ order_id: orderID });
    console.log(cancelOrder);
    if (cancelOrder.data.result.success) {
      enqueueSnackbar(cancelOrder.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  const datesHandler = (dates) => {
    let temp = [...data];
    if (dates) {
      const filtered = temp.filter((each) => {
        let consider_fillTime = new Date(each.filled_on);
        let consider_placeTime = new Date(each.created_on);
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
      setData(data);
    }
  };

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
            <OrderTable type={"Open"} column={getFields("Open")} row={data} />
          ),
        },
        {
          label: "Filled",
          value: "2",
          component: (
            <OrderTable
              type={"Filled"}
              column={getFields("Filled")}
              row={data}
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
              row={data}
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
              row={data}
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
              {!loading ? (
                <>
                  <DateRangePicker getDates={(e) => datesHandler(e)} />
                  {val.component}
                </>
              ) : (
                <Loader />
              )}
            </TabPanel>
          ))}
        </>
      </Tabs>
    </Stack>
  );
};

const getType = (params) => {
  if (params.row.type === "MO") return "Market";
  else if (params.row.type === "LO") return "Limit";
  else if (params.row.type === "NH") return "Not Held";
  else return "";
};

export default Orders;
