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
import { Typography } from "@mui/material";
import Stack from "../Layout/Stack";
import Logo from "../../Store/LogoSvg";
import CssBaseline from "@mui/material/CssBaseline";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";

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
  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };

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
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.mode === "light" ? "#fff" : "",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            sx={{ width: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body"
                color={
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "#fff"
                }
                noWrap
                component="div"
              >
                <Stack direction="row" alignItems="center">
                  <span style={{ marginRight: "0.6rem" }}>
                    <Logo
                      width="1.7rem"
                      height="1.7rem"
                      color={
                        theme.palette.mode === "light"
                          ? theme.palette.primary.main
                          : "#fff"
                      }
                    />
                  </span>
                  {Constants.Atomic_Vault}
                </Stack>
              </Typography>
            </Box>
            <Box sx={{ mr: "0.5rem" }}>
              <Typography
                variant="body"
                color={theme.palette.mode === "light" ? "#000" : "#fff"}
                noWrap
                component="div"
              >
                Bella Ziong
              </Typography>
            </Box>
            <Box>
              <Typography variant="body" noWrap component="div">
                <Stack direction="row">
                  {mode === "light" ? (
                    <IconButton
                      onClick={() => {
                        handleChangeMode("dark");
                      }}
                    >
                      <MdDarkMode
                        style={{
                          height: "100%",
                          color: theme.palette.primary.main,
                          fontSize: "1.6rem",

                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleChangeMode("light");
                      }}
                    >
                      <MdLightMode
                        style={{
                          height: "100%",
                          fontSize: "1.6rem",
                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  )}
                  <IconButton onClick={onLogout}>
                    <FiLogOut
                      style={{
                        display: "flex",
                        color:
                          theme.palette.mode === "light"
                            ? theme.palette.primary.main
                            : "",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
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
