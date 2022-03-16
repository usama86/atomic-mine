import PropTypes from "prop-types";
import Box from "../../../UI/Layout/Box";
import Table from "../../../UI/Table/SearchableTable";

function Orders({ type, column, row }) {
  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        <Table columns={column} rows={row} />
      </Box>
    </>
  );
}

Orders.propTypes = {
  type: PropTypes.string,
  column: PropTypes.array,
  row: PropTypes.array,
};
Orders.defaultProps = {
  type: "Default Type",
  column: [],
  row: [],
};

export default Orders;
