import React from "react";
import Stack from "../../../UI/Layout/Stack";
import CardPagination from "../../../UI/CardPagination/CardPagination";

function AdminActivityLog() {
  return (
    <Stack sx={{ width: "100%" }}>
      <CardPagination
        docs={row}
        perPage={12}
        showIcon={false}
        customHeight="80vh"
      />
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
