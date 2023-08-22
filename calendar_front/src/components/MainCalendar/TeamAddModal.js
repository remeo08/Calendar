import { styled } from 'styled-components';

const TeemAddModalContainer = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
const Wrapper = styled.div``;
const TeamAddBtn = styled.div`
  font-size: 22px;
  font-weight: 100;
  color: grey;
`;
const TAddModal = styled.div``;
function TeamAddModal() {
  return (
    <TeemAddModalContainer>
      <Wrapper>
        <TeamAddBtn>ADD TEAM</TeamAddBtn>
      </Wrapper>
      <TAddModal></TAddModal>
    </TeemAddModalContainer>
  );
}
export default TeamAddModal;
