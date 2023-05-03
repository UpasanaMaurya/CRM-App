import React from "react";
import styled from "styled-components";
//import styled from 'styled-component'
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
const AppContainer = styled.div`
width:100vw;
height:100vh;
background light;
`;
const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Playground>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Playground>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
