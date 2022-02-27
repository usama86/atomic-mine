import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { DiAsterisk } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import Img from './../../Images/Logo.png';

const DrawerUI = ({ mobileOpen, drawerWidth, handleDrawerToggle,handleDrawerPageToggle, drawerPage, ...otherProps }) => {
    let navigate = useNavigate();
    const { window } = otherProps;
    const container = window !== undefined ? () => window().document.body : undefined;

    const onListItemClick =(e,text)=>{
      let val = text.replace(/\s/g, '').toLowerCase();
      handleDrawerPageToggle(val);
      navigate("/"+val);
    }
    const drawer = (
        <div>
          <Toolbar sx={{position:'relative'}}>
                    <ListItem sx={{position:'absolute',left:0}}>
                        <ListItemIcon>
                            <DiAsterisk size={35}/>
                        </ListItemIcon>
                            <ListItemText primary={"Bella Ziong"} />
                    </ListItem>   
          </Toolbar>
          <Divider />
          <List>
            {['Account', 'Application', 'Risk Monitor'].map((text, index) => (
              <ListItem 
                button key={text} onClick={(e)=>{onListItemClick(e,text)}}
              sx={{
                background:'#00B4A4'
              }}
              >
                <ListItemIcon>
                  {
                  index === 0 ? <MdOutlineManageAccounts size={21}/> : 
                  index === 1 ? <AiOutlineAppstore size={21}/> :
                  index === 2 ? <DiAsterisk size={21}/> : <MailIcon/>
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <>
                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
         <Drawer
         container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
         sx={{
           display: { xs: 'block', sm: 'none' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
       >
         {drawer}
       </Drawer>
       <Drawer
         variant="permanent"
         sx={{
           display: { xs: 'none', sm: 'block' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
         open
       >
         {drawer}
       </Drawer>
       </>
    );
  };
  
  export default DrawerUI;
  
  DrawerUI.propTypes = {
      handleDrawerToggle: PropTypes.func,
      drawerWidth: PropTypes.number,
  };
  
  DrawerUI.defaultProps = {
    width: 240,
  };