import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "./../Layout/Stack";

export default function FlexLayoutGrid({ columns, rows, ...otherprops }) {
  return (
    <Stack sx={{ height: "100%" }}>
      <DataGrid rows={rows} columns={columns} {...otherprops} />
    </Stack>
  );
}
// const row = [
//   { id: 0, col1: "hello", col2: "World", date: "05-02-1990" },
//   { id: 1, col1: "DataGridPro", col2: "is Awesome" },
//   { id: 2, col1: "MUI", col2: "is Amazing" },
// ];
// const column = [
//   {
//     field: "col1",
//     headerName: "Column 1",
//     //   description: "Some Description",   shown on hover
//     //   flex: 1,
//   },
//   {
//     field: "col2",
//     // editable: true,
//     headerName: "Column 2",
//     // width: 150
//   },
//   {
//     field: "col3",
//     //   width: 150,
//     //   valueGetter: (params) => { you wanna get value from some other value
//     // return `${params.row.col1 || ""} ${params.row.col2 || ""}`;
//     //   },
//     //   renderHeader: (params) => ( header jsx
//     //     <strong>
//     //       {"Birthday "}
//     //       <span role="img" aria-label="enjoy">
//     //         🎂
//     //       </span>
//     //     </strong>
//     //   ),
//   },
//   {
//     field: "col4",
//     headerName: "Column 4",
//     //   flex: 0.4,
//     //   renderCell: (params) => { cell k andar render kr da ga
//     //     return (
//     //       <span>
//     //         {" "}
//     //         {params.row.col1} {params.row.col2}
//     //         <button>click me</button>
//     //       </span>
//     //     );
//     //   },
//   },
//   {
//     field: "date",
//     type: "date",
//     //   editable: true,
//     //   flex: 0.4,
//   },
//   {
//     field: "test",
//     headerName: "Column 5",
//     //   type: "actions",
//     //   getActions: (params) => {
//     // return [
//     //   <GridActionsCellItem
//     // icon={<DeleteIcon />}
//     // label="Delete"
//     // onClick={() => {
//     //   console.log("hello");
//     // }}
//     //   />,
//   },
// ];
