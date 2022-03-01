// import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "../Appbar/Appbar";
// import { useTheme } from "@mui/material";
// const AppBarComp = (props) => {
//   const theme = useTheme();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           backgroundColor: theme.palette.mode === "light" ? "#fff" : "",
//         }}
//       >
//         hello
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default AppBarComp;

import React from "react";
import Box from "@mui/material/Box";
import { FiLogOut } from "react-icons/fi";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "../Layout/Stack";
import Logo from "../../Store/LogoSvg";
import IconButton from "@mui/material/IconButton";
import Constants from "./../../Constants/Constants";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import AppBar from "../Appbar/Appbar";

const AppbarComp = ({ mode, handleChangeMode }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const onLogout = () => {
    localStorage.removeItem("signIn");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.mode === "light" ? "#fff" : "",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            sx={{ width: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body"
                color={
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "#fff"
                }
                noWrap
                component="div"
              >
                <Stack direction="row" alignItems="center">
                  <span style={{ marginRight: "0.6rem" }}>
                    <Logo
                      width="1.7rem"
                      height="1.7rem"
                      color={
                        theme.palette.mode === "light"
                          ? theme.palette.primary.main
                          : "#fff"
                      }
                    />
                  </span>
                  {Constants.Atomic_Vault}
                </Stack>
              </Typography>
            </Box>
            <Box sx={{ mr: "0.5rem" }}>
              <Typography
                variant="body"
                color={theme.palette.mode === "light" ? "#000" : "#fff"}
                noWrap
                component="div"
              >
                Bella Ziong
              </Typography>
            </Box>
            <Box>
              <Typography variant="body" noWrap component="div">
                <Stack direction="row">
                  {mode === "light" ? (
                    <IconButton
                      onClick={() => {
                        handleChangeMode("dark");
                      }}
                    >
                      <MdDarkMode
                        style={{
                          height: "100%",
                          color: theme.palette.primary.main,
                          fontSize: "1.6rem",

                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleChangeMode("light");
                      }}
                    >
                      <MdLightMode
                        style={{
                          height: "100%",
                          fontSize: "1.6rem",
                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  )}
                  <IconButton onClick={onLogout}>
                    <FiLogOut
                      style={{
                        display: "flex",
                        color:
                          theme.palette.mode === "light"
                            ? theme.palette.primary.main
                            : "",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AppbarComp;

// import PropTypes from "prop-types";
// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Typography from "@mui/material/Typography";
// import Box from "./../Layout/Box";
// import { useNavigate } from "react-router-dom";
// import { style } from "./Appbar.style";
// import Constants from "./../../Constants/Constants";
// import { MdDarkMode, MdLightMode } from "react-icons/md";

// const Appbar = ({
//   handleDrawerToggle,
//   drawerWidth,
//   mode,
//   handleChangeMode,
//   ...otherProps
// }) => {
//   let navigate = useNavigate();
//   console.log(mode);

//   const onLogout = () => {
//     localStorage.removeItem("signIn");
//     navigate("/login");
//   };
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         width: { sm: `calc(100% - ${drawerWidth}px)` },
//         ml: { sm: `${drawerWidth}px` },
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ mr: 2, display: { sm: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Box sx={style.box}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             color="#fff"
//             sx={{ flexGrow: "1" }}
//           >
//             {Constants.Atomic_Vault}
//           </Typography>
//           {mode === "light" ? (
//             <IconButton
//               onClick={() => {
//                 handleChangeMode("dark");
//               }}
//             >
//               <MdDarkMode
//                 /**
//                * height: 100%;
//     width: 1.4rem;
//     color: white;
//                */
//                 style={{
//                   height: "100%",
//                   color: "#fff",
//                   fontSize: "1.6rem",

//                   cursor: "pointer",
//                 }}
//               />
//             </IconButton>
//           ) : (
//             <IconButton
//               onClick={() => {
//                 handleChangeMode("light");
//               }}
//             >
//               <MdLightMode
//                 style={{
//                   height: "100%",
//                   fontSize: "1.6rem",

//                   cursor: "pointer",
//                 }}
//               />
//             </IconButton>
//           )}
//           <IconButton onClick={onLogout}>
//             {/* <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{
//                 "&:hover": {
//                   cursor: "pointer",
//                 },
//                 marginLeft: "0.8rem",
//                 color: "#fff",
//               }}
//               onClick={onLogout}
//             > */}
//             {Constants.Logout}
//             {/* </Typography> */}
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Appbar;

// Appbar.propTypes = {
//   handleDrawerToggle: PropTypes.func,
//   drawerWidth: PropTypes.number,
// };

// Appbar.defaultProps = {
//   width: 240,
// };
