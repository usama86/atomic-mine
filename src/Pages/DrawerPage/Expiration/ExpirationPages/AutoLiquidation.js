import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "./../../../../UI/Tabs/Tabs";
import Typography from "./../../../../UI/Typography/Typography";
import Button from "../../../../UI/Button/Button";
import Stack from "../../../../UI/Layout/Stack";
// import { getFields } from "./getFields";
// import orders from "../../../../Constants/mock_data_expiration_autoLiquidation.json";
import Modal from "../../../../UI/Modal/Modal";
import { useSnackbar } from "notistack";
import Api from "../../../../Services/ExpirationApi";
import Constants from "../../../../Constants/Constants";

const ClosePositions = ({ setRandom }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [verify, setVerify] = React.useState(false);

  const clickBtnHandler = (e) => {
    setVerify((prevState) => !prevState);
    if (verify) {
      setRandom(`${Math.random()}`);
      enqueueSnackbar(`Closed all positions successfully!`, {
        variant: "success",
      });
    }
  };
  return (
    <Stack justifyContent="space-between" gap="16px" alignItems="center">
      <Typography variant="body">
        {verify
          ? "Close all?"
          : "Close all positions on auto-liquidation monitor?"}
      </Typography>
      <Button onClick={clickBtnHandler}>Close</Button>
    </Stack>
  );
};

const PendingPage = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [random, setRandom] = React.useState("");
  const [pending, setPending] = React.useState([]);

  const handleClose = (params, data) => {
    // setId(params.id);
    const formData = {
      account: data.account,
      ticker: data.ticker,
      type: "MO",
    };

    let closePending = Api.closeLiquidation(formData);
    if (closePending.data.result.success) {
      enqueueSnackbar(closePending.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };

  const column = [
    {
      field: "account",
      flex: 1,
      headerName: "Acc #",
    },
    {
      field: "ticker",
      flex: 0.7,
      headerName: "Ticker",
    },

    {
      field: "quantity",
      flex: 0.7,
      headerName: "Quantity",
    },

    {
      field: "close-btn",
      flex: 1,
      headerName: "Close",
      preventSearch: true,
      renderCell: (params) => (
        <Button
          isdefault={true}
          onClick={() => {
            handleClose(params, params.row);
          }}
        >
          Close
        </Button>
      ),
    },
  ];

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getPending = await Api.fetchLiquidationPending();
    setPending(getPending);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <OrderTable type={"Pending"} column={column} row={pending} />
      <Modal
        closeDependancy={random}
        content={<ClosePositions setRandom={setRandom} />}
      >
        <Button sx={{ position: "absolute", top: 0, right: 0, color: "#fff" }}>
          BATCH SUPER
        </Button>
      </Modal>
    </Box>
  );
};

const AutoLiquidation = () => {
  const [value, setValue] = React.useState("1");
  const [archive, setArchive] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getArchive = await Api.fetchLiquidationArchive();
    setArchive(getArchive);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const archivedColumn = [
    {
      field: "account",
      flex: 1,
      headerName: "Acc #",
    },
    {
      field: "ticker",
      flex: 0.7,
      headerName: "Ticker",
    },
    {
      field: "quantity",
      flex: 0.7,
      headerName: "Quantity",
    },
    {
      field: "timestamp",
      flex: 1,
      headerName: "Time Stamp",
      type: "date",
    },
  ];

  const TabsVal = [
    {
      heading: "Tab Pages",
      controls: [
        {
          label: "Pending",
          value: "1",
          component: <PendingPage />,
        },
        {
          label: "Archive",
          value: "2",
          component: (
            <OrderTable
              type={"Archived"}
              column={archivedColumn}
              row={archive}
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
