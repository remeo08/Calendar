import { styled } from 'styled-components';
import React, { useState } from 'react';

import TeamList from './TeamList';
import MakeTeamModal from './MakeTeamModal';
const Container = styled.div`
  display: flex;
`;
const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 44px;
  height: 550px;
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
  background-color: rgb(255, 165, 180);
  border-radius: 15px;
`;
const MyCalendarIcon = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: none;
  background-color: rgb(192, 246, 229);
`;
const TeamCalendarIcon = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(221, 203, 254);

  border: none;
`;
const MakeTeam = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(255, 165, 180);
  color: white;
  text-align: center;
`;

function LeftBar() {
  const [visible, setVisible] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  return (
    <Container>
      <LeftBarContainer>
        <Wrapper>
          <Column>
            <Icon />
          </Column>
          <Column>
            <MyCalendarIcon name="My" />
          </Column>
          <Column>
            <TeamCalendarIcon
              onClick={() => {
                setVisible(!visible);
              }}
            ></TeamCalendarIcon>
          </Column>
        </Wrapper>
        <Wrapper>
          <Column>
            <MakeTeam
              onClick={() => {
                setAddTeam(!addTeam);
              }}
            >
              {addTeam ? '-' : '+'}
            </MakeTeam>
          </Column>
        </Wrapper>
      </LeftBarContainer>
      {visible && <TeamList />}
      {addTeam && <MakeTeamModal />}
    </Container>
  );
}

export default LeftBar;
