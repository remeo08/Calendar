import { styled } from 'styled-components';
import { LuSettings, LuBell } from 'react-icons/lu';
import SearchInfo from './SearchInfo';
import React, { useState } from 'react';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3vh;
  border-bottom: 1px solid rgb(235, 237, 239);
  padding: 8px 0;
`;
const SearchBox = styled.input`
  padding: 3px 0 3px 10px;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: white;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1);
  transition: 300ms ease-in-out;
  width: 30vw;
  &&:focus {
    background-color: rgb(249, 249, 249);
    border: 1px;
    outline: none;
    box-shadow:
      -3px -3px 8px rgba(235, 245, 235, 1),
      3px 3px 8px rgba(0, 0, 70, 0.3);
  }
`;
const Blank = styled.div`
  width: 15vw;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.6;
  width: 15vw;
  padding-right: 0.6vw;
`;

function Header({ data, initialCalendars, initialEvents }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 1) {
      setSearchIsOpen(true);
    } else {
      setSearchIsOpen(false);
    }
  };

  const matchingData =
    inputValue.length >= 1
      ? data.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase()),
        )
      : [];

  const handleSearchBoxClick = () => {
    if (inputValue.length >= 1) {
      setSearchIsOpen(true);
    }
  };

  return (
    <HeaderContainer>
      <Blank></Blank>
      <SearchBox
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleSearchBoxClick}
        placeholder="search"
      />
      {searchIsOpen ? (
        <SearchInfo
          onClose={() => setSearchIsOpen(false)}
          matchingData={matchingData}
          initialCalendars={initialCalendars}
          initialEvents={initialEvents}
        />
      ) : null}
      <IconBox>
        <LuBell />
        <LuSettings />
      </IconBox>
    </HeaderContainer>
  );
}

export default Header;
