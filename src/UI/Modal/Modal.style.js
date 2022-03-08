import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Close = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "5px",
  right: "5px",
  "& svg": {
    color: theme.palette.error.main,
  },
}));

export const StyledPaper = styled(Paper)(({ theme, width }) => ({
  maxHeight: "90vh",
  padding: theme.spacing(5),
  overflowY: "auto",
  // Styles applied to Box
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: width,
  bgcolor: theme.palette.background.main,
  boxShadow: 24,
}));
