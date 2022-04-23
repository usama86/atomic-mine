import React from "react";
import Table from "../../../../UI/Table/TableWithGlobalFiltering";
import Card from "../../../../UI/Card/Card";
import Api from "../../../../Services/AccountApi";
import { getTime } from "../../../../helpers/utils";

let totalAmount = 0;
const CashLedger = (ssn) => {
  const [cashLedger, setCashLedger] = React.useState([]);

  const getAmount = (params) => {
    let amount = Number(params.row.avg_filled_price) * Number(params.row.qty);
    totalAmount = amount + totalAmount;
    return amount;
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
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getCashLedger = await Api.getCashLedger(ssn);
    setCashLedger(getCashLedger);
  };

  return (
    <Card>
      <Table rowID="id" rows={cashLedger} columns={fields} />
    </Card>
  );
};

export default CashLedger;
