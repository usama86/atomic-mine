import React from "react";
import Box from "../Layout/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "../TextField/TextFieldComp";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledTable } from "./SearchableTable.style";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

const Table = ({ rows, columns, selectRowHandler, rowID }) => {
  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setData(filteredRows);
  };
  React.useEffect(() => {
    setData(rows);
  }, [rows]);
  return (
    <Box sx={{ height: 400, width: 1 }}>
      <StyledTable
        components={{ Toolbar: QuickSearchToolbar }}
        rows={data}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
        columns={columns}
        getRowId={(row) => row[rowID]}
        isRowSelectable={(params) => {
          console.log(params);
          selectRowHandler(params);
        }}
      />
    </Box>
  );
};

export default Table;

Table.defaultProps = {
  rows: [{ id: 0, first: "first", second: "second" }],
  columns: [
    { field: "first", headerName: "First" },
    { field: "second", headerName: "Second" },
  ],
  selectRowHandler: (e) => {
    console.log(e, "no props given");
  },
  rowID: "id",
};
