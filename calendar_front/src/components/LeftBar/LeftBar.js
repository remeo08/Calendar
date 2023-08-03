import { styled } from 'styled-components';

const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 44px;
  height: 520px;
  background-color: rgb(255, 255, 255);
  border-radius: 14px 0 0 14px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Column = styled.div`
  padding: 12px;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgb(255, 232, 230);
  border-radius: 15px;
`;
const MyCalendarIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(255, 240, 236);
`;
const TeamCalendarIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(255, 240, 236);
`;
const MakeTeam = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(255, 232, 230);
  color: orange;
  text-align: center;
`;
function LeftBar() {
  return (
    <LeftBarContainer>
      <Wrapper>
        <Column>
          <Icon />
        </Column>
        <Column>
          <MyCalendarIcon />
        </Column>
        <Column>
          <TeamCalendarIcon />
        </Column>
        <Column>
          <TeamCalendarIcon />
        </Column>
        <Column>
          <TeamCalendarIcon />
        </Column>
      </Wrapper>
      <Wrapper>
        <Column>
          <MakeTeam>+</MakeTeam>
        </Column>
      </Wrapper>
    </LeftBarContainer>
  );
}

export default LeftBar;
