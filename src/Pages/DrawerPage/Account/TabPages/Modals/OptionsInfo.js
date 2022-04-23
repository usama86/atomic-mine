import React from "react";
import Stack from "../../../../../UI/Layout/Stack";
import { styled } from "@mui/material/styles";
import Typography from "../../../../../UI/Typography/Typography";

const StyledOrdered = styled("ol")({
  margin: "0.6rem 0",
  overflow: "auto",
});

const StyledList = styled("li")({
  marginTop: "0.5rem",
});

const OptionsInfo = (props) => {
  return (
    <Stack sx={{ maxHeight: "60vh" }} spacing={2}>
      <Stack>
        <strong>SSN</strong>
        <span style={{ paddingLeft: "3px" }}>{props.ssn}</span>
      </Stack>
      <Stack>
        <strong>Username</strong>
        <span style={{ paddingLeft: "3px" }}>{props.username}</span>
      </Stack>
      <Stack>
        <strong>Email</strong>
        <span style={{ paddingLeft: "3px" }}>{props.email}</span>
      </Stack>
      <Stack>
        <strong>Phone</strong>
        <span style={{ paddingLeft: "3px" }}>{props.phone}</span>
      </Stack>
      <Stack>
        <strong>Password</strong>
        <span style={{ paddingLeft: "3px" }}>{props.password}</span>
      </Stack>
      <Stack>
        <strong>Is Suspended</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.is_suspended === true ? "True" : "False"}
        </span>
      </Stack>
      <Stack>
        <strong>Created on</strong>
        <span style={{ paddingLeft: "3px" }}>{props.created_on}</span>
      </Stack>

      <strong>Tags</strong>
      {props?.tags?.map((d) => {
        return <span style={{ paddingLeft: "3px" }}>{d}</span>;
      })}

      <strong>Restrictions</strong>
      {props?.restrictions?.map((d) => {
        return <span style={{ paddingLeft: "3px" }}>{d}</span>;
      })}

      <Stack>
        <strong>Risk Tolerance on</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.risk_tolerance}
        </span>
      </Stack>
      <Stack>
        <strong>Inv Objective</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.inv_objective}
        </span>
      </Stack>
      <Stack>
        <strong>Inv Experience</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.inv_experience}
        </span>
      </Stack>
      <Stack>
        <strong>Inv Timeframe</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.inv_timeframe}
        </span>
      </Stack>
      <Stack>
        <strong>Annual income</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.annual_income}
        </span>
      </Stack>
      <Stack>
        <strong>Total net_worth</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.total_net_worth}
        </span>
      </Stack>
      <Stack>
        <strong>Net worth liq</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.investment_info?.net_worth_liq}
        </span>
      </Stack>

      <Stack>
        <strong>L1 approved</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.options_approval_info?.L1_approved === true ? "True" : "False"}
        </span>
      </Stack>
      <Stack>
        <strong>L2 approved</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.options_approval_info?.L2_approved === true ? "True" : "False"}
        </span>
      </Stack>
      <Stack>
        <strong>Opt risk tol</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.options_approval_info?.opt_risk_tol}
        </span>
      </Stack>
      <Stack>
        <strong>Opt inv obj</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.options_approval_info?.opt_inv_obj}
        </span>
      </Stack>
      <Stack>
        <strong>Opt inv exp</strong>
        <span style={{ paddingLeft: "3px" }}>
          {props.options_approval_info?.opt_inv_exp}
        </span>
      </Stack>
    </Stack>
  );
};

export default OptionsInfo;
