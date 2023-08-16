import { styled } from 'styled-components';
import { LuSettings, LuBell, LuSearch } from 'react-icons/lu';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(235, 237, 239);
`;
const SearchBox = styled.input`
  border: 1px solid rgb(237, 70, 78);
  padding-left: 10px;
  border-radius: 7px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.6;
  width: 5%;
  margin: 0 12px;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <SearchBox placeholder="search" />
      <IconBox>
        <LuBell />
        <LuSettings />
      </IconBox>
    </HeaderContainer>
  );
}

export default Header;
