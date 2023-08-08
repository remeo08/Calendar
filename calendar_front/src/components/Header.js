import { styled } from 'styled-components';
import { LuSettings, LuBell } from 'react-icons/lu';
import { BiSearchAlt2 } from 'react-icons/bi';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  height: 50px;
`;
const SearchBox = styled.input`
  border: 1px solid rgb(237, 70, 78);
  padding-left: 10px;
  border-radius: 7px;
`;

const IconBox = styled.div`
  width: 45px;
  display: flex;
  justify-content: space-around;
  opacity: 0.6;
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
