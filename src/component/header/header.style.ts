import styled from "@emotion/styled";
import { mediaQueryMinWidth } from "../../constants";

export const HeaderStyle = styled.div`
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    cursor: pointer;
    ${mediaQueryMinWidth.md} {
      display: none;
    }
  }
`;
