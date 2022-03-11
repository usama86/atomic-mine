import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/Table";
import Box from "./../../../../UI/Layout/Box";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";

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
    field: "approved",
    headerName: "Approved",
    flex: 1,
    type: "boolean",
  },
  {
    field: "info",
    headerName: "Info",
    flex: 0.3,
    renderCell: (params) => {
      return (
        <Modal
          content={
            <div>
              {params.row.id}
              <br />
              {params.row.dateTime}
              <br />
              {params.row.level}
            </div>
          }
        >
          <Button>Info</Button>
        </Modal>
      );
    },
  },
];
const row = [
  {
    id: 0,
    dateTime: "hello",
    level: "World",
    approved: true,
    info: "05-02-1990",
  },
  {
    id: 1,
    dateTime: "hello1",
    level: "World1",
    approved: true,
    info: "05-02-1991",
  },
  {
    id: 2,
    dateTime: "hello2",
    level: "World2",
    approved: false,
    info: "05-02-1992",
  },
];
