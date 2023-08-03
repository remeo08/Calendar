import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: rgb(255, 240, 236);
`;
const SearchBox = styled.input`
  border: none;
  padding-left: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <SearchBox placeholder="search" />
    </HeaderContainer>
  );
}

export default Header;
