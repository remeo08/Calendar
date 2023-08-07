import { styled } from 'styled-components';

const TeamListContainer = styled.div`
  width: 17vw;
  background-color: rgb(255, 255, 255);
  z-index: 98;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 10px 0px 30px -10px rgb(0, 13, 39, 0.3);
`;
const Wrapper = styled.div``;
const TeamListHeader = styled.div`
  width: 98%;
  height: 5vh;
  border-bottom: 1px solid rgb(255, 240, 230);
  padding-top: 14px;
  padding-left: 14px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding: 8px 18px;
  font-size: 12px;
`;
function TeamList({ id, team }) {
  return (
    <TeamListContainer key={id}>
      <Wrapper>
        <TeamListHeader>"team.teamname"</TeamListHeader>
        <div>
          <Ul>
            <Li>"team.teamember : 륜아"</Li>
            <Li>"team.teamember : 병용"</Li>
            <Li>"team.teamember : 가림"</Li>
            <Li>"team.teamember : 소진"</Li>
            <Li>"team.teamember : 지윤"</Li>
          </Ul>
        </div>
      </Wrapper>
    </TeamListContainer>
  );
}
export default TeamList;
