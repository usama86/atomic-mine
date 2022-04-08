import React from "react";
import { StyledTable } from "./SearchableTable.style";
import Search from "./TableSearch";

const default_rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const default_columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

const EditableTable = ({ rows, columns, height, selectRowHandler, rowID }) => {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState(columns[0].field);
  const [fields, setFields] = React.useState([]);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData([...rows]);
  }, [rows]);
  React.useEffect(() => {
    let temp = [];
    columns.forEach((column) => {
      if (!column.preventSearch) {
        temp.push({
          accessor: column.field,
          label: column.headerName || column.field,
        });
      }
    });
    setFields(temp);
  }, [columns]);
  const getCategory = (e) => {
    setCategory(e.accessor);
  };
  React.useMemo(() => {
    let temp = [...rows];
    const filtered = temp.filter(
      (row) =>
        row[category] &&
        row[category].toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered);
  }, [search, rows, category]);
  return (
    <div style={{ height: height, width: "100%", padding: "0.4rem" }}>
      <StyledTable
        isRowSelectable={(params) => selectRowHandler(params)}
        getRowId={(row) => (rowID ? row.ssn : row.id)}
        components={{ Toolbar: Search }}
        componentsProps={{
          toolbar: {
            style: {
              height: "5rem",
            },
            getCategory: getCategory,
            value: search,
            setValue: (e) => {
              setSearch(e.target.value);
            },
            categories: fields,
          },
        }}
        rows={data}
        columns={columns}
      />
    </div>
  );
};

export default React.memo(EditableTable);

EditableTable.defaultProps = {
  rows: default_rows,
  columns: default_columns,
  height: "500px",
  selectRowHandler: (e) => {
    return;
  },
};
