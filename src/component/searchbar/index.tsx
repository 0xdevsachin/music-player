import React, { useRef } from "react";
import {
  SearchBarContainer,
  SearchBarInput,
  SearchIconContainer,
} from "./search-bar.style";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  handleInputChange,
  searchValue,
}: {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}) => {
  const inputRef = useRef(null);
  return (
    <SearchBarContainer>
      <SearchBarInput
        onChange={handleInputChange}
        value={searchValue}
        ref={inputRef}
        placeholder="Search Songs, Artist"
      />
      <SearchIconContainer>
        <FiSearch />
      </SearchIconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
