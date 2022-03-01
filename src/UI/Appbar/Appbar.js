import React from "react";
import Box from "../Layout/Box";
import { FiLogOut } from "react-icons/fi";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "../Layout/Stack";
import Logo from "../../Store/LogoSvg";
import IconButton from "@mui/material/IconButton";
import Constants from "./../../Constants/Constants";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import AppBar from "@mui/material/AppBar";

const AppbarComp = ({ mode, handleChangeMode }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AppbarComp;
