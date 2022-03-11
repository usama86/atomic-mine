import React from "react";
import Grid from "./../Layout/Grid";
import LabelChild from "./../LabelChild";
import { AiOutlineCloudDownload } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Pagination from "./../Pagination/Pagination";

const FlexStackWithPagination = ({ docs }) => {
  const perPage = 7;
  const maxPages = ~~(docs.length / perPage) + 1;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const LabelChildStyled = {
    display: "flex",
    justifyContent: "end",
  };
  return (
    <Grid sx={{ padding: "1rem" }} spacing={4} container>
      <Grid
        sx={{
          alignItems: "center",
          height: "20rem",
          overflow: "hidden",
        }}
        item
        container
        xs={12}
      >
        {docs
          .slice(perPage * page - perPage, perPage * page)
          .map((doc, index) => (
            <Grid key={index} item xs={12} container>
              <LabelChild
                label={doc}
                labelXsSize={10}
                childrenXsSize={2}
                sxChild={LabelChildStyled}
                key={index}
              >
                <IconButton>
                  <AiOutlineCloudDownload />
                </IconButton>
              </LabelChild>
            </Grid>
          ))}
      </Grid>
      {docs.length > 7 && (
        <Grid item xs={12}>
          <Pagination count={maxPages} page={page} onChange={handleChange} />
        </Grid>
      )}
    </Grid>
  );
};

export default FlexStackWithPagination;

FlexStackWithPagination.defaultProps = {
  docs: [],
};
