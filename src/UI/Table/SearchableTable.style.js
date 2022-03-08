import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const StyledTable = styled(DataGrid)(({ theme }) => ({
  border: "none",
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
    width: "7px",
  },

  /* Track */
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
    boxShadow: `inset 0 0 5px ${theme.palette.primary.light}`,
    borderRadius: "10px",
  },

  /* Handle */
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: "10px",
  },

  /* Handle on hover */
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover ": {
    background: theme.palette.primary.dark,
  },
  "& p": {
    margin: 0,
  },
  "& .MuiDataGrid-row": {
    cursor: "pointer",
  },
}));
