import React from "react";
import PropTypes from "prop-types";
import Box from "./../../../../UI/Layout/Box";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import RiskApi from "../../../../Services/RiskMonitorApi";
import Checkbox from "../../../../UI/Checkbox/Checkbox";
import { getTime } from "../../../../helpers/utils";
// import Button from "../../../UI/Button/Button";

function LowEquity() {
  const column = [
    {
      field: "account",
      headerName: "Account #",
      flex: 1,
    },
    {
      field: "code",
      headerName: "Reason",
      flex: 1,
    },
    {
      field: "equity",
      headerName: "Equity",
      flex: 1,
    },
    {
      field: "NAV",
      headerName: "NAV",
      flex: 1,
    },
    {
      field: "occurred_on",
      headerName: "Date",
      flex: 1,
      type: "dateTime",
      valueGetter: getTime,
    },
    {
      field: "reviewed",
      headerName: "Reviewed",
      flex: 1,
      preventSearch: true,
      renderCell: (params) => <Checkbox onlyCheckbox />,
    },
  ];

  const [negativeNAVs, setNegativeNAVs] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getNegativeNAVs = await RiskApi.getNegativeNAVs();
    setNegativeNAVs(getNegativeNAVs.data.data);
  };

  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        {/* <Button sx={{ color: "#fff" }}>NEW</Button> */}
        <Table columns={column} rows={negativeNAVs} rowID="account" />
      </Box>
    </>
  );
}

LowEquity.propTypes = {
  type: PropTypes.string,
  column: PropTypes.array,
  row: PropTypes.array,
};
LowEquity.defaultProps = {
  type: "Default Type",
  column: [],
  row: [],
};

export default LowEquity;
