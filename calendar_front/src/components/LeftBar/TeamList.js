import { styled } from 'styled-components';

const TeamListContainer = styled.div`
  width: 15vw;
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
  padding-left: 20px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding: 8px 20px;
  font-size: 12px;
`;

function TeamList({ user, num }) {
  return (
    <TeamListContainer>
      <Wrapper key={user[num].id}>
        <TeamListHeader>{user[num].teamname}</TeamListHeader>
        <div>
          <Ul>
            {user[num].members.map((member, index) => (
              <Li key={index}>{member}</Li>
            ))}
          </Ul>
        </div>
      </Wrapper>
    </TeamListContainer>
  );
}

export default TeamList;
