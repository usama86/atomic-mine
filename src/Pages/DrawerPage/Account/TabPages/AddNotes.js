import React from "react";
import Grid from "./../../../../UI/Layout/Grid";
import TextField from "./../../../../UI/TextField/TextFieldComp";
import Stack from "../../../../UI/Layout/Stack";
import List from "./../../../../UI/List/List";
import UploadButton from "./../../../../UI/UploadButton/UploadButton";
import Api from "../../../../Services/AccountApi";
import Button from "../../../../UI/Button/Button";
import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";
const AddNotes = ({ ssn }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [notes, setNotes] = React.useState("");
  const [allNotes, setAllNotes] = React.useState([]);
  const fetchNotes = async () => {
    let getNotes = await Api.getNotes(ssn);
    setAllNotes(getNotes.data.result);
  };
  React.useEffect(() => {
    fetchNotes();
  }, [ssn]);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          label="Notes"
          fullWidth
          size="small"
          variant="outlined"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row">
          <Stack sx={{ flexGrow: 1 }}>
            <List data={allNotes} />
          </Stack>
          <Stack
            justifyContent="flex-end"
            direction="row"
            gap="1rem"
            sx={{ height: "max-content" }}
          >
            <UploadButton
              sx={{ color: "white" }}
              size="small"
              labelStyle={{ alignSelf: "flex-end", margin: 0 }}
            />
            <Button
              onClick={async (e) => {
                e.preventDefault();
                if (notes === "") {
                  enqueueSnackbar("Please type something in notes", {
                    variant: "error",
                  });
                  return;
                }
                let postNotes = await Api.addNote({
                  account: ssn.ssn,
                  body: notes,
                });
                if (postNotes.data.result.success) {
                  setNotes("");
                  enqueueSnackbar(postNotes.data.result.msg, {
                    variant: "success",
                  });
                  fetchNotes();
                } else
                  enqueueSnackbar(Constants.Save_Changes_Failed, {
                    variant: "error",
                  });
              }}
              sx={{ color: "white", alignSelf: "flex-end", margin: 0 }}
              size="small"
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </React.Fragment>
  );
};

export default AddNotes;
