// primary
import * as React from "react";
import { useNavigate } from "react-router-dom";
// Mui components
import { Toolbar, List, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
// icons
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { DiAsterisk } from "react-icons/di";
import { SiLogstash } from "react-icons/si";
// styled components
import {
  StyledDrawer,
  StyledListItem,
  Main,
  DrawerContentBox,
} from "./DrawerClipped.style";
// helpers
import Constants from "./../../Constants/Constants";
import { links } from "../../Constants/Drawerlinks";
import { genNavLinkColor } from "../../helpers/utils";

import SmallDrawer from "./SmallDrawer";

export default function ClippedDrawer({
  children,
  drawerWidth,
  handleDrawerPageToggle,
  smallScreen,
  isOpen,
  toggleDrawer,
  drawerPage,
}) {
  let navigate = useNavigate();
  const onListItemClick = (e, text) => {
    let val = text.replace(/\s/g, "").toLowerCase();
    handleDrawerPageToggle(val);
    navigate("/" + val);
  };

  const content = (
    <List>
      {links.map((text, index) => (
        <StyledListItem
          key={index}
          button
          onClick={(e) => {
            onListItemClick(e, text);
          }}
          text={text}
          drawerpage={drawerPage}
        >
          <ListItemIcon>
            {index === 0 ? (
              <MdOutlineManageAccounts
                color={genNavLinkColor(text, drawerPage)}
                size={Constants.IconSize}
              />
            ) : index === 1 ? (
              <AiOutlineAppstore
                color={genNavLinkColor(text, drawerPage)}
                size={Constants.IconSize}
              />
            ) : index === 2 ? (
              <DiAsterisk
                color={genNavLinkColor(text, drawerPage)}
                size={Constants.IconSize}
              />
            ) : index === 3 ? (
              <SiLogstash
                color={genNavLinkColor(text, drawerPage)}
                size={Constants.IconSize}
              />
            ) : (
              <MailIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={text} />
        </StyledListItem>
      ))}
    </List>
  );

  return (
    <React.Fragment>
      {smallScreen ? (
        isOpen && (
          <SmallDrawer
            drawerwidth={drawerWidth}
            isopen={isOpen}
            setisopen={(e) => toggleDrawer(e)}
          >
            {content}
          </SmallDrawer>
        )
      ) : (
        <StyledDrawer drawerwidth={drawerWidth} variant="permanent">
          <Toolbar />
          <DrawerContentBox>{content}</DrawerContentBox>
        </StyledDrawer>
      )}
      <Main component="main">
        <Toolbar />
        {children}
      </Main>
    </React.Fragment>
  );
}
