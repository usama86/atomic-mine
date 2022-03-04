import PropTypes from "prop-types";
import React from "react";
// mui helpers
import { useTheme } from "@emotion/react";

// mui components
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// customized mui components
import Typography from "../../UI/Typography/Typography";
import Box from "../Layout/Box";
import Stack from "../Layout/Stack";
import Constants from "./../../Constants/Constants";
// resources
import Logo from "../../Store/LogoSvg";
import { GiHamburgerMenu } from "react-icons/gi";
// styled components
import {
  AppBarStyled,
  NavLogoName,
  DarkModeIcon,
  LightModeIcon,
  LogOutIcon,
} from "./Appbar.style";

const AppbarComp = ({
  toggleDrawerHandler,
  mode,
  smallScreen,
  handleChangeMode,
  onLogout,
}) => {
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
              <Typography variant="body" color={"green"} noWrap component="div">
                <Stack
                  sx={{ gap: "0.6rem" }}
                  direction="row"
                  alignItems="center"
                >
                  {smallScreen ? (
                    <IconButton onClick={(e) => toggleDrawerHandler(e)}>
                      <GiHamburgerMenu />
                    </IconButton>
                  ) : (
                    <Logo width="1.7rem" height="1.7rem" color={"green"} />
                  )}
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

AppbarComp.propTypes = {
  handleChangeMode: PropTypes.func,
  mode: PropTypes.string,
  onLogout: PropTypes.func,
  smallScreen: PropTypes.any,
  toggleDrawerHandler: PropTypes.func,
};

AppbarComp.defaultProps = {
  toggleDrawerHandler: (e) => console.log(e, "no props given"),
};

export default AppbarComp;
