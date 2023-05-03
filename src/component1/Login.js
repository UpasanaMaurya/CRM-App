import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import {
  LogInContainer,
  InputText,
  Heading,
  LoginBtn,
  ContentWrapper,
} from "./common.js";
import { useNavigate } from "react-router-dom";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
const baseURL = "http://localhost:4000/";
const Msg = styled.span`
  color: red;
  //padding: 0px 21px;
  margin: 5px 24px 0px;
  font-size: 12px;

  ${(props) =>
    props.exists &&
    css`
      color: green;
    `}
`;

const Login = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState("");
  // useEffect(() => {
  //   const getData = async function () {
  //     const resp = await axios.get('http://localhost:4000/data');
  //     alert(' data from Server  ' + resp.data);
  //   };
  //   getData();
  // })
  const userNameRef = useRef();
  const PasswordRef = useRef();
  const submitRef = useRef();
  const authenticateUser = async function () {
    const userName = userNameRef.current.value;
    const password = PasswordRef.current.value;
    //console.log(userName, password);
    const resp = await axios.post(
      baseURL + "authenticateUser",
      { userName, password },
      axiosConfig
    );
    //==;
    if (resp.data && resp.data.isAuthenticated) {
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("isAdmin", resp.data.isAdmin);
      setMessage("You Have logged in");
      if ((resp.data.isAdmin)) nav("/admin/one-view");
      else nav("/home");
    } else {
      setMessage(resp.data.message);
      sessionStorage.setItem("isAdmin", false);
    }
  };

  //checkUserExists

  const checkUserExists = async function () {
    const userName = userNameRef.current.value;

    if (userName.trim() === "" || userName.trim().length < 3) return;
    const resp = await axios.post(
      baseURL + "checkUserExists",
      { userName },
      axiosConfig
    );
    if (resp.data && !resp.data.isExistingUser) {
      setMessage("User does not exist, please create an account");
    } else {
      setMessage("User Exist");
    }
  };

  const onEnter = function (e) {
    //if the key pressed is an Enter key then
    if (e.keyCode === 13) {
      submitRef.current.click();
    }
  };
  const sessionUserName = sessionStorage.getItem("userName") || "";
  return (
    <LogInContainer>
      <ContentWrapper>
        <Heading>Login</Heading>
        {message ? (
          <Msg exists={message === "User Exist"}>{message}</Msg>
        ) : null}
        <InputText
          ref={userNameRef}
          type="text"
          placeholder=" Enter Your User Id"
          onBlur={checkUserExists}
          defaltValue={sessionUserName}
          autoFocus={sessionUserName ? false : true}
        />
        <InputText
          ref={PasswordRef}
          type="password"
          placeholder="Enter Your Password"
          autoFocus={sessionUserName ? true : false}
          onKeyUp={onEnter}
        />
        <LoginBtn ref={submitRef} onClick={authenticateUser}>
          Login
        </LoginBtn>
      </ContentWrapper>
    </LogInContainer>
  );
};

export default Login;
