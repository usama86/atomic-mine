import React from "react";
import Box from "../../../../../UI/Layout/Box";

import CardPagination from "../../../../../UI/CardPagination/CardPagination";

const Confirm = ({ docs }) => {
  return (
    <Box>
      <CardPagination docs={docs} />
    </Box>
  );
};

export default Confirm;
