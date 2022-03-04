import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Card from "../../UI/Card/Card";
import Stack from "../../UI/Layout/Stack";
import Button from "../../UI/Button/Button";
import Box from "../../UI/Layout/Box";
import Typography from "../../UI/Typography/Typography";
import logo from "../../Images/stocks.png";

export const Background = styled(Paper)(({ theme, ismedium }) => {
  return {
    background: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };
});

export const BlurredBackground = styled("div")(({ theme }) => ({
  position: "absolute",
  filter: "blur(4px)",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `${theme.palette.logInBackground} url(${logo}) no-repeat center`,
  backgroundSize: "100%",
  zIndex: 4,
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  zIndex: 1000,
  width: "60vw",
  backgroundColor: theme.palette.mode === "dark" && theme.palette.grey[900],
}));

export const StyledForm = styled("form")({ height: "100%" });

export const CardContent = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  padding: "1rem",
  paddingLeft: "2rem",
  paddingBottom: "2rem",
  height: "100%",
  justifyContent: "space-evenly",
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

export const LeftContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: "space-evenly",
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  // background: theme.palette.black.main,
  // background: "rgb(0,0,0)",
  background:
    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(18,28,38,1) 40%, rgba(18,28,38,1) 44%)",
  // clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
  transform: "translateX(20%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
