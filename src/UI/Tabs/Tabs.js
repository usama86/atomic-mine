import Box from "./../Layout/Box";
import TabContext from "@mui/lab/TabContext";

export default function LabTabs({ value, children, ...otherProps }) {
  return (
    <Box {...otherProps} sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>{children}</TabContext>
    </Box>
  );
}
