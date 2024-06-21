import styled from "@emotion/styled";
import { mediaQueryMinWidth } from "../../constants";

export const SongCardContainer = styled.div<{ isActive?: boolean }>`
  padding: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
  ${(props) =>
    props.isActive && "background: rgb(0, 0, 0, 0.3); border-radius: 10px;"}
  &:hover {
    background: rgb(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  ${mediaQueryMinWidth.md} {
    margin: 10px;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconContainer = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  object-fit: cover;
`;

export const SongTitleContainer = styled.div`
  font-weight: 500;
  color: #fff;
  font-size: 1rem;
`;

export const ArtistContainer = styled.div`
  color: #fff;
  font-size: 0.8rem;
  opacity: 0.5;
`;

export const DurationContainer = styled.div`
  color: #fff;
  opacity: 0.5;
`;
