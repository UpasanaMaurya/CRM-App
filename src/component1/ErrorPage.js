import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 2px 8px;
  padding: 4px 6px;
  border: 1px solid white;
  border-radius: 4px;
  background: darkblue;
`;
const Heading = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;
const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>
          <h1>This page is not Found</h1>
        </Heading>
        <Button
          onClick={() => {
            nav("/login");
          }}
        >
          Go To logIn Page
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};
export default ErrorPage;
