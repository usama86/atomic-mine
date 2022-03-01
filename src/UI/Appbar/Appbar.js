import PropTypes from "prop-types";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "./../Layout/Box";
import { useNavigate } from "react-router-dom";
import { style } from "./Appbar.style";
import Constants from "./../../Constants/Constants";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Appbar = ({
  handleDrawerToggle,
  drawerWidth,
  mode,
  handleChangeMode,
  ...otherProps
}) => {
  let navigate = useNavigate();
  console.log(mode);

  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={style.box}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#fff"
            sx={{ flexGrow: "1" }}
          >
            {Constants.Atomic_Vault}
          </Typography>
          {mode === "light" ? (
            <IconButton
              onClick={() => {
                handleChangeMode("dark");
              }}
            >
              <MdDarkMode
                /**
               * height: 100%;
    width: 1.4rem;
    color: white;
               */
                style={{
                  height: "100%",
                  color: "#fff",
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
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                marginLeft: "0.8rem",
                color: "#fff",
              }}
              onClick={onLogout}
            > */}
            {Constants.Logout}
            {/* </Typography> */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

Appbar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  drawerWidth: PropTypes.number,
};

Appbar.defaultProps = {
  width: 240,
};
