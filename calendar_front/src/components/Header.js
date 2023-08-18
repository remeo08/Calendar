import { styled } from 'styled-components';
import { LuSettings, LuBell, LuSearch } from 'react-icons/lu';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid rgb(235, 237, 239);
  padding: 8px 0;
`;
const SearchBox = styled.input`
  border: 1px solid rgb(235, 237, 239);
  padding-left: 10px;
  border-radius: 7px;
  font-size: 14px;
  color: rgb(237, 70, 78);
  width: 60%;
  margin-left: 2%;
`;
const Blank = styled.div`
  display: flex;
  width: 30%;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.6;
  width: 30%;
  margin: 0 12px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Blank></Blank>
      <SearchBox placeholder="search" />
      <IconBox>
        <LuBell />
        <LuSettings />
      </IconBox>
    </HeaderContainer>
  );
}

export default Header;
