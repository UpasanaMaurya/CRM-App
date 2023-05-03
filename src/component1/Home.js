import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AgGrid from "./AgGrid";
import MuiGrid from "./MuiGrid";
import styled from "styled-components";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const baseURL = "http://localhost:4000/";

const Home = () => {
  const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const ContentWrapper = styled.div`
    margin: 10px;
  `;
  const [Grid, SetGrid] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    async function checkForLiveSession() {
      const userName = sessionStorage.getItem("userName");
      const resp = await axios.get(baseURL + "checkSession?usrn=" + userName);

      if (resp.data && resp.data.redirectUrl) {
        nav(resp.data.redirectUrl);
      }
    }
    checkForLiveSession();
  }, []);

  return (
    <Container>
      <button
        onClick={() => {
          SetGrid(!Grid);
        }}
      >
        toggle button
      </button>
      <ContentWrapper>{Grid ? <AgGrid /> : <MuiGrid />}</ContentWrapper>
    </Container>
  );
};
export default Home;
