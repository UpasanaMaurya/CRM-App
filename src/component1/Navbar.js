import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
const NavbarContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 0 24px;
  background: darkblue;
  color: white;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  color: white;
`;
const LoginContainer = styled.div``;
const Button = styled.button`
  color: darkblue;
  border: none;
  outline: none;
  margin: 2px 8px;
  padding: 4px 6px;
  border-radius: 4px;
  background: #fff;

  ${(props) =>
    props.outline &&
    css`
      color: white;
      background: blue;
      border: solid 2px white;
    `}
`;
const Navbar = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [isAdmin, setIsAdmin] = useState("false");

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("isAdmin"));
  }, [location.pathname]);
  return (
    <NavbarContainer>
      <LogoContainer>Sabera Online Store</LogoContainer>
      <LoginContainer>
        {isAdmin === "true" ? (
          <Button
            outline
            onClick={() => {
              nav("/admin");
            }}
          >
            Admin
          </Button>
        ) : location.pathname === "/login" ? (
          <Button
            outline
            onClick={() => {
              nav("/signup");
            }}
          >
            Sign up
          </Button>
        ) : (
          <Button
            onClick={() => {
              nav("/login");
            }}
          >
            Login
          </Button>
        )}
      </LoginContainer>
    </NavbarContainer>
  );
};

export default Navbar;
