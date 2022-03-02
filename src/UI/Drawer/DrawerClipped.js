// primary
import * as React from "react";
import { useNavigate } from "react-router-dom";

// Mui components
import { Toolbar, List, ListItemIcon, ListItemText } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import Constants from "./../../Constants/Constants";
// icons
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { DiAsterisk } from "react-icons/di";
// styled components
import {
  StyledDrawer,
  StyledListItem,
  ContentBox,
  DrawerContentBox,
} from "./DrawerClipped.style";
// helpers
import { links } from "../../Constants/Drawerlinks";
import { genNavLinkColor } from "../../helpers/utils";

export default function ClippedDrawer({
  children,
  mode,
  drawerWidth,
  handleDrawerPageToggle,
  drawerPage,
}) {
  let navigate = useNavigate();

  const onListItemClick = (e, text) => {
    let val = text.replace(/\s/g, "").toLowerCase();
    handleDrawerPageToggle(val);
    navigate("/" + val);
  };

  return (
    <React.Fragment>
      <StyledDrawer drawerwidth={drawerWidth} variant="permanent">
        <Toolbar />
        <DrawerContentBox>
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
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </StyledListItem>
            ))}
          </List>
        </DrawerContentBox>
      </StyledDrawer>
      <ContentBox component="main">
        <Toolbar />
        {children}
      </ContentBox>
    </React.Fragment>
  );
}
