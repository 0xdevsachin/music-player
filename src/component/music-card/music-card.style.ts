import styled from "@emotion/styled";
import { mediaQueryMinWidth } from "../../constants";

export const SongCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & svg {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }

  ${mediaQueryMinWidth.md} {
    height: 80vh;
  }
`;

export const TitleContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 10px 0 0;
  padding: 0 10px;
  ${mediaQueryMinWidth.md} {
    margin: 0;
  }
`;

export const ArtistContainer = styled.div`
  color: #fff;
  opacity: 0.6;
  font-size: 0.8rem;
  margin: 5px 0;
  ${mediaQueryMinWidth.md} {
    margin: 0;
  }
`;

export const SongBanner = styled.img`
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  ${mediaQueryMinWidth.md} {
    height: 450px;
    width: 450px;
  }
`;

export const AudioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: 10px auto;
  ${mediaQueryMinWidth.md} {
    width: 450px;
    margin: 0px auto;
  }
`;

export const MusicSeekContainer = styled.div`
  width: 100%;
  ${mediaQueryMinWidth.md} {
    width: 450px;
  }
`;

export const MusicSeek = styled.input`
  height: 5px;
  width: 100%;
  background: rgb(255, 255, 255, 0.2);
  border-radius: 12px;
  cursor: pointer;
`;

export const AudioControlContainer = styled.div`
  width: 60%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
