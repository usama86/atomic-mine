import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Stack from "../Layout/Stack";
import Card from "./../Card/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import UnstyledSelect from "./../Select/SelectCompUnstyled";
import data from "../../Constants/mock_data.json";

const categories = [
  { accessor: "accountNumber", label: "Acc. #" },
  { accessor: "name", label: "Name" },
  { accessor: "email", label: "Email" },
  { accessor: "social", label: "Social" },
  { accessor: "contact", label: "Contact" },
];

export default function CustomizedInputBase({
  searchOptions,
  getSearchedValue,
}) {
  const [category, setCategory] = React.useState({
    accessor: "name",
    label: "Name",
  });
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [displaySuggestions, setDisplaySuggestions] = React.useState(false);

  React.useEffect(() => {
    setOptions(searchOptions);
  }, [searchOptions]);

  React.useEffect(() => {
    let temp = [...searchOptions].filter((option, index) => {
      return option[category.accessor]
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase().trim());
    });
    setOptions(temp);
  }, [value, category, searchOptions]);

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const clickSuggestionHandler = (e, index, component) => {
    e.preventDefault();
    getSearchedValue(component);
    setValue(component[category.accessor]);
    setDisplaySuggestions(false);
  };
  const blurHandler = (e) => {
    const clicked = e.relatedTarget?.getAttribute("id");
    if (clicked && clicked.includes("suggestion")) {
      return;
    }
    setDisplaySuggestions(false);
  };
  const selectCategoryHandler = (e) => {
    const cat = categories.find((category) => category.accessor === e);
    setValue("");
    setCategory(cat);
  };
  return (
    <Stack sx={{ position: "relative" }}>
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
          onClick={(e) => setDisplaySuggestions(true)}
          onBlur={blurHandler}
          value={value}
          onChange={changeValueHandler}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
        />
        <Divider
          sx={{ height: "28px !important", m: 0.5 }}
          orientation="vertical"
        />
        <UnstyledSelect
          sx={{ width: "5rem" }}
          changeCurrCategory={selectCategoryHandler}
          categories={categories}
        />
      </Paper>
      {displaySuggestions && (
        <Card
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "absolute",
            top: "61px",
            width: "300px",
            zIndex: 100000,
          }}
        >
          <nav aria-label="main mailbox folders">
            <List dense={true}>
              {options.length > 0 &&
                options.slice(0, 5).map((option, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemButton
                        id={`suggestion-${index}`}
                        onClick={(e) =>
                          clickSuggestionHandler(e, index, option)
                        }
                      >
                        {option[category.accessor]}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List>
          </nav>
        </Card>
      )}
    </Stack>
  );
}
CustomizedInputBase.defaultProps = {
  searchOptions: data,
  getSearchedValue: (e) => console.log(e, "no prop given"),
};
