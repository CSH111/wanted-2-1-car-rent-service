import styled from "styled-components";

import { default as T } from "../../components/Tag";

// Caritem
export const CarItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: solid black;
  border-width: 0 0 1px 0;
  .brand-and-name {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    > div:not(:last-child) {
      margin-bottom: 2.5px;
    }
  }
  .info {
    font-size: 12px;
    display: flex;
    margin-bottom: 5px;
    > div:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const Image = styled.img`
  width: 152px;
  height: 80px;
`;

// Category
export const CategoryContatiner = styled.div`
  padding: 10px;
  border-bottom: solid black 1px;
  display: flex;
  > div:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Tag = styled(T)`
  --height: 27px;
  width: 62px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  background-color: ${({ selected }) => (selected ? "#000000" : "#d9d9d9")};
`;
