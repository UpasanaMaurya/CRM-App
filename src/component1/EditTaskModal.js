import React, { useRef, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
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

const users = [
  "@upmaurya",
  "@trnaidu",
  "@gyprakash",
  "@maurya",
  "@askumar",
  "@vimokashi",
];
const statusData = ["Backlog", "In Progress", "Complete", "Closed"];
const statusMap = { Backlog: 0, "In Progress": 1, Complete: 2, Closed: 3 };
const EditTaskModal = function ({ isEdit, setIsEdit, updateRowData, rowData }) {
  const handleClose = () => {
    setIsEdit({ isEdit: !isEdit });
  };

  const taskDescRef = useRef();
  //const taskIdRef = useRef();
  const loggedHoursRef = useRef();
  const [owner, setOwner] = useState(rowData.owner);
  const [status, setStatus] = useState(statusData[rowData.status]);

  const updateRow = () => {
    //debugger;
    updateRowData({
      ...rowData,
      loggedHours: loggedHoursRef.current.value || "",
      taskDesc: taskDescRef.current.value || "",
      owner: owner || rowData.owner || "",
      status: statusMap[status],
      action: status === 3 ? 4 : statusMap[status] + 1,
    });
  };
  return (
    <Modal
      open={isEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ color: "blue" }} variant="h5" component={"p"}>
          Updating Task
        </Typography>
        <Drawer />
        <Typography
          sx={{ color: "blue", margin: "20px 4p 10px" }}
          variant="h6"
          component={"p"}
        >
          Task Id:<b>{rowData.taskId}</b>
        </Typography>
        <TextField
          inputRef={taskDescRef}
          label="Task Description"
          variant="outlined"
          defaultValue={rowData.taskDesc}
        />
        <Dropdown
          items={users}
          label="Owner"
          handler={setOwner}
          value={rowData.owner}
        />
        <TextField
          disabled
          label="Creater"
          variant="outlined"
          defaultValue={rowData.creater}
        />
        <Dropdown
          items={statusData}
          label="Status"
          handler={setStatus}
          value={statusData[rowData.status]}
        />
        {/* <TextField
          inputRef={loggedHoursRef}
          label="Logged Hours"
          variant="outlined"
          defaultValue={rowData.loggedHours}
        /> */}
        <TextField
          inputRef={loggedHoursRef}
          label="Logged Hours"
          variant="outlined"
          defaultValue={rowData.loggedHours}
        />
        <Button
          sx={{ margin: "30px 0 4px", borderRadius: "30px", padding: "15px" }}
          variant="contained"
          size="large"
          onClick={updateRow}
        >
          Update Task{" "}
        </Button>
      </Box>
    </Modal>
  );
};

export default EditTaskModal;
