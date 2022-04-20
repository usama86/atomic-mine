import React from "react";
import Table from "../../../../UI/Table/TableWithGlobalFiltering";
import Card from "../../../../UI/Card/Card";
import Api from "../../../../Services/AccountApi";
import { getTime } from "../../../../helpers/utils";

const Funds = (ssn) => {
  const fields = [
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "Amount",
      flex: 1,
    },
    {
      field: "created_on",
      headerName: "Date/Time initiated",
      flex: 1,
      type: "dateTime",
      valueGetter: getTime,
    },
    {
      field: "settled",
      headerName: "Date/Time settled",
      flex: 1,
      type: "date",
    },
    {
      field: "bank",
      headerName: "Bank Name",
      flex: 1,
    },
    {
      field: "accountNumber",
      headerName: "Acc #",
      flex: 1,
    },
  ];
  const [funds, setFunds] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getFund = await Api.getFunds(ssn);
    setFunds(getFund);
  };

  return (
    <Card>
      <Table rows={funds} columns={fields} rowID={"transaction_id"} />
    </Card>
  );
};

export default Funds;
