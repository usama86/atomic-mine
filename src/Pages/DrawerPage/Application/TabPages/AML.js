import React from "react";
import PropTypes from "prop-types";
import Box from "./../../../../UI/Layout/Box";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import RiskApi from "../../../../Services/RiskMonitorApi";
import Stack from "../../../../UI/Layout/Stack";
import Modal from "../../../../UI/Modal/Modal";
import InfoApplication from "../../Account/TabPages/Modals/InfoApplication";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TableNoteField from "../../../../UI/Table/TableNoteField";
import IconButton from "@mui/material/IconButton";
import {
  ApplicationAccept,
  ApplicationReject,
} from "./../../Account/TabPages/Modals/";
import { IoMdOpen } from "react-icons/io";

function AML() {
  const column = [
    {
      field: "account",
      headerName: "Account #",
      flex: 0.4,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        return (
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
            alignItems="center"
          >
            {params.row.name}
            <Modal content={<InfoApplication {...params.row} />}>
              <IconButton>
                <IoMdOpen />
              </IconButton>
            </Modal>
          </Stack>
        );
      },
    },
    {
      field: "decision",
      headerName: "Accept/Reject",
      preventSearch: true,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <>
            <Modal
              closeDependancy={random}
              content={<ApplicationAccept triggerClose={acceptHandler} />}
            >
              <IconButton>
                <DoneIcon color="success" />
              </IconButton>
            </Modal>

            <Modal
              closeDependancy={random}
              content={<ApplicationReject triggerClose={acceptHandler} />}
            >
              <IconButton>
                <CloseIcon color="error" />
              </IconButton>
            </Modal>
          </>
        );
      },
    },
    {
      field: "notes",
      headerName: "Notes",
      preventSearch: true,
      flex: 0.8,
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TableNoteField
              label="Add note"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            />
          </div>
        );
      },
    },
  ];
  const acceptHandler = () => {
    setRandom(`${Math.random()}`);
  };
  const [random, setRandom] = React.useState("");
  const [AML, setAML] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    let getAML = await RiskApi.getAML();
    setAML(getAML.data.data);
  };

  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        {/* <Button sx={{ color: "#fff" }}>NEW</Button> */}
        <Table columns={column} rows={AML} rowID="account" />
      </Box>
    </>
  );
}

AML.propTypes = {
  type: PropTypes.string,
  column: PropTypes.array,
  row: PropTypes.array,
};
AML.defaultProps = {
  type: "Default Type",
  column: [],
  row: [],
};

export default AML;
