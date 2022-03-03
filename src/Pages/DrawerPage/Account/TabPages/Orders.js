import React from "react";

import Grid from "../../../../UI/Layout/Grid";
import data from "../../../../Constants/dummy_orders.json";
import Search from "../../../../UI/SearchField/Search";

const orderCategories = [
  {
    accessor: "symbol",
    label: "Symbol",
  },
  {
    accessor: "date",
    label: "Date",
  },
];

const Orders = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Search searchOptions={data} categories={orderCategories} />
      </Grid>
    </Grid>
  );
};

export default Orders;
