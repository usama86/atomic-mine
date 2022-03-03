import React from "react";
import Switch from "./../../../../UI/Switch/Switch";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Grid from "./../../../../UI/Layout/Grid";
import LabelChild from "./../../../../UI/LabelChild";
import { LabelChildStyled } from "./TabPages.styles";

const RiskManagement = () => {
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
          <Grid item container xs={12}>
            <LabelChild
              label={"Restrict Trading"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.restrictTrading}
                onChanged={(e) => onChangeSwitch(e, "restrictTrading")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Liq only"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.liqOnly}
                onChanged={(e) => onChangeSwitch(e, "liqOnly")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Restrict Deposits"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.restrictDeposits}
                onChanged={(e) => onChangeSwitch(e, "restrictDeposits")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Restrict WithDrawl"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.restrictWithDrawl}
                onChanged={(e) => onChangeSwitch(e, "restrictWithDrawl")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Change Prov Cash"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.changeProvCash}
                onChanged={(e) => onChangeSwitch(e, "changeProvCash")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Change Buying Power"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.changeBuyingPower}
                onChanged={(e) => onChangeSwitch(e, "changeBuyingPower")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Blacklist Option"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.blacklistOption}
                onChanged={(e) => onChangeSwitch(e, "blacklistOption")}
              />
            </LabelChild>
          </Grid>
          <Grid item container xs={12}>
            <LabelChild
              label={"Risk Flag"}
              labelXsSize={10}
              childrenXsSize={2}
              sxChild={LabelChildStyled}
            >
              <Switch
                value={SwitchState.riskFlag}
                onChanged={(e) => onChangeSwitch(e, "riskFlag")}
              />
            </LabelChild>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default RiskManagement;
