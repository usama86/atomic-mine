import React from "react";
// mui helpers
import { useTheme } from "@emotion/react";

// mui components
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
// customized mui components
import Box from "../Layout/Box";
import Stack from "../Layout/Stack";
import Constants from "./../../Constants/Constants";
// resources
import Logo from "../../Store/LogoSvg";
// styled components
import {
  AppBarStyled,
  NavLogoName,
  DarkModeIcon,
  LightModeIcon,
  LogOutIcon,
} from "./Appbar.style";

const AppbarComp = ({ mode, handleChangeMode, onLogout }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarStyled position="fixed">
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
                <Stack
                  sx={{ gap: "0.6rem" }}
                  direction="row"
                  alignItems="center"
                >
                  <Logo
                    width="1.7rem"
                    height="1.7rem"
                    color={
                      theme.palette.mode === "light"
                        ? theme.palette.primary.main
                        : "#fff"
                    }
                  />
                  <NavLogoName>{Constants.Atomic_Vault}</NavLogoName>
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
                {Constants.Client_Name}
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
                      <DarkModeIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleChangeMode("light");
                      }}
                    >
                      <LightModeIcon />
                    </IconButton>
                  )}
                  <IconButton onClick={() => onLogout()}>
                    <LogOutIcon />
                  </IconButton>
                </Stack>
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBarStyled>
    </React.Fragment>
  );
};

export default AppbarComp;
