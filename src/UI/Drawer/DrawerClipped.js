import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Constants from "./../../Constants/Constants";
import { useNavigate } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { DiAsterisk } from "react-icons/di";
import AppBar from "../Appbar/Appbar";
import { useTheme } from "@emotion/react";

export default function ClippedDrawer({
  children,
  mode,
  drawerWidth,
  handleDrawerPageToggle,
  drawerPage,
  handleChangeMode,
  ...otherProps
}) {
  const theme = useTheme();
  let navigate = useNavigate();
  console.log(mode);
  // const { window } = otherProps;
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  const onListItemClick = (e, text) => {
    let val = text.replace(/\s/g, "").toLowerCase();
    handleDrawerPageToggle(val);
    navigate("/" + val);
  };
  // const onLogout = () => {
  //   localStorage.removeItem("signIn");
  //   navigate("/login");
  // };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar mode={mode} handleChangeMode={handleChangeMode} />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              Constants.Account,
              Constants.Application,
              Constants.RiskMonitor,
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={(e) => {
                  onListItemClick(e, text);
                }}
                sx={{
                  backgroundColor:
                    text.replace(/\s/g, "").toLowerCase() === drawerPage
                      ? "primary.main"
                      : "",
                  "&:hover": {
                    backgroundColor:
                      text.replace(/\s/g, "").toLowerCase() === drawerPage &&
                      "primary.light",
                  },
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <MdOutlineManageAccounts size={21} />
                  ) : index === 1 ? (
                    <AiOutlineAppstore size={21} />
                  ) : index === 2 ? (
                    <DiAsterisk size={21} />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
