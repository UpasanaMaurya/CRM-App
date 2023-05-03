import React, { useRef, useState } from "react";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import Dropdown from "./Dropdown";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const users = ["@upmaurya", "gyprakash", "askumar", "vimoksshi"];

const AddUserModal = function ({ open, setOpen, addRowData }) {
  const handleClose = () => {
    setOpen(!open);
  };
  const taskDescRef = useRef();
  const [owner, setOwner] = useState('');
  const [creater, setCreater] = useState('');

  const addNewRowData = () => {
    addRowData({
      taskDesc: taskDescRef.current.value || "",
      owner: owner || "",
      creater: creater || "",
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ color: "blue" }} variant="body1" component={"p"}>
          Create a Task
        </Typography>
        <TextField
          inputRef={taskDescRef}
          label="Task Description"
          variant="outlined"
        />
        <Dropdown items={users} label="Owner" handler={setOwner} value={owner} />
        <Dropdown items={ users } label="Creater" handler={ setCreater } value={ creater} />
        <Button variant="contained" onClick={addNewRowData}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
