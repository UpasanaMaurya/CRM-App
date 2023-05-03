import React from "react";
import { SidePanel } from "../SidePanel";
import styled from "styled-components";
const Container = styled.div`
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  // width: calc(100vw - 100px);
`;
const AdminContainer = ({ ChildComponents }) => {
  return (
    <Container>
      {ChildComponents}
      <SidePanel />
    </Container>
  );
};

export default AdminContainer;
