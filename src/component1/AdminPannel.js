//import React, { useState } from "react";
import StatCard from "./StatCard";
import styled from "styled-components";
import { Edit3 } from "react-feather";
import AgGrid from "./AgGrid";
import { useGridData } from "./GridData";
import axios from "axios";
import { useEffect, useState } from "react";
import AddUserModal from "./AddUserModal";
import {SidePanel }from "./SidePanel";

const Container = styled.div`
  padding: 20px;
  //margin:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StatContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const GridSection = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const AdminPannel = () => {
  let rowData = useGridData({
    url: "http://localhost:4000/getTableData",
  });
  const [state, setState] = useState(rowData);
  const [open, setOpen] = useState(false);
  useEffect(() => {
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
    setState({ tableData: resp.data.tableData, isError: resp.data.isError });
  
  };

  return (
    <div>
      <SidePanel/>
    <Container>
      <StatContainer>
        <StatCard type="Open" icon={<Edit3 />} value="8" theme={1} />
        <StatCard type="Open" icon={<Edit3 />} value="6" theme={2} />
        <StatCard type="Open" icon={<Edit3 />} value="4" theme={3} />
        <StatCard type="Open" icon={<Edit3 />} value="2" theme={4} />
      </StatContainer>
      <button onClick={addNewRow}>Add Row</button>
      <GridSection>
        <AgGrid tableData={state.tableData} isError={state.isError} />
      </GridSection>
      <AddUserModal open={ open } setOpen={ setOpen } addRowData={ addRowData} />
      </Container>
      </div>
  );
};
export default AdminPannel;
