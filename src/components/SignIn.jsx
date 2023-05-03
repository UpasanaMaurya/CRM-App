import React, { useRef } from "react";
import axios from "axios";
import {
  LoginContainer,
  ContentWrapper,
  Heading,
  InputText,
  LoginBtn,
} from "./Common";

const SignIn = () => {
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const authenticateUser =  async function () {
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;

    axios.post(
      "http://localhost:4000/authenticateUser",
      {
        userName,
        userPassword,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  };

  // const [str, setStr] = useState("This String is from client !");
  // useEffect(() => {
  //   const getData = async function () {
  //     const resp = await axios.get("http://localhost:4000/data");
  //     // // alert("data from Server:" + resp.data);
  //     // setTimeout(() => {
  //     //   setStr(resp.data);
  //     // }, 4000);
  //   };
  //   getData();
  // }, []);
  return (
    <LoginContainer>
      <ContentWrapper>
        <Heading>Login</Heading>
        <InputText type="text" ref={userNameRef} placeholder="Email" />
        <InputText
          type="password"
          ref={userPasswordRef}
          placeholder="Password"
        />
        <LoginBtn onclick={authenticateUser}>Login</LoginBtn>
      </ContentWrapper>
    </LoginContainer>
  );
};

export default SignIn;
