import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlerts({
  title,
  message,
  strong,
  severity,
  actionHandler,
  ...otherProps
}) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert {...otherProps} severity={severity}>
        {title.length > 0 && <AlertTitle>{title}</AlertTitle>}
        {message}{" "}
        {strong.length > 0 && (
          <span>
            {" "}
            —{" "}
            <strong
              style={{ cursor: "pointer" }}
              onClick={(e) => actionHandler(e)}
            >
              {strong}!
            </strong>
          </span>
        )}
      </Alert>
    </Stack>
  );
}

DescriptionAlerts.defaultProps = {
  title: "",
  severity: "info",
  strong: "",
  message: "",
  actionHandler: (e) => console.log("no props given", e),
};
