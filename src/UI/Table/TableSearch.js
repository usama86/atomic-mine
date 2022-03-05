import PropTypes from "prop-types";
import * as React from "react";
import { Paper, InputBase, Divider, Stack } from "@mui/material";

import UnstyledSelect from "../Select/SelectCompUnstyled";
import data from "../../Constants/mock_data.json";

const default_categories = [
  { accessor: "accountNumber", label: "Acc. #" },
  { accessor: "name", label: "Name" },
  { accessor: "email", label: "Email" },
  { accessor: "social", label: "Social" },
  { accessor: "contact", label: "Contact" },
];

export default function CustomizedInputBase({
  value,
  setValue,
  categories,
  getCategory,
}) {
  const selectCategoryHandler = (e) => {
    const cat = categories.find((category) => category.accessor === e);
    getCategory(cat);
  };
  return (
    <Stack sx={{ position: "relative", p: "0.4rem" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          value={value}
          onChange={setValue}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
        />
        <Divider
          sx={{ height: "28px !important", m: 0.5 }}
          orientation="vertical"
        />
        <UnstyledSelect
          sx={{ width: "7rem" }}
          changeCurrCategory={selectCategoryHandler}
          categories={categories}
        />
      </Paper>
    </Stack>
  );
}

CustomizedInputBase.propTypes = {
  categories: PropTypes.array,
  getSearchedValue: PropTypes.func,
  searchOptions: PropTypes.any,
};
CustomizedInputBase.defaultProps = {
  searchOptions: data,
  getSearchedValue: (e) => console.log(e, "no prop given"),
  categories: default_categories,
};
