import { styled } from 'styled-components';

const SearchInfoContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 40%;
  //   z-index: 1004;
  // background-color: rgb(100, 100, 100, 0.2);
`;
const Wrapper = styled.div``;

function SearchInfo() {
  return (
    <SearchInfoContainer>
      {/* <Wrapper>event list.map</Wrapper> */}
    </SearchInfoContainer>
  );
}

export default SearchInfo;
