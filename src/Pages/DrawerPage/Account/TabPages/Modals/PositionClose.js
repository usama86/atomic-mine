import React from "react";
import Typography from "../../../../../UI/Typography/Typography";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import Stack from "../../../../../UI/Layout/Stack";
import { useTheme } from "@emotion/react";

const PositionClose = ({ triggerClose }) => {
  const [type, setType] = React.useState("");
  const theme = useTheme();

  return (
    <Stack gap={2}>
      <Typography variant="h6">Current bid: 9.10</Typography>
      <Typography variant="h6">Current ask: 9.80</Typography>

      <Stack direction="row" gap={3} justifyContent="center">
        <Button
          onClick={() => setType("Limit")}
          styleOverrides={
            type === "Limit"
              ? { background: theme.palette.primary.main }
              : { background: theme.palette.primary.dark }
          }
        >
          Limit
        </Button>
        <Button
          onClick={() => setType("Market")}
          styleOverrides={
            type === "Market"
              ? { background: theme.palette.primary.main }
              : { background: theme.palette.primary.dark }
          }
        >
          Market
        </Button>
      </Stack>
      <TextFieldComp isdefault={true} label="Limit Price" />
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            triggerClose();
          }}
          sx={{ color: "white" }}
          isdefault={true}
        >
          Close
        </Button>
      </Stack>
    </Stack>
  );
};

export default PositionClose;
