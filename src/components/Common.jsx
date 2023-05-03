import styled from "styled-components";
export const LoginContainer = styled.div`
  margin-top:100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh-40px);
  );
`;

export const InputText = styled.input`
  flex: 1;
  outline: none;
  border:none;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 5px 20px 10px;
  box-shadow: 0px 0px 0px 1px #ddd;

  &:focus {
    box-shadow: 0px 0px 0px #406cf6;
  }
`;
export const LoginBtn = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 20px;
  padding: 12px 6px;
  border-radius: 100px;
  background: #4331ed;
`;
export const ContentWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const Heading = styled.span`
  margin-bottom: 10px;
  color: blue;
  font-size: 18px;
  padding-left: 24px;
`;
export const PassWrapper = styled.div`
width: 100px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
`;
export const LockIcon = styled.span`
  position: absolute;
  padding: 2px;
  cursor: pointer;
  right: 30px;

  & > sag {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: blue;
    border-radius: 2x;
  }
`;
