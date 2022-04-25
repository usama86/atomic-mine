import React from "react";
import PropTypes from "prop-types";
import Box from "./../../../../UI/Layout/Box";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import Button from "../../../../UI/Button/Button";
import RiskApi from "../../../../Services/RiskMonitorApi";
import Checkbox from "../../../../UI/Checkbox/Checkbox";
import Modal from "../../../../UI/Modal/Modal";
import AddNew from "./Modals/TradeNewModel";

function TradeSurvveillance(props) {
  const column = [
    {
      field: "account",
      headerName: "Account #",
      flex: 1,
    },
    {
      field: "reason",
      headerName: "Reason",
      flex: 1,
    },
    {
      field: "code",
      headerName: "Equity",
      flex: 1,
    },
    {
      field: "order_id",
      headerName: "NAV",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "reviewed",
      headerName: "Reviewed",
      flex: 1,
      preventSearch: true,
      renderCell: (params) => <Checkbox onlyCheckbox />,
    },
  ];

  const [TSE, setTSE] = React.useState([]);
  const [random, setRandom] = React.useState("");
  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getTSE = await RiskApi.getTSEvts(props.ssn);
    setTSE(getTSE.data.data);
  };
  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        <Modal
          closeDependancy={random}
          content={<AddNew setRandom={setRandom} />}
        >
          <Button sx={{ color: "#fff" }}>NEW</Button>
        </Modal>
        <Table columns={column} rows={TSE} rowID="id" />
      </Box>
    </>
  );
}

TradeSurvveillance.propTypes = {
  type: PropTypes.string,
  column: PropTypes.array,
  row: PropTypes.array,
};
TradeSurvveillance.defaultProps = {
  type: "Default Type",
  column: [],
  row: [],
};

export default TradeSurvveillance;
