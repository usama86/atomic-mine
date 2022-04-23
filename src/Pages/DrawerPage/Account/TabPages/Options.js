import React from "react";
import Card from "./../../../../UI/Card/Card";
import Stack from "./../../../../UI/Layout/Stack";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import Box from "./../../../../UI/Layout/Box";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import OptionsInfo from "./Modals/OptionsInfo";
import Api from "../../../../Services/AccountApi";
import { getTime } from "../../../../helpers/utils";

const Options = (ssn) => {
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getOptions = await Api.getOptionsApprovalInfo(ssn);
    setOptions(getOptions.data.data);
  };

  const getLevel = (params) => {
    if (
      params.row.options_approval_info.L1_approved === true &&
      params.row.options_approval_info.L2_approved === true
    )
      return "2";
    else if (
      params.row.options_approval_info.L1_approved === true &&
      params.row.options_approval_info.L2_approved === false
    )
      return "1";
    else return "";
  };

  const getApproval = (params) => {
    if (
      params.row.options_approval_info.L1_approved === true &&
      params.row.options_approval_info.L2_approved === true
    )
      return true;
    else return false;
  };
  const column = [
    {
      field: "created_on",
      headerName: "Date/Time",
      flex: 1,
      type: "dateTime",
      valueGetter: getTime,
    },
    {
      field: "level",
      headerName: "Level",
      flex: 0.1,
      valueGetter: getLevel,
    },
    {
      field: "approved",
      headerName: "Approved",
      flex: 0.5,
      type: "boolean",
      valueGetter: getApproval,
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

  return (
    <Stack spacing={2}>
      <Card>
        <Box sx={{ height: "20rem" }}>
          <Table rowID={"ssn"} columns={column} rows={options} />
        </Box>
      </Card>
    </Stack>
  );
};

export default Options;

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
