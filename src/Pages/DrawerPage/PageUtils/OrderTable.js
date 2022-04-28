import PropTypes from "prop-types";
import Box from "../../../UI/Layout/Box";
import Table from "../../../UI/Table/TableWithGlobalFiltering";
// import Button from "../../../UI/Button/Button";

function Orders({ type, column, row, rowID }) {
  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        {/* <Button sx={{ color: "#fff" }}>NEW</Button> */}
        <Table columns={column} rows={row} rowID={rowID} />
      </Box>
    </>
  );
}

Orders.propTypes = {
  type: PropTypes.string,
  column: PropTypes.array,
  row: PropTypes.array,
  rowID: PropTypes.string,
};
Orders.defaultProps = {
  type: "Default Type",
  column: [],
  row: [],
  rowID: "id",
};

export default Orders;
