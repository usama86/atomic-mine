import React from "react";
import Drawer from "../../UI/Drawer/DrawerClipped";
import { Outlet } from "react-router-dom";
import Box from "../../UI/Layout/Box";
import AppBar from "../../UI/Appbar/Appbar";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
const drawerWidth = 240;

const Home = ({ mode, handleChangeMode }) => {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [toggleDrawer, setToggleDrawer] = React.useState(false);
  const navigate = useNavigate();
  const [drawerPage, setDrawerPage] = React.useState("account");
  const handleDrawerPageToggle = (text) => {
    setDrawerPage(text);
  };
  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };
  const toggleDrawerHandler = (e) => {
    setToggleDrawer((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        toggleDrawerHandler={toggleDrawerHandler}
        onLogout={onLogout}
        mode={mode}
        handleChangeMode={handleChangeMode}
        smallScreen={smallScreen}
      />
      <Drawer
        toggleDrawer={toggleDrawerHandler}
        isOpen={toggleDrawer}
        smallScreen={smallScreen}
        drawerWidth={drawerWidth}
        drawerPage={drawerPage}
        handleDrawerPageToggle={handleDrawerPageToggle}
        mode={mode}
        handleChangeMode={handleChangeMode}
      >
        <Outlet />
      </Drawer>
    </Box>
  );
};

export default Home;
