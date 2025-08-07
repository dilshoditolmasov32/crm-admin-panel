import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.css";

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 6,
  p: 4,
  borderRadius: "20px",
};

export default function BasicModal({ open, setOpen, titleText }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            marginBottom: "24px",
            fontWeight: 600,
            color: "#000",
          }}
        >
          {titleText}
        </Typography>
        <button className="modal-deleteBtn">Удалить</button>
      </Box>
    </Modal>
      );
}
