import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './../../UI/Appbar/Appbar';
import Drawer from './../../UI/Drawer/Drawer';
import Box from './../../UI/Layout/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate, Outlet } from "react-router-dom";

const drawerWidth = 240;

function Home(props) {
  let navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerPage, setDrawerPage] = React.useState("account");
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerPageToggle = (text) => {
        setDrawerPage(text);
  };

  React.useEffect(()=>{
    let isLoggedIn = localStorage.getItem("signIn");
    if(!isLoggedIn)
      navigate('/login');
  });

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer drawerWidth={drawerWidth} drawerPage={drawerPage} handleDrawerPageToggle={handleDrawerPageToggle} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },marginTop:'64px' }}
      >
         <Outlet/>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
