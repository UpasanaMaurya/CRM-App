import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
const NavbarContainer = styled.div`
  height: 40px;
  display: flex;
  padding: 0 24px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
color:black;`;
const SignInContainer = styled.div``;
const Button = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 2px 8px;
  padding: 4px 6px;
  border-radius: 4px;
  background: #4331ed;
  ${(props) =>
    props.outline &&
    css`
      color: darkblue;
      border: solid 2px darkblue;
      background:white;
    `}
`;
const Navbar = ({ props }) => {
  const location = useLocation();
  const nav=useNavigate()
  return (
    <NavbarContainer>
      <LogoContainer>
        <h6>Shop Up</h6>
      </LogoContainer>
      <SignInContainer>
        {location.pathname === "/login" ? (
          <Button outline onClick={()=>nav('/signUp')}>Login</Button>
        ) : (
          <Button onClick={()=>nav('/login')}>SignUp</Button>
        )}
      </SignInContainer>
    </NavbarContainer>
  );
};

export default Navbar;
