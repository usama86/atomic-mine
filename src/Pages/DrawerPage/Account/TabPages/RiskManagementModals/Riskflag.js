import React from "react";
import Radio from "../../../../../UI/Radio/RadioComp";
import Typography from "../../../../../UI/Typography/Typography";
import Stack from "../../../../../UI/Layout/Stack";
import Button from "../../../../../UI/Button/Button";
import TextField from "../../../../../UI/TextField/TextFieldComp";

const Riskflag = ({ triggerClose }) => {
  const [risk, setRisk] = React.useState("");
  const options = [
    {
      label: "High Risk",
      value: "high-risk",
    },
    {
      label: "Low Risk",
      value: "low-risk",
    },
  ];
  return (
    <Stack gap={2}>
      <Typography variant="h6">Risk Flag</Typography>
      <Radio
        value={risk}
        setValue={(e) => setRisk(e)}
        options={options}
        label=""
      />
      <TextField isdefault label="Notes" fullWidth />
      <Stack alignItems="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            triggerClose();
          }}
          isdefault={true}
          sx={{ color: "white" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Riskflag;
