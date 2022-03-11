import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center",
  },
}));

export default function BasicPagination({ count, ...otherProps }) {
  return (
    <Stack spacing={2}>
      <StyledPagination {...otherProps} count={count} color="primary" />
    </Stack>
  );
}

BasicPagination.defaultProps = {
  count: 9,
};
