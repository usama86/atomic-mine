import React from "react";
import Table from "../../../../UI/Table/TableWithGlobalFiltering";
import data from "../../../../Constants/mock_funds_data.json";
import Card from "../../../../UI/Card/Card";
import Api from "../../../../Services/AccountApi";

const Funds = (ssn) => {
  const fields = [
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
      field: "initiated",
      headerName: "Date/Time initiated",
      flex: 1,
      type: "date",
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
  }, []);

  const fetchData = async () => {
    let getFund = await Api.getFunds(ssn);
    setFunds(getFund);
  };

  return (
    <Card>
      <Table rowID="id" rows={data} columns={fields} />
    </Card>
  );
};

export default Funds;
