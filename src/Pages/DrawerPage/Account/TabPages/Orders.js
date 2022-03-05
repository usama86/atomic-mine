import React from "react";

import Grid from "../../../../UI/Layout/Grid";
import data from "../../../../Constants/dummy_orders.json";
import SearchableTable from "../../../../UI/Table/SearchableTable";
// import Card from "../../../../UI/Card/Card";
import Stack from "../../../../UI/Layout/Stack";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";
const fields = [
  { field: "symbol", flex: 0.5, headerName: "Symbol" },
  { field: "date", flex: 1, headerName: "Date" },
];

const Orders = () => {
  const [selectedRow, setSelectedRow] = React.useState({
    date: "",
    id: 0,
    isCancelled: false,
    isFilled: false,
    isOpen: false,
    isRejected: false,
    symbol: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const selectOrderHandler = (e) => {
    enqueueSnackbar(`Order ${e.row.symbol} selected!`, {
      variant: "success",
    });
    setSelectedRow({ ...e.row });
  };
  return (
    <Stack direction="column" alignItems="flex-start" gap={2}>
      <Modal
        width="80vw"
        content={
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SearchableTable
                selectRowHandler={selectOrderHandler}
                rows={data}
                columns={fields}
              />
            </Grid>
          </Grid>
        }
      >
        <Button>{Constants.Select_Order}</Button>
      </Modal>
      {selectedRow.symbol}
    </Stack>
  );
};

export default Orders;
