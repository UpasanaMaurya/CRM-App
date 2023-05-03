import React from "react";
import styled from 'styled-components'
const Heading = styled.div`
  color: blueviolet;
  font-size: 20px;
  font-weight: bold;
  margin-left:100px;
`;
const Hello = () => {
    return (
        <Heading >
             <h1>Hello,</h1>
        </Heading>
       
    )
}
export default Hello;