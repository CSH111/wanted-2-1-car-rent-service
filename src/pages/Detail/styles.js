import styled from "styled-components";

//main
export const Image = styled.img`
  max-width: 100%;
`;
export const MainContainer = styled.div`
  border-bottom: 1px solid black;
  /*  */
  display: flex;
  flex-direction: column;
  .brand-and-name {
    padding: 15px;
    .brand {
      font-size: 20px;
      font-weight: 700;
    }
    .name {
      font-size: 24px;
      font-weight: 700;
    }
  }
  .amount {
    align-self: flex-end;
    padding: 15px;
    font-size: 17px;
  }
`;

// Infos
export const InfoHeader = styled.header`
  background-color: #0094ff;
  height: 48px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  color: white;
  padding: 0 15px;
`;

export const InfoList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    > :first-child {
      font-size: 17px;
      font-weight: 700;
    }
    > :last-child {
      font-size: 17px;
    }
  }
`;
