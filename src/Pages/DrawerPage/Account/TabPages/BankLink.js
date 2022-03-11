import React from "react";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Grid from "./../../../../UI/Layout/Grid";
import LabelChild from "./../../../../UI/LabelChild";
import { LabelChildStyled } from "./TabPages.styles";
import { FcSettings } from "react-icons/fc";
import IconButton from "@mui/material/IconButton";
import Modal from "../../../../UI/Modal/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";
import { StatusModel, UnlinkModel } from "./Modals";
const BankLink = () => {
  const { enqueueSnackbar } = useSnackbar();
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

  const [random, setRandom] = React.useState("");
  const closeModalHandler = (e) => {
    setRandom(`${Math.random()}`);
    enqueueSnackbar(Constants.Close_Modal_Success, { variant: "success" });
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
              label={"Bank Name"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"Chase"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"ABA #"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"12345"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Account #"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"12345"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Plaid / Micro"}
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
              label={"Status"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal
                  closeDependancy={random}
                  content={<StatusModel triggerClose={closeModalHandler} />}
                >
                  <IconButton>
                    <FcSettings />
                  </IconButton>
                </Modal>
                {/* <Switch
                  value={SwitchState.changeProvCash}
                  onChanged={(e) => onChangeSwitch(e, "changeProvCash")}
                /> */}
              </Stack>
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Info"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"N/A"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"GIACT"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              {"PASS"}
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Unlink"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal
                  closeDependancy={random}
                  content={<UnlinkModel triggerClose={closeModalHandler} />}
                >
                  <IconButton>
                    <FcSettings />
                  </IconButton>
                </Modal>
                {/* <Switch
                  value={SwitchState.riskFlag}
                  onChanged={(e) => onChangeSwitch(e, "riskFlag")}
                /> */}
              </Stack>
            </LabelChild>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default BankLink;
