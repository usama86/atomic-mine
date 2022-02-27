import PropTypes from "prop-types";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const Appbar = ({ handleDrawerToggle, drawerWidth, ...otherProps }) => {

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
      <Typography variant="h6" noWrap component="div">
        Responsive drawer
      </Typography>
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