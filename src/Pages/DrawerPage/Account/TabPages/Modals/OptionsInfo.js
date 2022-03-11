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

const OptionsInfo = ({ dateTime, level, queries }) => {
  return (
    <Stack sx={{ maxHeight: "60vh" }}>
      <Typography variant="h6">{dateTime}</Typography>
      <StyledOrdered>
        {queries.map((query, index) => (
          <StyledList style={{}} key={index}>
            <Stack>
              <strong>{query.question}</strong>
              <span>{query.answer}</span>
            </Stack>
          </StyledList>
        ))}
      </StyledOrdered>
      {/* <Button sx={{ alignSelf: "center", color: "white" }}>Save</Button> */}
    </Stack>
  );
};

export default OptionsInfo;
