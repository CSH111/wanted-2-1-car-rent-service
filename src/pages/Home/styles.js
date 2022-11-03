import styled from "styled-components";

import { default as T } from "../../components/Tag";

export const CategoryContatiner = styled.div`
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
