import React from "react";
import Stack from "../../../UI/Layout/Stack";
import Table from "../../../UI/Table/SearchableTable";
import Typography from "../../../UI/Typography/Typography";
// import data from "../../../Constants/mock_data.json";

const SearchUser = ({ getRow, data }) => {
  const getFullName = (params) => {
    return `${params.row.kyc_info.first_name || ""} ${
      params.row.kyc_info.last_name || ""
    }`;
  };

  const getAccount = (params) => {
    return `${params.row.kyc_info.ssn}`;
  };

  const fields = [
    {
      flex: 1,
      field: "account",
      headerName: "Account #",
      valueGetter: getAccount,
    },
    { flex: 1, field: "name", headerName: "Name", valueGetter: getFullName },
    { flex: 1, field: "email", headerName: "Email" },
    { flex: 1, field: "ssn", headerName: "Social" },
    { flex: 1, field: "phone", headerName: "Contact" },
  ];

  // const data = [
  //   {
  //     999999999: {
  //       first_name: "AVPT",
  //       last_name: "AVPT",
  //       ssn: "999999999",
  //       username: "AVPT",
  //       email: "avpt@atomicvaults.com",
  //       KYC_status: "P",
  //       is_suspended: false,
  //       created_on: "2022-03-16T06:27:22.547068+00:00",
  //     },
  //     123456789: {
  //       first_name: "ming",
  //       last_name: "zhao",
  //       ssn: "123456789",
  //       username: "test",
  //       email: "test@atomicvaults.com",
  //       KYC_status: "P",
  //       is_suspended: false,
  //       created_on: "2022-03-17T17:24:49.334151+00:00",
  //     },
  //   },
  // ];
  return (
    <Stack sx={{ p: 2, width: "100%" }} gap={2}>
      <Typography variant="h5">Select User</Typography>
      <Table
        selectRowHandler={(e) => getRow(e)}
        rows={data}
        columns={fields}
        rowID
      />
    </Stack>
  );
};

export default SearchUser;
