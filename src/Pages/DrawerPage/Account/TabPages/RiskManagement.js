import React from "react";
import Switch from "./../../../../UI/Switch/Switch";
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

import {
  BlacklistOption,
  ChangeProvCash,
  RestrictTrading,
  Riskflag,
} from "./RiskManagementModals/";
const RiskManagement = () => {
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
  const [SwitchState, setSwitchState] = React.useState({
    restrictTrading: false,
    liqOnly: false,
    restrictDeposits: false,
    restrictWithDrawl: false,
    changeProvCash: false,
    changeBuyingPower: false,
    blacklistOption: false,
    riskFlag: false,
  });

  const onChangeSwitch = (e, val) => {
    let switchCopy = { ...SwitchState };
    if (switchCopy[val] === true) switchCopy[val] = false;
    else switchCopy[val] = true;
    setSwitchState(switchCopy);
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
              label={"Restrict Trading"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal content={<RestrictTrading />}>
                  <IconButton sx={{ mr: "2rem" }}>
                    <FcSettings />
                  </IconButton>
                </Modal>
                {/* <Switch
                  value={SwitchState.restrictTrading}
                  onChanged={(e) => onChangeSwitch(e, "restrictTrading")}
                /> */}
              </Stack>
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Liq only"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Switch
                value={SwitchState.liqOnly}
                onChanged={(e) => onChangeSwitch(e, "liqOnly")}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Restrict Deposits"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Switch
                value={SwitchState.restrictDeposits}
                onChanged={(e) => onChangeSwitch(e, "restrictDeposits")}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Restrict WithDrawl"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Switch
                value={SwitchState.restrictWithDrawl}
                onChanged={(e) => onChangeSwitch(e, "restrictWithDrawl")}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Change Prov Cash"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal content={<ChangeProvCash />}>
                  <IconButton sx={{ mr: "2rem" }}>
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
              label={"Change Buying Power"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Switch
                value={SwitchState.changeBuyingPower}
                onChanged={(e) => onChangeSwitch(e, "changeBuyingPower")}
              />
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Blacklist Option"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal content={<BlacklistOption />}>
                  <IconButton sx={{ mr: "2rem" }}>
                    <FcSettings />
                  </IconButton>
                </Modal>
                {/* <Switch
                  value={SwitchState.blacklistOption}
                  onChanged={(e) => onChangeSwitch(e, "blacklistOption")}
                /> */}
              </Stack>
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Risk Flag"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
              typographyProps={{
                variant: typographyVariant,
              }}
            >
              <Stack direction="row">
                <Modal content={<Riskflag />}>
                  <IconButton sx={{ mr: "2rem" }}>
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

export default RiskManagement;
