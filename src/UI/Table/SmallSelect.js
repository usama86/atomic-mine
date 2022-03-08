import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineUnorderedList } from "react-icons/ai";

const default_options = [
  { label: "None", accessor: "none" },
  { label: "Atria", accessor: "atria" },
  { label: "Callisto", accessor: "callisto" },
  { label: "Dione", accessor: "dione" },
  { label: "Ganymede", accessor: "ganymede" },
  { label: "Hangouts Call", accessor: "hangouts-call" },
  { label: "Luna", accessor: "luna" },
  { label: "Oberon", accessor: "oberon" },
  { label: "Phobos", accessor: "phobos" },
  { label: "Pyxis", accessor: "pyxis" },
  { label: "Sedna", accessor: "sedna" },
  { label: "Titania", accessor: "titania" },
  { label: "Triton", accessor: "triton" },
  { label: "Umbriel", accessor: "umbriel" },
];

const ITEM_HEIGHT = 48;

export default function LongMenu({ getSelected, fields }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectHandler = (e) => {
    getSelected(e.accessor);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineUnorderedList />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {fields.map((option) => (
          <MenuItem
            key={option.accessor}
            selected={option === "Pyxis"}
            onClick={() => selectHandler(option)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

LongMenu.defaultProps = {
  getSelected: (e) => console.log("no props given", e),
  fields: default_options,
};
