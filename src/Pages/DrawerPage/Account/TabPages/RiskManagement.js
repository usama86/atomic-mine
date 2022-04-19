import React from "react";
// import Switch from "./../../../../UI/Switch/Switch";
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
import Button from "../../../../UI/Button/Button";
import Constants from "../../../../Constants/Constants";
import {
  BlacklistOption,
  ChangeProvCash,
  RestrictTrading,
  Riskflag,
} from "./Modals/";
import Api from "../../../../Services/AccountApi";
// import { compareDesc } from "date-fns";
// import { CodeRounded } from "@mui/icons-material";

const RiskManagement = (ssn) => {
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = React.useState([false, false, false, false]);
  const [code, setCode] = React.useState("");

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [typographyVariant, setTypographyVariant] = React.useState("body");

  const [riskData, setRiskData] = React.useState([]);

  const fetchData = async () => {
    let getData = await Api.getRestrictions(ssn);
    let returnData = getData.data.data;
    let getVal = value.slice();
    returnData.map((data) => {
      if (data.code === "DNT") {
        getVal[0] = !getVal[0];
      }
      if (data.code === "LO") {
        getVal[1] = !getVal[1];
      }
      if (data.code === "DNWD") {
        getVal[2] = !getVal[2];
      }
      if (data.code === "DNW") {
        getVal[3] = !getVal[3];
      }
    });
    setRiskData(returnData);
    setValue(getVal);
  };

  React.useEffect(() => {
    fetchData();
  }, [ssn]);

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

  const setRiskManagment = async (e, codes, label) => {
    let getVal = value.slice();
    if (label === "Restrict Trading") {
      getVal[0] = !getVal[0];
      setCode("DNT");
      setValue(getVal);
    } else if (label === "Liq only") {
      getVal[1] = !getVal[1];
      setCode("LO");
      setValue(getVal);
    } else if (label === "Restrict Deposits") {
      getVal[2] = !getVal[2];
      setCode("DNWD");
      setValue(getVal);
    } else if (label === "Restrict WithDrawl") {
      getVal[3] = !getVal[3];
      setCode("DNW");
      setValue(getVal);
    } else {
      let setRestriction = "";
      codes === true
        ? (setRestriction = await Api.applyRestriction({
            account: ssn.ssn,
            code: code,
          }))
        : (setRestriction = await Api.liftRestriction({
            account: ssn.ssn,
            code: code,
          }));

      if (setRestriction.data.result.success) {
        enqueueSnackbar(setRestriction.data.result.msg, {
          variant: "success",
        });
      } else
        enqueueSnackbar(Constants.Save_Changes_Failed, {
          variant: "error",
        });
    }

    //Restrict Trading 0  Liq only 1  Restrict Deposits 2  Restrict WithDrawl 3
    //
    // const ApplyRestriction = await Api.applyRestriction({account:ssn,code:code});
    // const LiftRestriction = await Api.liftRestriction({account:ssn,code:code)};
  };

  const saveOption = async (tsla) => {
    const setRestriction = await Api.applyRestriction({
      account: ssn.ssn,
      code: "LT",
      stock: tsla,
    });

    if (setRestriction.data.result.success) {
      enqueueSnackbar(setRestriction.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };
  // const [SwitchState, setSwitchState] = React.useState({
  //   restrictTrading: false,
  //   liqOnly: false,
  //   restrictDeposits: false,
  //   restrictWithDrawl: false,
  //   changeProvCash: false,
  //   changeBuyingPower: false,
  //   blacklistOption: false,
  //   riskFlag: false,
  // });

  // const onChangeSwitch = (e, val) => {
  //   let switchCopy = { ...SwitchState };
  //   if (switchCopy[val] === true) switchCopy[val] = false;
  //   else switchCopy[val] = true;
  //   setSwitchState(switchCopy);
  // };
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
              label={"Restrict Trading"}
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
                  content={
                    <RestrictTrading
                      label={"Restrict Trading"}
                      triggerClose={closeModalHandler}
                      value={value[0]}
                      changeValueHandler={setRiskManagment}
                    />
                  }
                >
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
              <Modal
                closeDependancy={random}
                content={
                  <RestrictTrading
                    label={"Liq only"}
                    triggerClose={closeModalHandler}
                    value={value[1]}
                    changeValueHandler={setRiskManagment}
                  />
                }
              >
                <IconButton sx={{ mr: "2rem" }}>
                  <FcSettings />
                </IconButton>
              </Modal>
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
              <Modal
                closeDependancy={random}
                content={
                  <RestrictTrading
                    label={"Restrict Deposits"}
                    triggerClose={closeModalHandler}
                    value={value[2]}
                    changeValueHandler={setRiskManagment}
                  />
                }
              >
                <IconButton sx={{ mr: "2rem" }}>
                  <FcSettings />
                </IconButton>
              </Modal>
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
              <Modal
                closeDependancy={random}
                content={
                  <RestrictTrading
                    label={"Restrict WithDrawl"}
                    triggerClose={closeModalHandler}
                    value={value[3]}
                    changeValueHandler={setRiskManagment}
                  />
                }
              >
                <IconButton sx={{ mr: "2rem" }}>
                  <FcSettings />
                </IconButton>
              </Modal>
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
                <Modal
                  closeDependancy={random}
                  content={
                    <ChangeProvCash
                      label={"Change Prov Cash"}
                      triggerClose={closeModalHandler}
                    />
                  }
                >
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
              <Modal
                closeDependancy={random}
                content={
                  <ChangeProvCash
                    label={"Change Buying Power"}
                    triggerClose={closeModalHandler}
                  />
                }
              >
                <IconButton sx={{ mr: "2rem" }}>
                  <FcSettings />
                </IconButton>
              </Modal>
            </LabelChild>
          </Grid>
          <Grid sx={{ alignItems: "center" }} item container xs={12}>
            <LabelChild
              label={"Restrict Ticker"}
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
                  content={
                    <BlacklistOption
                      triggerClose={closeModalHandler}
                      saveOption={saveOption}
                      riskData={riskData}
                    />
                  }
                >
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
                <Modal
                  closeDependancy={random}
                  content={<Riskflag triggerClose={closeModalHandler} />}
                >
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
        <Stack sx={{ p: 2 }} alignItems="center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              enqueueSnackbar(Constants.Save_Changes_Success, {
                variant: "success",
              });
            }}
            sx={{ color: "white" }}
          >
            Save Changes
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};

export default RiskManagement;
