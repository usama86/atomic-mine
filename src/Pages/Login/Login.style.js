import { styled } from "@mui/material/styles";
import { Paper, TextField, Typography } from "@mui/material";
import Card from "../../UI/Card/Card";
import Stack from "../../UI/Layout/Stack";
import Button from "../../UI/Button/Button";
import Box from "../../UI/Layout/Box";

export const Background = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === "light" && "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

export const CardStyled = styled(Card)(({ theme }) => ({
  width: "60vw",
  backgroundColor: theme.palette.mode === "dark" && theme.palette.grey[900],
}));

export const StyledField = styled(TextField)(({ theme }) => ({
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

export const CardContent = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  padding: "1rem",
  paddingLeft: "2rem",
  paddingBottom: "2rem",
  height: "100%",
}));

export const Heading = styled(Typography)(() => ({
  marginBottom: "1rem",
  marginTop: "1rem",
  letterSpacing: "2px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "1rem",
  alignSelf: "center",
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  background: theme.palette.secondary.main,
  clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
  transform: "translateX(20%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
