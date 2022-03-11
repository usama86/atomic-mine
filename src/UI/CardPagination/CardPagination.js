import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Pagination from "./../Pagination/Pagination";

export default function CheckboxList({
  docs,
  perPage,
  showIcon,
  customHeight,
}) {
  const [checked, setChecked] = React.useState([0]);
  const maxPages = ~~(docs.length / perPage) + 1;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          height: customHeight,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {docs
          .slice(perPage * page - perPage, perPage * page)
          .map((value, index) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={index}
                secondaryAction={
                  showIcon && (
                    <IconButton edge="end" aria-label="comments">
                      <AiOutlineCloudDownload />
                    </IconButton>
                  )
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)}>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
      {docs.length > perPage && (
        <Pagination count={maxPages} page={page} onChange={handleChange} />
      )}
    </>
  );
}
CheckboxList.defaultProps = {
  arr: ["hello", "hi"],
  perPage: 6,
  showIcon: true,
  customHeight: "40vh",
};
