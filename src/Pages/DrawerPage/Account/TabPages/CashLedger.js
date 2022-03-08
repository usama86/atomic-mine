import React from "react";
import Table from "../../../../UI/Table/SearchableTable";
import Card from "../../../../UI/Card/Card";

const fields = [
  {
    field: "namedsymbol",
    headerName: "Named Symbol",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date/Time",
    flex: 1,
    type: "date",
  },
  {
    field: "totalcashbalance",
    headerName: "Total Cash Balance",
    flex: 1,
  },
];

const data = [
  {
    id: 1,
    namedsymbol: "9",
    action: "Deposit",
    amount: "330",
    date: "3/2/2022",
    totalcashbalance: "$120",
  },
  {
    id: 2,
    namedsymbol: "39",
    action: "Deposited",
    amount: "3330",
    date: "3/2/2021",
    totalcashbalance: "$1230",
  },
  {
    id: 3,
    namedsymbol: "9",
    action: "Buy",
    amount: "230",
    date: "1/2/2022",
    totalcashbalance: "$1220",
  },
  {
    id: 4,
    namedsymbol: "19",
    action: "Deposit",
    amount: "1330",
    date: "1/1/2022",
    totalcashbalance: "$1120",
  },
  {
    id: 5,
    namedsymbol: "29",
    action: "Buy",
    amount: "330",
    date: "3/22/2022",
    totalcashbalance: "$1220",
  },
];

const CashLedger = () => {
  return (
    <Card>
      <Table rows={data} columns={fields} />
    </Card>
  );
};

export default CashLedger;
