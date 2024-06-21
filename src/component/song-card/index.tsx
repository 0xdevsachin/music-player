import { useEffect, useState } from "react";
import {
  ArtistContainer,
  DurationContainer,
  IconContainer,
  IconTextContainer,
  SongCardContainer,
  SongTitleContainer,
} from "./song-card.style";

const SongInfoCard = ({
  songIcon,
  songName,
  artistName,
  audioUrl,
  handleCardClick,
  activeSong,
}: {
  songIcon: string;
  songName: string;
  artistName: string;
  audioUrl: string;
  handleCardClick: () => void;
  activeSong: boolean;
}) => {
  const [duration, setDuration] = useState("");
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.addEventListener("loadedmetadata", () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      setDuration(
        `${minutes < 10 ? `0${minutes}` : minutes}: ${
          seconds < 10 ? `0${seconds}` : seconds
        }`
      );
    });
  }, [audioUrl]);
  return (
    <SongCardContainer isActive={activeSong} onClick={handleCardClick}>
      <IconTextContainer>
        <IconContainer
          src={`${process.env.REACT_APP_BASE_URL}/assets/${songIcon}`}
        />
        <div>
          <SongTitleContainer>{songName}</SongTitleContainer>
          <ArtistContainer>{artistName}</ArtistContainer>
        </div>
      </IconTextContainer>
      <DurationContainer>{duration}</DurationContainer>
    </SongCardContainer>
  );
};

export default SongInfoCard;
