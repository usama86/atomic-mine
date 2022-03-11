import React from "react";
import Stack from "../../../UI/Layout/Stack";
import Grid from "../../../UI/Layout/Grid";
import Card from "../../../UI/Card/Card";

function AdminActivityLog() {
  return (
    <Stack spacing={6}>
      <Card>
        <Grid sx={{ padding: "1rem" }} spacing={4} container>
          <Grid
            sx={{
              alignItems: "center",
            }}
            item
            container
            xs={12}
          >
            {row.map((data) => (
              <>{data.desc}</>
            ))}
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}

const row = [
  {
    id: 0,
    desc: "Kevin logged in",
  },
  {
    id: 1,
    desc: "Raven Deleted a user",
  },
  {
    id: 2,
    desc: "James approved a user",
  },
];

export default AdminActivityLog;
