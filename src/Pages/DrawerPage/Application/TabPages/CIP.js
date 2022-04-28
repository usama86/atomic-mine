import React from "react";
import Table from "./../../../../UI/Table/TableWithGlobalFiltering";
import Stack from "./../../../../UI/Layout/Stack";
import Box from "./../../../../UI/Layout/Box";
import Modal from "./../../../../UI/Modal/Modal";
import InfoApplication from "../../Account/TabPages/Modals/InfoApplication";
import IconButton from "@mui/material/IconButton";
import { IoMdOpen } from "react-icons/io";
import {
  ApplicationAccept,
  ApplicationReject,
} from "./../../Account/TabPages/Modals/";
import TableNoteField from "../../../../UI/Table/TableNoteField";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Api from "../../../../Services/ApplicationApi";
import AccountApi from "./../../../../Services/AccountApi";
import { useSnackbar } from "notistack";
import Constants from "../../../../Constants/Constants";

const CIP = ({ type, row }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [CIP, setCIP] = React.useState([]);
  const [random, setRandom] = React.useState("");

  const fetchData = async () => {
    let getCIP = await Api.getCipData();
    setCIP(getCIP);
  };
  const acceptHandler = () => {
    setRandom(`${Math.random()}`);
  };
  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const onAcceptApplication = async (notes, ssn) => {
    if (notes !== "") {
      await AccountApi.addNote({
        account: ssn,
        body: notes,
      });
    }
    let postAML = await Api.approveAML({ accounts: ["617672387"] });
    if (postAML.data.result.success) {
      enqueueSnackbar(postAML.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };
  const onRejectApplication = async (notes, ssn) => {
    if (notes !== "") {
      await AccountApi.addNote({
        account: ssn,
        body: notes,
      });
    }
    let postCIP = await Api.rejectAML({ accounts: ["617672387"] });

    if (postCIP.data.result.success) {
      enqueueSnackbar(postCIP.data.result.msg, {
        variant: "success",
      });
    } else
      enqueueSnackbar(Constants.Save_Changes_Failed, {
        variant: "error",
      });
  };
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
              content={
                <ApplicationAccept
                  ssn={params.row.account}
                  onAcceptApplication={onAcceptApplication}
                  triggerClose={acceptHandler}
                />
              }
            >
              <IconButton>
                <DoneIcon color="success" />
              </IconButton>
            </Modal>

            <Modal
              closeDependancy={random}
              content={
                <ApplicationReject
                  ssn={params.row.account}
                  onRejectApplication={onRejectApplication}
                  triggerClose={acceptHandler}
                />
              }
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
  return (
    <>
      <Box sx={{ height: "20rem", width: "100%" }}>
        <Table columns={column} rows={CIP} rowID="account" />
      </Box>
    </>
  );
};

export default CIP;
