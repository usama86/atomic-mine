import React from "react";
import TextField from "./../../../../UI/TextField/TextFieldComp";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Grid from "./../../../../UI/Layout/Grid";
import LabelChild from "./../../../../UI/LabelChild";
import { LabelChildStyled } from "./TabPages.styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import Api from "../../../../Services/AccountApi";
import DatePicker from "../../../../UI/Date/DatePickerComp";

const PersonalInfo = (ssn) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [typographyVariant, setTypographyVariant] = React.useState("body");
  React.useEffect(() => {
    if (mediumScreen) {
      setTypographyVariant("body2");
    }
    if (smallScreen) {
      setTypographyVariant("body");
    }
    if (largeScreen) {
      setTypographyVariant("body");
    }
  }, [mediumScreen, smallScreen, largeScreen]);

  const [personalInfo, setPersonalInfo] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getAccount = await Api.getAccount(ssn);
    setPersonalInfo(getAccount.data.data[0]);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Card>
        <Grid sx={{ padding: "1rem" }} spacing={4} container>
          <Grid
            sx={{
              alignItems: "center",
            }}
            item
            container
            xs={12}
          >
            <LabelChild
              label={"Name"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <TextField
                label=""
                isdefault
                disabled
                value={
                  personalInfo?.kyc_info?.first_name +
                  " " +
                  personalInfo?.kyc_info?.last_name
                }
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"SSN"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <TextField
                label=""
                isdefault
                disabled
                value={personalInfo?.ssn}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Date of Birth"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <DatePicker
                label="Date of Birth"
                value={personalInfo?.kyc_info?.dob}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Introducing Brokers"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"Plaid"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Driving License"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">{"Driving License"}</Stack>
            </LabelChild>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default PersonalInfo;
