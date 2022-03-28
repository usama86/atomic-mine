import React from "react";
import OrderTable from "./../../PageUtils/OrderTable";
import Box from "./../../../../UI/Layout/Box";
import Button from "../../../../UI/Button/Button";
import { getFields } from "./getFields";
import orders from "../../../../Constants/mock_data_expiration_autoLiquidation.json";
import Modal from "../../../../UI/Modal/Modal";
import { AddNew } from "./Early";

const PendingPage = (props) => {
  const [random, setRandom] = React.useState("");
  return (
    <Box sx={{ position: "relative" }}>
      <OrderTable
        type={"Pending"}
        column={getFields("Pending", "DNE")}
        row={orders}
      />
      <Modal
        closeDependancy={random}
        content={<AddNew setRandom={setRandom} />}
      >
        <Button sx={{ position: "absolute", top: 0, right: 0, color: "#fff" }}>
          NEW
        </Button>
      </Modal>
    </Box>
  );
};

const AutoLiquidation = () => {
  return <PendingPage />;
};

export default AutoLiquidation;
