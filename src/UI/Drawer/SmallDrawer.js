import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useTheme } from "@mui/material/styles";

export default function TemporaryDrawer({ setIsOpen, isOpen, children }) {
  const theme = useTheme();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer("left", false)}
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
