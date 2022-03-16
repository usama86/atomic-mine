import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/Table";
import Box from "./../../../../UI/Layout/Box";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import OptionsInfo from "./Modals/OptionsInfo";

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
    flex: 0.1,
  },
  {
    field: "approved",
    headerName: "Approved",
    flex: 0.5,
    type: "boolean",
  },
  {
    field: "info",
    headerName: "Info",
    flex: 0.3,
    preventSearch: true,
    renderCell: (params) => {
      return (
        <Modal content={<OptionsInfo {...params.row} />}>
          <Button>Info</Button>
        </Modal>
      );
    },
  },
];
const row = [
  {
    id: 0,
    dateTime: "05-02-1991",
    level: "1",
    approved: true,
    queries: [
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
    ],
  },
  {
    id: 1,
    dateTime: "hello1",
    level: "1",
    approved: true,
    queries: [
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
    ],
  },
  {
    id: 2,
    dateTime: "05-02-1992",
    level: "2",
    approved: false,
    queries: [
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
      {
        question: "this is a question",
        answer: "this is an answer",
      },
    ],
  },
];
