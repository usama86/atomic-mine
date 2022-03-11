import React from "react";
import Stack from "../../../UI/Layout/Stack";
import Table from "../../../UI/Table/SearchableTable";
import Typography from "../../../UI/Typography/Typography";

import data from "../../../Constants/mock_data.json";

const SearchUser = ({ getRow }) => {
  const fields = [
    { flex: 1, field: "accountNumber", headerName: "Account #" },
    { flex: 1, field: "name", headerName: "Name" },
    { flex: 1, field: "email", headerName: "Email" },
    { flex: 1, field: "social", headerName: "Social" },
    { flex: 1, field: "contact", headerName: "Contact" },
  ];
  return (
    <Stack sx={{ p: 2, width: "100%" }} gap={2}>
      <Typography variant="h5">Select User</Typography>
      <Table selectRowHandler={(e) => getRow(e)} rows={data} columns={fields} />
    </Stack>
  );
};

export default SearchUser;
