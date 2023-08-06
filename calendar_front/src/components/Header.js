import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
`;
const SearchBox = styled.input`
  border: 1px solid rgb(237, 70, 78);
  padding-left: 10px;
  border-radius: 7px;
`;

function Header() {
  return (
    <HeaderContainer>
      <SearchBox placeholder="search" />
    </HeaderContainer>
  );
}

export default Header;
