import styled from "@emotion/styled";
import { mediaQueryMinWidth } from "../../constants";

export const SearchBarContainer = styled.div`
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  height: 45px;
  width: 90%;
  background: transparent;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  ${mediaQueryMinWidth.md} {
    width: 90%;
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin-left: auto;
  /* padding-right: 10px; */

  & svg {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 800;
  }
`;
