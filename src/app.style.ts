import styled from "@emotion/styled";
import { mediaQueryMinWidth } from "./constants";

export const AppContainer = styled.div<{ bgColor?: string }>`
  background: #0c0600;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  padding: 10px;
  background: rgb(51, 30, 0);
  background: ${(props) => `linear-gradient(
    153deg,
    ${props.bgColor ?? "#331E00"} 15%,
    ${props.bgColor ?? "#331E00"} 5%,
    #000 100%
  )`};
  ${mediaQueryMinWidth.md} {
    padding: 20px;
  }
`;

export const SongInfoContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  ${mediaQueryMinWidth.md} {
    flex-direction: row;
    width: 80%;
    gap: 50px;
  }
`;

export const SongListSearchWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  padding: 10px;
  overflow: hidden;
  width: ${(props) => (props.isOpen ? "94%" : "0")};
  transition: all 0.3s ease-in-out;
  background: ${(props) => `linear-gradient(
    153deg,
    ${props.bgColor ?? "#331E00"} 15%,
    ${props.bgColor ?? "#331E00"} 5%,
    #000 100%
  )`};
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 80px;
  left: ${(props) => (props.isOpen ? "0" : "-100px")};
  ${mediaQueryMinWidth.md} {
    width: 100%;
    background: unset;
    position: relative;
    top: unset;
    height: unset;
    max-width: 500px;
  }
`;

export const SongListContainer = styled.div`
  overflow: scroll;
  ${mediaQueryMinWidth.md} {
    height: 70vh;
  }
`;
