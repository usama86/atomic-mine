import React from "react";
import Stack from "../../../../../UI/Layout/Stack";
// import Search from "./../../../../../UI/AutoComplete/Autocomplete";
// import Checkbox from "./../../../../../UI/Checkbox/Checkbox";
import TextFieldComp from "../../../../../UI/TextField/TextFieldComp";
import Button from "../../../../../UI/Button/Button";
import List from "../../../../../UI/List/List";

const BlacklistOption = ({ triggerClose, ssn, postNotesReq, ...props }) => {
  const [value, setValue] = React.useState("");
  const [notes, setNotes] = React.useState("");
  return (
    <Stack gap={2}>
      <TextFieldComp
        fullWidth
        isdefault={true}
        label="TSLA"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // console.log(e.target.value);
          console.log(value);
        }}
      />
      {/* <Checkbox Label="No Trade" /> */}
      {/* <Checkbox Label="Liq Only" /> */}
      <TextFieldComp
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        fullWidth
        isdefault={true}
        label="Notes"
      />
      <List data={props.riskData} />
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.saveOption(value);
            if (notes !== "") {
              postNotesReq(ssn, notes);
              setNotes("");
            }
            triggerClose();
          }}
          sx={{ color: "white" }}
          isdefault={true}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default BlacklistOption;
