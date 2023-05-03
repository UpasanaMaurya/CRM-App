import React, { useState, useRef } from "react";
import { Flag, Lock, Unlock } from "react-feather";
//import { IN, US } from "country-flag-icons/react/3x2";
import {
  LogInContainer,
  InputText,
  Heading,
  LoginBtn,
  ContentWrapper,
  PassWrapper,
  LockIcon,
} from "./common.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const userNameRef = useRef();
  const PasswordRef = useRef();
  const baseURL = "http://localhost:4000/";
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const countryMap = new Map([]);
  countryMap.set("+91", "<IN />");
  countryMap.set("+1", "<US />");
  const [type, setType] = useState("text");
  const [FlagIcon, setFlagIcon] = useState(null);
  const onlyAlphabets = function (e) {
    const char = e.key;
    const regex = new RegExp(/^[a-z A-Z]+$/);
    if (regex.test(char)) return true;
    else {
      e.preventDefault();
      //return false;
    }
  };
  const onlyNumbers = function (e) {
    const char = e.key;
    const regex = new RegExp(/^[+0-9\b]+$/);
    if (!regex.test(char) && e.which === 8) {
      e.preventDefault();
    }
    //check for the country
    //debugger;
    // switch (e.currentTarget.value) {
    //   case "+91": {
    //     setFlagIcon(<Flag />);
    //     break;
    //   }
    //   case "+1": {
    //     setFlagIcon(<RO />);
    //     break;
    //   }
    //   default: {
    //     setFlagIcon(null);
    //     }
    // }

    const i2C = e.currentTarget.value.substring(0, 2);
    const i3C = e.currentTarget.value.substring(0, 3);

    if (countryMap.has(i2C)) {
      setFlagIcon(countryMap.get(i2C));
    } else if (countryMap.has(i3C)) {
      setFlagIcon(countryMap.get(i3C));
    } else {
      setFlagIcon(null);
    }
  };
  const toggleVisibility = () => {
    if (type === "text") setType("password");
    else setType("text");
  };
  const onRegister = async function () {
    const resp = await axios.post(
      baseURL + "registerUser",
      {
        userName: userNameRef.current.value,
        password: PasswordRef.current.value,
      },
      axiosConfig
    );
    if (resp.data && resp.data.isRegistered) {
      alert("User Registered successfully, please login to continoue.....");
      nav("/login");
    }
  };

  return (
    <LogInContainer>
      <ContentWrapper>
        <Heading>
          <h4>Register</h4>
        </Heading>
        <InputText
          type="text"
          ref={userNameRef}
          onKeyDown={onlyAlphabets}
          placeholder="Enter Your FullName "
        />
        <PassWrapper>
          <InputText
            type={type}
            ref={PasswordRef}
            placeholder="Enter Your Password"
          />

          <LockIcon onClick={toggleVisibility}>
            {type === "text" ? <Unlock /> : <Lock />}
          </LockIcon>
        </PassWrapper>
        <InputText type="text" placeholder=" Enter Your User name" />
        <PassWrapper>
          <InputText
            type="text"
            placeholder="Enter Your Phone No."
            onKeyDown={onlyNumbers}
          />
          <LockIcon onChange={toggleVisibility}>{FlagIcon}</LockIcon>
        </PassWrapper>
        <LoginBtn onClick={onRegister}>SignUp</LoginBtn>
      </ContentWrapper>
    </LogInContainer>
  );
};

export default SignUp;
