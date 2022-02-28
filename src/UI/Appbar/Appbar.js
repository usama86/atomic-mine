import PropTypes from "prop-types";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from './../Layout/Box';
import { useNavigate } from "react-router-dom";
import {style} from './Appbar.style';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Appbar = ({ handleDrawerToggle, drawerWidth, mode, handleChangeMode, ...otherProps }) => {
    let navigate = useNavigate();
    console.log(mode);

   const onLogout=()=>{
       localStorage.removeItem("signIn");
       navigate('/login');
   } 
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
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Box  
            sx={style.box}
      >
        <Typography variant="h6" noWrap component="div" sx={{flexGrow:'1'}}>
            Responsive drawer
        </Typography>
            {mode ==='light' ? 
            <Brightness4Icon onClick={()=>{
                handleChangeMode("dark");

            }} 
            sx={{
                fontSize:'1.6rem',
                "&:hover":{
                    cursor: "pointer"
                },
            }}/> :
            <Brightness7Icon
            onClick={()=>{
                handleChangeMode("light");
            }} 
            sx={{
                fontSize:'1.6rem',
                "&:hover":{
                    cursor: "pointer"
                },
                }}/>}           
            <Typography variant="h6" noWrap component="div"
                sx={{
                    "&:hover":{
                        cursor: "pointer"
                    },
                    marginLeft:"0.8rem"
                }}
                onClick={onLogout}
            >
                Logout
            </Typography>
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