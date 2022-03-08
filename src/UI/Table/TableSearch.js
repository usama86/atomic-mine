import PropTypes from "prop-types";
import * as React from "react";
import { Paper, InputBase, Divider } from "@mui/material";
import Stack from "../Layout/Stack";
import UnstyledSelect from "../Select/SelectCompUnstyled";
import data from "../../Constants/mock_data.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import SmallSelect from "./SmallSelect";

const default_categories = [
  { accessor: "accountNumber", label: "Acc. #" },
  { accessor: "name", label: "Name" },
  { accessor: "email", label: "Email" },
  { accessor: "social", label: "Social" },
  { accessor: "contact", label: "Contact" },
];

const SmallScreenSearch = ({
  categories,
  value,
  setValue,
  selectCategoryHandler,
}) => {
  return (
    <>
      <InputBase
        value={value}
        onChange={setValue}
        sx={{ ml: 1, flex: 1, p: 1 }}
        placeholder="Search..."
      />
      <Divider
        sx={{ m: 0.5, height: "28px !important" }}
        orientation="vertical"
      />
      <SmallSelect getSelected={selectCategoryHandler} fields={categories} />
    </>
  );
};

const MediumScreenSearch = ({
  categories,
  value,
  setValue,
  selectCategoryHandler,
}) => {
  return (
    <>
      <InputBase
        value={value}
        onChange={setValue}
        sx={{ ml: 1, flex: 1, p: 1 }}
        placeholder="Search..."
      />
      <Divider
        sx={{ m: 0.5, height: "28px !important" }}
        orientation="vertical"
      />
      <UnstyledSelect
        sx={{ width: "7rem" }}
        changeCurrCategory={selectCategoryHandler}
        categories={categories}
      />
    </>
  );
};

const NormalSearch = ({
  categories,
  value,
  setValue,
  selectCategoryHandler,
}) => (
  <>
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
  </>
);

export default function CustomizedInputBase({
  value,
  setValue,
  categories,
  getCategory,
}) {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const selectCategoryHandler = (e) => {
    const cat = categories.find((category) => category.accessor === e);
    getCategory(cat);
  };
  const props = { value, setValue, categories };
  return (
    <Stack sx={{ position: "relative", p: "0.4rem" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: medium ? "100%" : "60%",
        }}
      >
        {medium ? (
          small ? (
            <SmallScreenSearch
              {...props}
              selectCategoryHandler={selectCategoryHandler}
            />
          ) : (
            <MediumScreenSearch
              {...props}
              selectCategoryHandler={selectCategoryHandler}
            />
          )
        ) : (
          <NormalSearch
            {...props}
            selectCategoryHandler={selectCategoryHandler}
          />
        )}
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
