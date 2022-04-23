import React from "react";
import Table from "../../../../UI/Table/TableWithGlobalFiltering";
import Card from "../../../../UI/Card/Card";
import Api from "../../../../Services/AccountApi";
import Loader from "./../../../../UI/Loader/Loader";

const CashLedger = (ssn) => {
  const [loading, setLoading] = React.useState(false);
  const [cashLedger, setCashLedger] = React.useState([]);
  const getAmount = (params) => {
    let amount = 0;
    if (params.row.avg_filled_price)
      amount = Number(params.row.avg_filled_price) * Number(params.row.qty);
    else amount = Number(params.row.qty);
    return amount.toFixed(2);
  };
  const getTime = (params) => {
    let datee = "";
    if (params.row.filled_on) datee = params.row.filled_on;
    else datee = params.row.created_on;
    let dateVal = new Date(datee);

    return (
      dateVal.getDate() +
      "/" +
      (dateVal.getMonth() + 1) +
      "/" +
      dateVal.getFullYear()
    );
  };
  const fields = [
    {
      field: "ticker",
      headerName: "Named Symbol",
      flex: 1,
    },
    {
      field: "side",
      headerName: "Action",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      valueGetter: getAmount,
    },
    {
      field: "filled_on",
      headerName: "Date/Time",
      flex: 1,
      type: "dateTime",
      valueGetter: getTime,
    },
    {
      field: "totalBalance",
      headerName: "Total Cash Balance",
      flex: 1,
    },
  ];

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getCashLedger = await Api.getCashLedger(ssn);
    setCashLedger(getCashLedger);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Card>
          <Table rows={cashLedger} columns={fields} multipleID />
        </Card>
      )}
    </>
  );
};

export default CashLedger;
