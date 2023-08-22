import React, { useRef } from 'react';
import { styled } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
`;

const SearchInfoContainer = styled.div`
  position: absolute;
  display: flex;
  border: none;
  left: 34.7vw;
  top: 10vh;
  border-radius: 6px;
  width: 30.1vw;
  background-color: rgb(249, 249, 249);
  box-shadow:
    -3px -3px 8px rgba(235, 245, 235, 1),
    3px 3px 8px rgba(10, 50, 70, 0.3);
  z-index: 1005;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 12px;
`;

const SearchList = styled.div`
  font-size: 14px;
  padding: 3px 0;
  border-bottom: 1px solid rgb(235, 237, 239);
`;

function SearchInfo({ onClose }) {
  const overlayRef = useRef(null);

  const handleOverlayClick = (event) => {
    if (overlayRef.current === event.target) {
      onClose();
    }
  };

  return (
    <Overlay ref={overlayRef} onClick={handleOverlayClick}>
      <SearchInfoContainer>
        <Wrapper>
          <SearchList>event list.map/"teaminfo"/"title"/"date"</SearchList>
          <SearchList>event list.map/"teaminfo"/"title"/"date"</SearchList>
          <SearchList>event list.map/"teaminfo"/"title"/"date"</SearchList>
          <SearchList>event list.map/"teaminfo"/"title"/"date"</SearchList>
          <SearchList>event list.map/"teaminfo"/"title"/"date"</SearchList>
        </Wrapper>
      </SearchInfoContainer>
    </Overlay>
  );
}

export default SearchInfo;
