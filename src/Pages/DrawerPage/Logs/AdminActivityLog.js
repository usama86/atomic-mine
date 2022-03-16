import React from "react";
import Stack from "../../../UI/Layout/Stack";
import CardPagination from "../../../UI/CardPagination/CardPagination";

import Table from "../../../UI/Table/SearchableTable";

import data from "../../../Constants/mock_data_logs.json";
const fields = [
  {
    field: "admin_name",
    headerName: "Admin Name",
    flex: 1,
  },
  {
    field: "client_account",
    headerName: "Client Account",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
];
function AdminActivityLog() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Table rows={data} columns={fields} />
    </Stack>
  );
}

const row = [
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
  "Kevin logged in",
  "Raven Deleted a user",
  "James approved a user",
];

export default AdminActivityLog;
