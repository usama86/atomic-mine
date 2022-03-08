import * as React from "react";
import Modal from "@mui/material/Modal";
import { Close, StyledPaper } from "./Modal.style";

import { IconButton } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";

export default function BasicModal({
  children,
  content,
  width,
  closeDependancy,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    handleClose();
  }, [closeDependancy]);
  return (
    <div>
      <span onClick={handleOpen}>{children}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledPaper width={width}>
          <Close>
            <IconButton onClick={handleClose}>
              <IoCloseOutline />
            </IconButton>
          </Close>
          {content}
        </StyledPaper>
      </Modal>
    </div>
  );
}

BasicModal.defaultProps = {
  content: <div>no content given</div>,
  closeDependancy: "",
  width: "400px",
};
