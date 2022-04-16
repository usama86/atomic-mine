import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";

const AlignItemsList = ({ data, height }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "249px",
        overflowY: "auto",
        bgcolor: "background.paper",
      }}
    >
      {data.map((val, ind) => {
        return (
          <React.Fragment key={ind}>
            <ListItem alignItems="flex-start" key={ind}>
              {/* <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar> */}
              <ListItemText
                primary={val.administrator}
                secondary={
                  <React.Fragment>
                    {/* <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography> */}
                    {val.body}
                  </React.Fragment>
                }
              />
            </ListItem>
            {data.length - 1 !== ind ? (
              <Divider variant="inset" component="li" />
            ) : null}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default React.memo(AlignItemsList);
