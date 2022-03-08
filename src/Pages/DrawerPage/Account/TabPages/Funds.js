import React from "react";
import Table from "../../../../UI/Table/SearchableTable";
import data from "../../../../Constants/mock_funds_data.json";
import Card from "../../../../UI/Card/Card";

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

const Funds = () => {
  return (
    <Card>
      <Table rows={data} columns={fields} />
    </Card>
  );
};

export default Funds;
