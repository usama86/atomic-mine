import React from "react";
import Drawer from "../../UI/Drawer/DrawerClipped";
import { Outlet } from "react-router-dom";
import Box from "../../UI/Layout/Box";
import AppBar from "../../UI/Appbar/Appbar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Home = ({ mode, handleChangeMode }) => {
  const navigate = useNavigate();
  const [drawerPage, setDrawerPage] = React.useState("account");
  const handleDrawerPageToggle = (text) => {
    setDrawerPage(text);
  };
  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        onLogout={onLogout}
        mode={mode}
        handleChangeMode={handleChangeMode}
      />
      <Drawer
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
