import React from "react";
import { useNavigate } from "react-router-dom";
// custom mui components
import Box from "../../UI/Layout/Box";
import Stack from "../../UI/Layout/Stack";
// mui helpers
import { useTheme } from "@mui/material";
// helpers
import logo from "../../Images/Logo_2.png";
import Constants from "../../Constants/Constants";
// styles
import {
  Background,
  CardStyled,
  CardContent,
  Heading,
  StyledButton,
  RightContainer,
} from "./Login.style";

import TextField from "../../UI/Input/TextFieldComp";

const Login = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    username: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
  });
  let navigate = useNavigate();
  const submitLoginHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("signIn", true);
    navigate("/account");
  };
  const changeValueHandler = (e, field) => {
    let temp = { ...formData };
    temp[field] = {
      value: e.target.value,
      touched: true,
    };
    setFormData(temp);
  };
  const formEntries = [
    {
      name: "username",
      props: {
        label: "User Name",
        fullWidth: true,
      },
    },
    {
      name: "password",
      props: {
        label: "Password",
        fullWidth: true,
        type: "password",
      },
    },
  ];
  return (
    <Background>
      <CardStyled>
        <Stack direction="row" sx={{ height: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={submitLoginHandler}>
              <CardContent spacing={2}>
                <Heading variant="h4" color={theme.palette.text.primary}>
                  {Constants.Log_in}
                </Heading>
                {formEntries.map((entry, index) => (
                  <TextField
                    onChange={(e) => changeValueHandler(e, entry.name)}
                    key={index}
                    name={entry.name}
                    {...entry.props}
                    value={formData[entry.name].value ?? ""}
                    error={
                      formData[entry.name].touched &&
                      formData[entry.name].value === ""
                    }
                  />
                ))}
                <StyledButton
                  styleOverrides={Constants.loginButtonStyleOverrides}
                  type="submit"
                >
                  {Constants.Login_Btn}
                </StyledButton>
              </CardContent>
            </form>
          </Box>
          <RightContainer>
            <img
              src={logo}
              style={{ maxWidth: " 100%", height: "auto" }}
              alt="logo"
            />
          </RightContainer>
        </Stack>
      </CardStyled>
    </Background>
  );
};

export default Login;
