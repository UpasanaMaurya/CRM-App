import styled from "styled-components";
export const LogInContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputText = styled.input`
  flex: 1;
  border:none;
  outline:none;
  margin: 5px 20px 10px;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 1px 0px 0px 1px gray;
  &:focus{
    box-shadow: 0px 0px 0px 2px darkblue;
  }
`;
export const Heading = styled.span`
  margin-bottom: 10px;
  color: blue;
  font-size: 18px;
  padding-left: 24px;
`;
export const LoginBtn = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 20px;
  cursor: pointer;
  padding: 10px 6px;
  border-radius: 100px;
  background: blue;

  &:hover {
    background-image: linear-gradient( White,blue);
    box-shadow: 1px 1px 4px 4px gray;
  }
`;

export const ContentWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  box-shadow: 1px 1px 10px 10px lightgray;
`;

export const PassWrapper = styled.div`
position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
