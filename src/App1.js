import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component1/Navbar";
import Playground from "./component1/Playground";
import styled from "styled-components";
import Login from "./component1/Login";
import SignUp from "./component1/SignUp";
import ErrorPage from "./component1/ErrorPage";
import Home from "./component1/Home";
import AdminPannel from "./component1/AdminPannel";
import OneView from "./component1/admin/OneView";
import Hello from "./component1/admin/hello-world";
import { SidePanel } from "./component1/SidePanel";
import { Outlet } from "react-router-dom";
import AdminContainer from "./component1/admin/AdminContainer";
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background:#fafafa;
`;
const App1 = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Playground>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/admin" element={ <AdminContainer ChildComponents={<Outlet/> } />}>
              <Route path="one-view" element={<OneView />} />
              <Route path="hello" element={<Hello />} />
            </Route>
          </Routes>
        </Playground>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App1;
