import { styled } from 'styled-components';
import ColorPicker from './ColorPicker';
import { useState } from 'react';
const TeamAddContainer = styled.div`
  width: 100%;
  height: 36%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
const Wrapper = styled.div``;
const TeamAddBtn = styled.button`
  font-size: 22px;
  font-weight: 100;
  color: grey;
  border-radius: 50px;
  background-color: rgb(254, 250, 250);
  box-shadow:
    -4px -4px 13px rgba(242, 242, 242, 1),
    4px 4px 13px rgba(242, 242, 242, 1);
  outline: none;
  cursor: pointer;
  border: none;
  &&:hover {
    transform: translateY(1px);
    box-shadow: none;
    color: black;
  }
  &&:active {
    opacity: 0.5;
  }
`;
const TAddModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.2);
  z-index: 1000;
`;
const TModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 400px;
  height: 410px;
  background-color: white;
  z-index: 1005;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 100;
  line-height: 1.5;
`;
const TMForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 78%;
  justify-content: space-between;
  padding-bottom: 14px;
`;
const TAMinput = styled.input`
  width: 98%;
  padding: 3px 0 3px 10px;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: white;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1);
  transition: 300ms ease-in-out;
  font-size: 15px;
`;

const BtnColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ATMbutton = styled.button`
  width: 48%;
  font-size: 21px;
  font-weight: 100;
  color: grey;
  border-radius: 15px;
  background-color: rgb(254, 250, 250);
  box-shadow:
    -4px -4px 13px rgba(242, 242, 242, 1),
    4px 4px 13px rgba(242, 242, 242, 1);
  outline: none;
  cursor: pointer;
  border: none;
  &&:hover {
    transform: translateY(1px);
    box-shadow: none;
    color: black;
  }
  &&:active {
    opacity: 0.5;
  }
`;
function TeamAddModal() {
  const [teamAddModalIsOpen, setTeamAddModalIsOpen] = useState(false);

  return (
    <TeamAddContainer>
      <Wrapper>
        <TeamAddBtn onClick={() => setTeamAddModalIsOpen(true)}>
          ADD TEAM
        </TeamAddBtn>
      </Wrapper>
      {teamAddModalIsOpen && (
        <TAddModal>
          <TModalWrapper>
            <TMForm>
              <h2>ADD TEAM</h2>
              <TAMinput type="text" placeholder="teamname"></TAMinput>
              <TAMinput type="text" placeholder="nickname"></TAMinput>
              select team color
              <ColorPicker />
              <BtnColumn>
                <ATMbutton>CANCEL</ATMbutton>
                <ATMbutton type="submit">MAKE NEW CALENDAR!</ATMbutton>
              </BtnColumn>
            </TMForm>
          </TModalWrapper>
        </TAddModal>
      )}
    </TeamAddContainer>
  );
}
export default TeamAddModal;
