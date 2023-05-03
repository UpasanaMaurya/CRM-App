//import React, { useState } from "react";
import StatCard from "../StatCard";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Edit3, Plus } from "react-feather";
import { Button, IconButton } from "@mui/material";
import AgGrid from "../AgGrid";
import { useGridData } from "../GridData";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import AddUserModal from "../AddUserModal";
import EditTaskModal from "../EditTaskModal";
import { useNavigate } from "react-router-dom";
import { BarChart } from "../Chart/BarChart";
import { AreaChart } from "../Chart/AreaChart";
const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // padding: 15px;
`;
const GridSection = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const ChartSection = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
const BarSection = styled.div`
  width: 700px;
  height: 330px;
`;
const PieSection = styled.div`
  width: 330px;

`;
const ButtonContainer = styled.div`
  width: 82%;
  margin-left: 36px;
  display: flex;
  //justify-content:center
  justify-content: flex-start;
`;
const OneView = () => {
  let count = 0;
  let nav = useNavigate();

  let rowData = useGridData({
    url: "http://localhost:4000/getTableData",
  });
  const [state, setState] = useState(rowData);
  const [open, setOpen] = useState(false);
  const [onEdit, setOnEdit] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { isEdit: false, rowData: [] }
  );
  useEffect(() => {
    debugger;
    setState(rowData);
  }, [rowData]);
  const addNewRow = async () => {
    setOpen(!open);
  };
  const addRowData = async (data) => {
    let resp = await axios({
      method: "post",
      url: "http://localhost:4000/addDataToTable",
      data,
    });
    setState({
      tableData: resp.data.tableData,
      statData: resp.data.statData,
      isError: resp.data.isError,
    });
  };
  const onRowUpdate = async (data) => {
    let resp = await axios({
      method: "post",
      url: "http://localhost:4000/updateDataToTable",
      data,
    });
    setState({
      tableData: resp.data.tableData,
      statData: resp.data.statData,
      isError: resp.data.isError,
    });
  };

  return (
    <div>
      <StatContainer>
        <StatCard
          type="Backlog"
          icon={<Edit3 />}
          value={state?.statData?.backlog}
          theme={1}
        />
        <StatCard
          type="In Progress"
          icon={<Edit3 />}
          value={state?.statData?.inProgress}
          theme={2}
        />
        <StatCard
          type="Completed"
          icon={<Edit3 />}
          value={state?.statData?.completed}
          theme={3}
        />
        <StatCard
          type="Closed"
          icon={<Edit3 />}
          value={state?.statData?.closed}
          theme={4}
        />
      </StatContainer>
      <ChartSection>
        <BarSection>
          <BarChart data={rowData} />
        </BarSection>
        <PieSection>
          <AreaChart data={rowData} />
        </PieSection>
      </ChartSection>
      <GridSection>
        <AgGrid
          tableData={state.tableData}
          isError={state.isError}
          onUpdate={onRowUpdate}
          setIsEdit={setOnEdit}
        />

        <ButtonContainer>
          <Button
            onClick={addNewRow}
            color="success"
            variant="contained"
            startIcon={<Plus />}
          >
            Create a Task
          </Button>
          <IconButton
            onClick={() => {
              nav(--count);
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => {
              nav(++count);
            }}
          >
            <ChevronRight />
          </IconButton>
        </ButtonContainer>
      </GridSection>

      <AddUserModal open={open} setOpen={setOpen} addRowData={addRowData} />
      <EditTaskModal
        isEdit={onEdit.isEdit}
        setIsEdit={setOnEdit}
        rowData={onEdit.rowData}
        updateRowData={onRowUpdate}
      />
    </div>
  );
};
export default OneView;
