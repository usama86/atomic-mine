import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Card from "../../UI/Card/Card";
import Stack from "../../UI/Layout/Stack";
import Button from "../../UI/Button/Button";
import Box from "../../UI/Layout/Box";
import Typography from "../../UI/Typography/Typography";

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
