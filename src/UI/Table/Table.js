import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "./../Layout/Stack";

export default function FlexLayoutGrid({ columns, rows, ...otherprops }) {
  return (
    <Stack sx={{ height: "100%" }}>
      <DataGrid
        sx={{
          "& p": {
            margin: 0,
          },
        }}
        rows={rows}
        columns={columns}
        {...otherprops}
      />
    </Stack>
  );
}
