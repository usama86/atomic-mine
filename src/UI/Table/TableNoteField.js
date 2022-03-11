import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const TableNoteField = ({ ...props }) => {
  return (
    <React.Fragment>
      <input
        {...props}
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          flexGrow: 1,
        }}
      />
      <IconButton>
        <AddIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default TableNoteField;

TableNoteField.defaultProps = {};
