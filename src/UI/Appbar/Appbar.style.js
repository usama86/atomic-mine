import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#121C26",
}));

export const NavLogoName = styled("span")(() => ({}));

export const DarkModeIcon = styled(MdDarkMode)(({ theme }) => ({
  height: "100%",
  color: theme.palette.mode === "light" ? theme.palette.primary.main : "#fff",
  fontSize: "1.6rem",
  cursor: "pointer",
}));

export const LightModeIcon = styled(MdLightMode)(() => ({
  height: "100%",
  fontSize: "1.6rem",
  cursor: "pointer",
}));

export const LogOutIcon = styled(FiLogOut)(({ theme }) => ({
  display: "flex",
  color: theme.palette.mode === "light" ? theme.palette.primary.main : "#fff",
}));
