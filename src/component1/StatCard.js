import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const themeContext = {
  1: "#fa021b",
  2: "#f5d902",
  3: "#00ff00",
  4: "#0f02f7",
};

const Container = styled.div`
  width: 300px;
  height: 100px;
  margin: 20px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => themeContext[props.theme]}33;
  border: 1px solid  ${(props) => themeContext[props.theme]}44;
`;
const TypeContainer = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #788888;
`;
const ValueContainer = styled(TypeContainer)`
  height: 65%;
`;
const CircularProgressContainer = styled.div`
  width: 30px;
  height: 30px;
  margin: 20px;
  position: relative;
`;
const ProgressBarWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  position: relative;
  border: 3px solid #eee;
  border-top-color: ${(props) => themeContext[props.theme]};

`;

const BarEndOne = styled.span`
  left: 2px;
  top: 1.5px;
  height: 3px;
  width: 3px;
  display: block;
  background: ${(props) => themeContext[props.theme]};
  position: absolute;
  border-radius: 50%;
`;
const BarEndTwo = styled(BarEndOne)`
  top: 2px;
  right: 1.5px;
  left: auto;
`;
const Value = styled.span`
  margin: 20px;
  font-size: 35px;
  color: ${(props) => themeContext[props.theme]};
`;
const Icon = styled(Value)`
  margin: 5px;
  & svg {
    color: ${(props) => themeContext[props.theme]};
  }
`;
const Type = styled(Icon)`
  font-size: 20px;
  color:#000005;
`;


const StatCard = (props) => {
  return (
    <Container theme={props.theme}>
      <TypeContainer>
        <Icon>{props.icon}</Icon>
        <Type>{props.type}</Type>
      </TypeContainer>
      <Divider theme={props.theme}></Divider>
      <ValueContainer>
        <Value theme={props.theme}>{props.value}</Value>
        <CircularProgressContainer>
          <ProgressBarWrapper theme={props.theme}>
            <BarEndOne theme={props.theme} />
            <BarEndTwo />
          </ProgressBarWrapper>
        </CircularProgressContainer>
      </ValueContainer>
    </Container>
  );
};
export default StatCard;

StatCard.PropType = {
  theme: PropType.string,
  type: PropType.string.isRequired,
  value: PropType.string.isRequired,
  icon: PropType.elementType.isRequired,
};
