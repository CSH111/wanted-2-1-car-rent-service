import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  border-bottom: solid black 1px;
  button {
    position: absolute;
    left: 0;
  }
  .title {
    font-size: 17px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
