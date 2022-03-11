import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

export const StyledDrawer = styled(Drawer)(({ theme, drawerwidth }) => ({
  width: drawerwidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerwidth,
    boxSizing: "border-box",
  },
}));

export const StyledListItem = styled(ListItem)(
  ({ theme, text, drawerpage }) => ({
    backgroundColor:
      text.replace(/\s/g, "").toLowerCase() === drawerpage
        ? theme.palette.primary.main
        : "",
    color: text.replace(/\s/g, "").toLowerCase() === drawerpage ? "#fff" : "",
    "&:hover": {
      backgroundColor:
        text.replace(/\s/g, "").toLowerCase() === drawerpage &&
        theme.palette.primary.light,
    },
  })
);

export const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  width: "calc(100vw - 250px)",
  // overflowX: "auto",
  minHeight: "80vh",
}));

export const DrawerContentBox = styled(Box)(() => ({
  overflow: "auto",
}));
