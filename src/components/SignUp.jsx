import React from "react";
import { useState } from "react";
import {Unlock,Lock} from 'react-feather';
import {
  LoginContainer,
  ContentWrapper,
  Heading,
  InputText,
  LoginBtn,
  PassWrapper,
  LockIcon
} from "./Common";
const SignUp = () => {
  const[type,setType]=useState('text')
  const onlyAlphabets = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[a-z A-Z]+$/);
    if (regex.test(char)) return true;
    else {
      evt.preventDefault();
      return false;
    }
  };

  const onlyNumbers = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[0-9 /]+$/);
    if (!regex.test(char)) evt.preventDefault();
  };
  const toggleVisibilityOfPassword = function () {
    if (type === "text") setType("password");
    else setType("text");
  };
  return (
    <LoginContainer>
      <ContentWrapper>
        <Heading>Registration</Heading>
        <InputText
          type="text"
          placeholder="Full Name"
          onKeyDown={onlyAlphabets}
        />
        <PassWrapper>
        <InputText
          type={type}
          placeholder="Password"
          onKeyDown={onlyNumbers}
          />
          <LockIcon onclick={ toggleVisibilityOfPassword }>
          {type==='text'?<Unlock/>:<Lock/>}
          </LockIcon>
          </PassWrapper>
        <InputText type="text" placeholder="User Name" />
        <InputText
          type="text"
          placeholder="Mobile No."
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <LoginBtn>SignUp</LoginBtn>
      </ContentWrapper>
    </LoginContainer>
  );
};

export default SignUp;
