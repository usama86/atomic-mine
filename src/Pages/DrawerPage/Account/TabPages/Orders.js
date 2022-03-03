import React from "react";

import Stack from "../../../../UI/Layout/Stack";
import Box from "../../../../UI/Layout/Box";
import Grid from "../../../../UI/Layout/Grid";
import data from "../../../../Constants/dummy_orders.json";
import Search from "../../../../UI/SearchField/Search";
import Card from "../../../../UI/Card/Card";
import Tabs from "./../../../../UI/Tabs/Tabs";

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
    // <Card>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Search searchOptions={data} categories={orderCategories} />
      </Grid>
      {/* <Grid item xs={12}>
          <Tabs></Tabs>
        </Grid> */}
    </Grid>
    // </Card>
  );
};

export default Orders;
