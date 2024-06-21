import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsPlayCircleFill } from "react-icons/bs";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import {
  ArtistContainer,
  AudioContainer,
  AudioControlContainer,
  MusicSeek,
  MusicSeekContainer,
  SongBanner,
  SongCardContainer,
  TitleContainer,
} from "./music-card.style";

type ClickType = "prev" | "next";

const MusicCard = ({
  songName,
  artist,
  banner,
  audio,
  handlePrevNext,
  isPlaying,
  setIsPlaying,
  songDuration,
  setSongDuration,
}: {
  songName: string;
  artist: string;
  banner: string;
  audio: string;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
  songDuration: number;
  setSongDuration: React.Dispatch<SetStateAction<number>>;
  handlePrevNext: (clickType: ClickType) => void;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    audioElement.addEventListener("timeupdate", () => {
      setProgress(audioElement?.currentTime || 0);
    });
    if (isPlaying) {
      audioElement?.play();
    } else {
      audioElement?.pause();
    }
    return () => {
      audioElement.removeEventListener("timeupdate", () => {});
    };
  }, [isPlaying, audioRef]);

  return (
    <SongCardContainer>
      <TitleContainer>
        <span>{songName}</span>
        <ArtistContainer>{artist}</ArtistContainer>
      </TitleContainer>
      <SongBanner src={`${process.env.REACT_APP_BASE_URL}/assets/${banner}`} />
      <AudioContainer>
        <audio
          src={audio}
          onEnded={() => {
            setIsPlaying(false);
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setSongDuration(audioRef.current.duration);
            }
          }}
          ref={audioRef}
        />
        <MusicSeekContainer>
          <MusicSeek
            type="range"
            defaultValue={songDuration}
            value={progress}
            max={songDuration}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = Number(e.target.value);
                setProgress(Number(e.target.value));
              }
            }}
          />
        </MusicSeekContainer>
        <AudioControlContainer>
          <TbPlayerTrackPrevFilled onClick={() => handlePrevNext("prev")} />
          {!isPlaying && (
            <BsPlayCircleFill onClick={() => setIsPlaying(true)} />
          )}
          {isPlaying && <BsFillPauseFill onClick={() => setIsPlaying(false)} />}
          <TbPlayerTrackNextFilled onClick={() => handlePrevNext("next")} />
        </AudioControlContainer>
      </AudioContainer>
    </SongCardContainer>
  );
};
export default MusicCard;
