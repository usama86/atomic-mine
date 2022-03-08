import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/Table";
import Box from "./../../../../UI/Layout/Box";

const Docs = () => {
  return (
    <Stack spacing={2}>
      <Card>
        <Box sx={{ height: "20rem" }}>
          <Table columns={column} rows={row} />
        </Box>
      </Card>
    </Stack>
  );
};

export default Docs;

const column = [
  {
    field: "confirm",
    headerName: "Confirm",
    flex: 1,
  },
  {
    field: "monthlyStatements",
    headerName: "Monthly Statements",
    flex: 1,
  },
  {
    field: "tax",
    headerName: "Tax",
    flex: 1,
  },
  {
    field: "agreements",
    headerName: "Agreements",
    flex: 1,
  },
  {
    field: "disclosures",
    headerName: "Disclosures",
    flex: 1,
  },
];
const row = [
  {
    id: 0,
    confirm: "hello",
    monthlyStatements: "World",
    tax: "5$",
    agreements: "05-02-1990",
    disclosures: "05-02-1990",
  },
  {
    id: 1,
    confirm: "hello1",
    monthlyStatements: "World1",
    tax: "6$",
    agreements: "05-02-1991",
    disclosures: "05-02-1993",
  },
  {
    id: 2,
    confirm: "hello2",
    monthlyStatements: "World2",
    tax: "7$",
    agreements: "05-02-1992",
    disclosures: "05-02-1994",
  },
];
