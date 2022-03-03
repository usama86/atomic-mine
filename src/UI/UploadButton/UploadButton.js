import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons({ labelStyle, ...btnProps }) {
  return (
    <label htmlFor="contained-button-file" style={labelStyle}>
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
      <Button {...btnProps} width="7rem" variant="contained" component="span">
        Upload
      </Button>
    </label>
  );
}
