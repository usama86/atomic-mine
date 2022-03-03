import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  ".MuiInputLabel-root.Mui-error": {
    color: theme.palette.error.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
      borderTop: "none",
      borderRight: "none",
      borderBottom: "none",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-error fieldset": {
      borderColor: "red",
    },
  },
}));
