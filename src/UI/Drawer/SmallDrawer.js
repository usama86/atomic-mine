import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useTheme } from "@mui/material/styles";

export default function TemporaryDrawer({ setisopen, isopen, children }) {
  const theme = useTheme();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setisopen(open);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isopen}
      onClose={toggleDrawer("left", false)}
      onOpen={toggleDrawer("left", true)}
    >
      <Box
        sx={{
          paddingTop: `${theme.mixins.toolbar.minHeight}px`,
          width: "250px",
        }}
        role="presentation"
        onClick={toggleDrawer("left", false)}
        onKeyDown={toggleDrawer("left", false)}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
