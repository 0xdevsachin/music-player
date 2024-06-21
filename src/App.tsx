import { useEffect, useState } from "react";
import {
  AppContainer,
  SongInfoContainer,
  SongListContainer,
  SongListSearchWrapper,
} from "./app.style";
import Header from "./component/header";
import Tabs from "./component/tabs";
import { fetchSongsList } from "./api";
import { ISong } from "./types";
import SongInfoCard from "./component/song-card";
import Loader from "./component/loader";
import SearchBar from "./component/searchbar";
import MusicCard from "./component/music-card";

const TabsList = ["For You", "Top Picks"];

const App = () => {
  const [activeTab, setActiveTab] = useState(TabsList[0]);
  const [songList, setSongList] = useState<ISong[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredList, setFilteredList] = useState<ISong[]>([]);
  const [song, setSong] = useState<ISong>();
  const [searchInput, setSearchInput] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDuration, setSongDuration] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchSongsList();
      setSongList(response);
      setSong({ ...response[0], idx: 0 });
      setFilteredList(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filterSongBasisTab = () => {
    setIsPlaying(false);
    setSongDuration(0);
    let newArray = songList;
    if (activeTab === TabsList[1]) {
      newArray = songList.filter((items) => items.top_track === true);
    }
    setSong({ ...newArray[0], idx: 0 });
    return newArray;
  };

  const handlePrevNextClick = (clickType: "prev" | "next") => {
    const activeIndex = song?.idx || 0;
    setIsPlaying(false);
    setSongDuration(0);
    if (clickType === "next") {
      if (activeIndex === filteredList.length - 1) {
        setSong({ ...filteredList[0], idx: 0 });
        return;
      }
      setSong({ ...filteredList[activeIndex + 1], idx: activeIndex + 1 });
    } else {
      if (activeIndex === 0) {
        setSong({
          ...filteredList[filteredList.length - 1],
          idx: filteredList.length - 1,
        });
        return;
      }
      setSong({ ...filteredList[activeIndex - 1], idx: activeIndex - 1 });
    }
  };

  useEffect(() => {
    filterSongBasisTab();
  }, [activeTab]);

  useEffect(() => {
    const filteredArray = filterSongBasisTab();
    if (searchInput === "" || !songList.length) {
      setFilteredList(filteredArray);
      return;
    }
    const newArray = filteredArray.filter(
      (items) =>
        items.name.toLowerCase().startsWith(searchInput) ||
        items.artist.toLowerCase().startsWith(searchInput)
    );
    setFilteredList(newArray);
  }, [searchInput, activeTab]);

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <AppContainer bgColor={song?.accent}>
      <Header
        isOpen={drawerOpen}
        handleMenuClick={() => setDrawerOpen(!drawerOpen)}
      />

      {loading && (
        <SongInfoContainer>
          <Loader />
        </SongInfoContainer>
      )}
      {!loading && song && (
        <SongInfoContainer>
          <SongListSearchWrapper isOpen={drawerOpen} bgColor={song.accent}>
            <Tabs
              tabList={TabsList}
              handleTabClick={(item) => setActiveTab(item)}
              activeTab={activeTab}
            />
            <SearchBar
              searchValue={searchInput}
              handleInputChange={(e) => setSearchInput(e.target.value)}
            />
            <SongListContainer>
              {filteredList.map((item, idx) => (
                <SongInfoCard
                  songName={item.name}
                  songIcon={item.cover}
                  artistName={item.artist}
                  audioUrl={item.url}
                  key={item.id}
                  handleCardClick={() => {
                    setSong({ ...item, idx });
                    setIsPlaying(false);
                    setSongDuration(0);
                    if (drawerOpen) {
                      setDrawerOpen(false);
                    }
                  }}
                  activeSong={idx === song?.idx}
                />
              ))}
            </SongListContainer>
          </SongListSearchWrapper>
          <MusicCard
            songName={song.name}
            artist={song.artist}
            audio={song.url}
            banner={song.cover}
            handlePrevNext={handlePrevNextClick}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            songDuration={songDuration}
            setSongDuration={setSongDuration}
          />
        </SongInfoContainer>
      )}
    </AppContainer>
  );
};
export default App;
