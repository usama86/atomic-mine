import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/Table";
import Box from "./../../../../UI/Layout/Box";

const Options = () => {
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

export default Options;

const column = [
  {
    field: "dateTime",
    headerName: "Date/Time",
    flex: 1,
  },
  {
    field: "level",
    headerName: "Level",
    flex: 1,
  },
  {
    field: "approval",
    headerName: "Approval",
    flex: 1,
  },
  {
    field: "info",
    headerName: "Info",
    flex: 1,
  },
];
const row = [
  {
    id: 0,
    dateTime: "hello",
    level: "World",
    approval: "5$",
    info: "05-02-1990",
  },
  {
    id: 1,
    dateTime: "hello1",
    level: "World1",
    approval: "6$",
    info: "05-02-1991",
  },
  {
    id: 2,
    dateTime: "hello2",
    level: "World2",
    approval: "7$",
    info: "05-02-1992",
  },
];
